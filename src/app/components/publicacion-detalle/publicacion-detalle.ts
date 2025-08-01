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

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
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
    this.comentarios = [
      { usuarioNombre: 'Juan Pérez', texto: 'Muy buen trabajo!', fecha: new Date() }
    ];
  }

  agregarComentario() {
    if (!this.comentario.trim()) return;
    this.comentarios.push({
      usuarioNombre: 'Usuario Actual',
      texto: this.comentario,
      fecha: new Date()
    });
    this.comentario = '';
  }
}
