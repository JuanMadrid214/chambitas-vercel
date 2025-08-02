import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { PublicacionEmpleador } from '../publicacion-empleador/publicacion-empleador';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-lista-publicaciones-empleador',
  standalone: true,
  imports: [CommonModule, PublicacionEmpleador, RouterModule],
  templateUrl: './lista-publicaciones-empleador.html',
  styleUrls: ['./lista-publicaciones-empleador.css']
})
export class ListaPublicacionesEmpleador implements OnInit {
  publicaciones: any[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarPublicaciones();
  }

  async cargarPublicaciones() {
    this.isLoading = true;
    try {
      this.publicaciones = await firstValueFrom(this.http.get<any[]>('http://localhost:4000/api/publicaciones/empleador'));
    } catch (error) {
      console.error('Error al cargar publicaciones', error);
    } finally {
      this.isLoading = false;
    }
  }

  async cargarPublicacion(id: number) {
    try {
      const publicacion: any = await firstValueFrom(this.http.get(`http://localhost:4000/api/publicaciones/empleador/${id}`));
      this.publicaciones.unshift(publicacion);
    } catch (error) {
      console.error('Error al cargar la publicación individual', error);
    }
  }

  public mostrarFormulario = false;

  abrirFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  async agregarPublicacion(idNuevaPublicacion: number) {
    await this.cargarPublicacion(idNuevaPublicacion);
    this.mostrarFormulario = false;
  }

  encodeText(text: string): string {
    return encodeURIComponent(text);
  }
}
