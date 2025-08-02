import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { PublicacionTrabajador } from '../publicacion-trabajador/publicacion-trabajador';
import { RouterModule } from '@angular/router'; 


import { API_BASE_URL } from '../../../config';


@Component({
  selector: 'app-lista-publicaciones',
  standalone: true,
  imports: [CommonModule, PublicacionTrabajador, RouterModule],
  templateUrl: './lista-publicaciones.html',
  styleUrls: ['./lista-publicaciones.css']
})
export class ListaPublicaciones implements OnInit {
  publicaciones: any[] = [];
  isLoading = false;

   

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.cargarPublicaciones();
  }

  async cargarPublicaciones() {
    this.isLoading = true;
    try {
      this.publicaciones = await firstValueFrom(this.http.get<any[]>(`${API_BASE_URL}/api/publicaciones/trabajador`));
    } catch (error) {
      console.error('Error al cargar publicaciones', error);
    } finally {
      this.isLoading = false;
    }
  }

  async cargarPublicacion(id: number) {
    try {
      const publicacion: any = await firstValueFrom(this.http.get(`${API_BASE_URL}/api/publicaciones/trabajador/${id}`));
      this.publicaciones.unshift(publicacion);
    } catch (error) {
      console.error('Error al cargar la publicación individual', error);
    }
  }


  encodeText(text: string): string {
    return encodeURIComponent(text);
  }


  public mostrarFormulario = false;

  abrirFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  async agregarPublicacion(idNuevaPublicacion: number) {
    await this.cargarPublicacion(idNuevaPublicacion);
    this.mostrarFormulario = false;
  }

}
