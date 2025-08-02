import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { API_BASE_URL } from '../../../config';

@Component({
  selector: 'app-publicacion-trabajador',
  imports: [CommonModule, FormsModule],
  templateUrl: './publicacion-trabajador.html',
  styleUrls: ['./publicacion-trabajador.css']
})
export class PublicacionTrabajador implements OnInit {

  @Input() mostrarFormulario = true;

  @Output() publicacionCreada = new EventEmitter<any>();

  descripcion: string = '';
  imagenFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  isUploading: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imagenFile = file;

      const reader = new FileReader();
      reader.onload = () => this.previewUrl = reader.result;
      reader.readAsDataURL(file);
    }
  }

  async submit() {
    if (!this.imagenFile) return;

    this.isUploading = true;

    try {
      // Subir imagen a backend
      const formData = new FormData();
      formData.append('imagen', this.imagenFile);

      const uploadRes: any = await this.http.post(`${API_BASE_URL}/api/upload-publicacion`, formData).toPromise();
      const imagenUrl = uploadRes.url;

      // Obtener datos del usuario
      const user = JSON.parse(localStorage.getItem('user') || '{}');

      const publicacionParaGuardar = {
        id_usuario: user.id,
        descripcion: this.descripcion,
        imagenUrl: imagenUrl
      };

      // Crear publicación y obtener el ID generado
      const createRes: any = await this.http.post(`${API_BASE_URL}/api/publicaciones`, publicacionParaGuardar).toPromise();
      const nuevaId = createRes.id;

      // Obtener la publicación completa ya creada con todos los datos
      const publicacionCompleta: any = await this.http.get(`${API_BASE_URL}/api/publicaciones/trabajador/${nuevaId}`).toPromise();

      // Emitir la publicación completa para actualizar la lista sin recargar
      this.publicacionCreada.emit(publicacionCompleta);

      // Después de crear la publicación en el backend:
      this.publicacionCreada.emit(nuevaId);

      alert('¡Publicación guardada exitosamente!');
      this.descripcion = '';
      this.imagenFile = null;
      this.previewUrl = null;

    } catch (error) {
      console.error(error);
      alert('Error al subir la publicación.');
    } finally {
      this.isUploading = false;
    }
  }
}
