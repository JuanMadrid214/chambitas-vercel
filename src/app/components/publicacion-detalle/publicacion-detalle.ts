import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common'; // para ngIf, ngFor y pipe date
import { FormsModule } from '@angular/forms'; // para ngModel
import { RouterModule } from '@angular/router'; // para routerLink

import { API_BASE_URL } from '../../../config';

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
  const tipo = this.route.snapshot.paramMap.get('tipo'); // <- lo importante

  const user = JSON.parse(localStorage.getItem('user') || '{}');
  this.usuarioActualNombre = user?.nombre || 'Usuario Actual';

  if (id && tipo) {
    this.cargarPublicacion(id, tipo);
    this.cargarComentarios(id);
  }
}

async cargarPublicacion(id: string, tipo: string) {
  try {
    const url = `${API_BASE_URL}/api/publicaciones/${tipo}/${id}`;
    this.publicacion = await this.http.get(url).toPromise();
  } catch (error) {
    console.error('Error al cargar publicación', error);
  }
}

  async cargarComentarios(id: string) {
  try {
    const res = await this.http.get<any>(`${API_BASE_URL}/api/comentarios/${id}`).toPromise();
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
    await this.http.post(`${API_BASE_URL}/api/comentarios`, {
      id_publicacion,
      id_usuario: user.id, // se toma del localStorage
      texto: this.comentario
    }).toPromise();

    this.comentario = '';
    this.cargarComentarios(id_publicacion);
  } catch (error) {
    console.error('Error al enviar comentario', error);
  }
}
}
