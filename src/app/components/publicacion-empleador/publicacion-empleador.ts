import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-publicacion-empleador',
  imports: [CommonModule, FormsModule],
  templateUrl: './publicacion-empleador.html',
  styleUrls: ['./publicacion-empleador.css']
})
export class PublicacionEmpleador implements OnInit {

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
      const formData = new FormData();
      formData.append('imagen', this.imagenFile);

      const uploadRes: any = await this.http.post('http://localhost:4000/api/upload-publicacion', formData).toPromise();
      const imagenUrl = uploadRes.url;

      const user = JSON.parse(localStorage.getItem('user') || '{}');
      const publicacionParaGuardar = {
        id_usuario: user.id,
        descripcion: this.descripcion,
        imagenUrl: imagenUrl
      };

      const createRes: any = await this.http.post('http://localhost:4000/api/publicaciones', publicacionParaGuardar).toPromise();
      const nuevaId = createRes.id;

      const publicacionCompleta: any = await this.http.get(`http://localhost:4000/api/publicaciones/empleador/${nuevaId}`).toPromise();

      this.publicacionCreada.emit(publicacionCompleta);
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
