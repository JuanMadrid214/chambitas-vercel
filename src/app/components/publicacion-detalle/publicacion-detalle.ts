import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common'; // para ngIf, ngFor y pipe date
import { FormsModule } from '@angular/forms'; // para ngModel
import { RouterModule } from '@angular/router'; // para routerLink

@Component({
  selector: 'app-publicacion-detalle',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], // IMPORTANTE
  templateUrl: './publicacion-detalle.html',
  styleUrls: ['./publicacion-detalle.css'],
  providers: [DatePipe]  // opcional si usas datePipe en código TS
})
export class PublicacionDetalle implements OnInit {
  publicacion: any = null;
  comentario: string = '';
  comentarios: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  usuarioActualNombre: string = '';

ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  this.usuarioActualNombre = user?.nombre || 'Usuario Actual';

  if (id) {
    this.cargarPublicacion(id);
    this.cargarComentarios(id);
  }
}


  async cargarPublicacion(id: string) {
    try {
      this.publicacion = await this.http.get(`http://localhost:4000/api/publicaciones/trabajador/${id}`).toPromise();
    } catch (error) {
      console.error('Error al cargar publicación', error);
    }
  }

  async cargarComentarios(id: string) {
  try {
    const res = await this.http.get<any>(`http://localhost:4000/api/comentarios/${id}`).toPromise();
    console.log('Comentarios recibidos:', res);

    if (Array.isArray(res)) {
      this.comentarios = res;
    } else {
      console.error('La respuesta no es un arreglo');
      this.comentarios = [];
    }
  } catch (error) {
    console.error('Error al cargar comentarios', error);
    this.comentarios = [];
  }
}



  async agregarComentario() {
  if (!this.comentario.trim()) return;

  const id_publicacion = this.publicacion.id;
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (!user?.id) {
    console.error('Usuario no autenticado');
    return;
  }

  try {
    await this.http.post(`http://localhost:4000/api/comentarios`, {
      id_publicacion,
      id_usuario: user.id, // ✅ se toma del localStorage
      texto: this.comentario
    }).toPromise();

    this.comentario = '';
    this.cargarComentarios(id_publicacion);
  } catch (error) {
    console.error('Error al enviar comentario', error);
  }
}
}
