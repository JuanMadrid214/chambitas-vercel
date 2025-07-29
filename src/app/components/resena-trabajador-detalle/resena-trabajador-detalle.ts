import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resena-trabajador-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resena-trabajador-detalle.html',
  styleUrl: './resena-trabajador-detalle.css'
})
export class ResenaTrabajadorDetalle implements OnInit, OnDestroy {
  currentWorker: any; 
  relatedWorkers: any[] = []; 
  private routeSubscription: Subscription | undefined;

  // ¡DATOS SIMULADOS INTEGRADOS DIRECTAMENTE AQUÍ!
  // ESTA DEBE SER UNA COPIA EXACTA DE LOS DATOS QUE ESTÁN EN resena-trabajadores.component.ts
  // ASEGÚRATE QUE 'resenasDetalle' ESTÁ ESCRITO IGUAL EN TODOS LADOS (sin 'ñ' si así lo decidiste)
  private ALL_TRABAJADORES_DATA = [
    {
      id: 1,
      nombre: 'Chalo Rodriguez',
      fecha: '12/03/2023 - 01:15 p.m.',
      calificacion: 4,
      categoria: 'Construcción',
      resena: "This refreshing blend of peppermint leaves is invigorating and invigorating. It's perfect for settling an upset stomach and can help with headaches.",
      telefono: '2711354427',
      imagenUrl: 'https://honduras.argos.co/wp-content/uploads/2023/11/Conoce-los-tipos-de-albanileria-ArgosHonduras-img-noticia.jpg',
      resenasDetalle: [ // <--- ¡SIN 'Ñ' AQUI!
        {
          id: 'r1',
          usuarioNombre: 'Cliente A',
          titulo: 'Trabajo Rápido y Limpio',
          calificacion: 5,
          descripcion: 'Chalo hizo un trabajo excelente, muy rápido y dejó todo impecable. ¡Altamente recomendado!',
          fotosDelTrabajo: [
            'https://png.pngtree.com/png-vector/20190119/ourmid/pngtree-decoration-renovation-worker-cartoon-cartoon-worker-png-image_473673.png',
            'https://png.pngtree.com/png-vector/20190119/ourmid/pngtree-decoration-renovation-worker-cartoon-cartoon-worker-png-image_473673.png'
          ],
          fechaResena: '05/03/2023'
        },
        {
          id: 'r2',
          usuarioNombre: 'Cliente B',
          titulo: 'Buena comunicación',
          calificacion: 4,
          descripcion: 'Cumplió con los tiempos y siempre estuvo en contacto para cualquier duda. El resultado final fue muy bueno.',
          fotosDelTrabajo: [
            'https://png.pngtree.com/png-vector/20190119/ourmid/pngtree-decoration-renovation-worker-cartoon-cartoon-worker-png-image_473673.png'
          ],
          fechaResena: '10/03/2023'
        }
      ]
    },
    {
      id: 2,
      nombre: 'Ana García',
      fecha: '15/04/2023 - 10:30 a.m.',
      calificacion: 5,
      categoria: 'Electricista',
      resena: "Excelente servicio, muy profesional y rápido. Resolvió el problema eléctrico en poco tiempo.",
      telefono: '2711354427',
      imagenUrl: 'https://aprende.com/wp-content/uploads/2022/09/electricista-trabajando.jpg',
      resenasDetalle: [ // <--- ¡SIN 'Ñ' AQUI!
        {
          id: 'r3',
          usuarioNombre: 'Cliente C',
          titulo: 'Problema resuelto al instante',
          calificacion: 5,
          descripcion: 'Ana llegó puntual y diagnosticó el problema eléctrico de inmediato. La reparación fue perfecta.',
          fotosDelTrabajo: [
            'https://png.pngtree.com/png-vector/20190119/ourmid/pngtree-decoration-renovation-worker-cartoon-cartoon-worker-png-image_473673.png'
          ],
          fechaResena: '12/04/2023'
        },
        {
          id: 'r4',
          usuarioNombre: 'Cliente D',
          titulo: 'Muy atenta y clara',
          calificacion: 4,
          descripcion: 'Me explicó todo el proceso y fue muy profesional. La recomiendo para cualquier trabajo eléctrico.',
          fotosDelTrabajo: [],
          fechaResena: '14/04/2023'
        }
      ]
    },
    {
      id: 3,
      nombre: 'Luis Pérez',
      fecha: '20/05/2023 - 03:00 p.m.',
      calificacion: 3,
      categoria: 'Plomería',
      resena: "El trabajo fue aceptable, pero tardó un poco más de lo esperado en finalizar la reparación.",
      telefono: '2711354427',
      imagenUrl: 'https://cdn.milenio.com/uploads/media/2020/01/20/trabajador-profesional-foto-especial_0_15_700_436.jpg',
      resenasDetalle: [ // <--- ¡SIN 'Ñ' AQUI!
        {
          id: 'r5',
          usuarioNombre: 'Cliente E',
          titulo: 'Reparación de fuga',
          calificacion: 3,
          descripcion: 'La fuga se detuvo, pero la factura fue un poco alta y tardó un día extra.',
          fotosDelTrabajo: [],
          fechaResena: '18/05/2023'
        }
      ]
    },
    {
      id: 4,
      nombre: 'Marta López',
      fecha: '01/06/2023 - 09:00 a.m.',
      calificacion: 4,
      categoria: 'Jardinería',
      resena: "Muy buen trabajo de jardinería, dejó mi jardín impecable y me dio buenas recomendaciones.",
      telefono: '2711354427',
      imagenUrl: 'https://noticiaszmg.com/publicaciones/bloggif_5d2e24b3e56b6.jpeg',
      resenasDetalle: [ // <--- ¡SIN 'Ñ' AQUI!
          {
              id: 'r6',
              usuarioNombre: 'Cliente F',
              titulo: 'Mi jardín luce genial',
              calificacion: 5,
              descripcion: 'Transformó completamente mi jardín, se ve hermoso y muy cuidado. ¡Estoy muy feliz con el resultado!',
              fotosDelTrabajo: [
                  'https://png.pngtree.com/png-vector/20190119/ourmid/pngtree-decoration-renovation-worker-cartoon-cartoon-worker-png-image_473673.png',
                  'https://png.pngtree.com/png-vector/20190119/ourmid/pngtree-decoration-renovation-worker-cartoon-cartoon-worker-png-image_473673.png'
              ],
              fechaResena: '28/05/2023'
          }
      ]
    },
    {
      id: 5,
      nombre: 'Carlos Ruiz',
      fecha: '10/07/2023 - 02:00 p.m.',
      calificacion: 5,
      categoria: 'Pintura',
      resena: "Impecable. La pintura quedó perfecta y muy limpia la casa después del trabajo.",
      telefono: '2711354427',
      imagenUrl: 'https://www.serviciodepinturadecasas.com/images/pintura-de-casas-precios.jpg',
      resenasDetalle: [ 
          {
              id: 'r7',
              usuarioNombre: 'Cliente G',
              titulo: 'Casa como nueva',
              calificacion: 5,
              descripcion: 'El trabajo de pintura fue rápido, limpio y el resultado es excelente. Súper recomendado.',
              fotosDelTrabajo: [
                  'https://png.pngtree.com/png-vector/20190119/ourmid/pngtree-decoration-renovation-worker-cartoon-cartoon-worker-png-image_473673.png'
              ],
              fechaResena: '08/07/2023'
          }
      ]
    },
    {
      id: 6,
      nombre: 'Sofía Díaz',
      fecha: '22/07/2023 - 04:45 p.m.',
      calificacion: 4,
      categoria: 'Limpieza',
      resena: "Buena atención y el servicio de limpieza fue muy completo. Definitivamente la contrataría de nuevo.",
      telefono: '2711354427',
      imagenUrl: 'https://oem.com.mx/elsoldepuebla/img/21072569/1736520851/BASE_LANDSCAPE/1200/image.webp',
      resenasDetalle: [ // <--- ¡SIN 'Ñ' AQUI!
          {
              id: 'r8',
              usuarioNombre: 'Cliente H',
              titulo: 'Limpieza profunda',
              calificacion: 4,
              descripcion: 'Dejó mi casa reluciente. Faltó un detalle menor, pero en general un gran servicio.',
              fotosDelTrabajo: [],
              fechaResena: '20/07/2023'
          }
      ]
    },
     // NUEVO TRABAJADOR ELECTRICISTA PARA PROBAR relatedWorkers
    {
      id: 7, // Importante: ID único
      nombre: 'Roberto Voltaje',
      fecha: '01/08/2023 - 09:00 a.m.',
      calificacion: 4,
      categoria: 'Electricista', // Misma categoría que Ana García
      resena: "Un electricista muy capaz y amable. Recomendado para instalaciones.",
      telefono: '2711354428', // Número diferente
      imagenUrl: 'https://aprende.com/wp-content/uploads/2022/09/electricista-trabajando.jpg', // Puedes usar la misma imagen o una diferente
      resenasDetalle: [
          {
              id: 'r9',
              usuarioNombre: 'Cliente I',
              titulo: 'Instalación de luces',
              calificacion: 4,
              descripcion: 'Instaló todas las luces de mi casa de forma eficiente.',
              fotosDelTrabajo: [],
              fechaResena: '25/07/2023'
          }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(params => {
      const idString = params.get('id');
      if (idString) {
        const workerId = +idString; 
        this.loadWorkerData(workerId);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }

  private loadWorkerData(id: number): void {
    // Buscar al trabajador actual en los datos integrados de este componente
    this.currentWorker = this.ALL_TRABAJADORES_DATA.find(t => t.id === id);

    console.log('*** DEPURACIÓN DE WORKER DETALLE ***');
    console.log('ID buscado en URL:', id);
    console.log('Trabajador ACTUAL (currentWorker):', this.currentWorker);
    console.log('Resenas Detalle del currentWorker:', this.currentWorker?.resenasDetalle); // <--- ¡SIN 'Ñ' Y CON ? PARA SEGURIDAD!

    if (this.currentWorker) {
      // Filtrar trabajadores relacionados por categoría (excluyendo al trabajador actual)
      this.relatedWorkers = this.ALL_TRABAJADORES_DATA.filter(
        t => t.categoria === this.currentWorker.categoria && t.id !== this.currentWorker.id
      );
      console.log('Trabajadores RELACIONADOS (relatedWorkers):', this.relatedWorkers);
    } else {
      console.warn('Trabajador no encontrado con ID:', id);
    }
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }
}