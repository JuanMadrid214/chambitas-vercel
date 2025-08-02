import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { API_BASE_URL } from '../../../config';

@Component({
  selector: 'app-registro-empleador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-empleador.html',
  styleUrls: ['./registro-empleador.css']
})
export class RegistroEmpleador {

  formData = {
    nombre_completo: '',
    email: '',
    usuario: '',
    contrasena: '',
    tipo_usuario: 'empleador',  // <--- cambiar aquí
    telefono: '',
    curp: '',
    codigo_postal: '',
    zona: '',
    ine_url: ''
  };


  selectedFile: File | null = null;
  uploading = false;

  constructor(private http: HttpClient, private router: Router) {}

  Regreso() {
    this.router.navigate(['/tipo-registro']);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Función para verificar si el email ya está registrado
  checkEmailExists(email: string): Promise<boolean> {
    return firstValueFrom(this.http.get<{ exists: boolean }>(`${API_BASE_URL}/api/auth/check-email?email=${encodeURIComponent(email)}`))
      .then(res => res.exists)
      .catch(() => false);
  }

  async submit() {
    // Validar email duplicado antes de enviar
    if (await this.checkEmailExists(this.formData.email)) {
      alert('El correo ya está registrado');
      return;
    }

    if (this.selectedFile) {
      this.uploading = true;
      try {
        // Subir imagen a backend
        const uploadResponse = await this.http.post<any>(
          //'http://localhost:4000/api/upload',
          `${API_BASE_URL}/api/upload`,
          this.createFormData(this.selectedFile)
        ).toPromise();

        this.formData.ine_url = uploadResponse?.url || '';
      } catch (err) {
        alert('Error al subir la imagen');
        this.uploading = false;
        return;
      }
      this.uploading = false;
    }

    this.http.post(`${API_BASE_URL}/api/auth/register`, this.formData)
    .subscribe({
      next: () => {
        alert('Registro exitoso');
        this.router.navigate(['/inicio-sesion']);
      },
      error: (err) => {
        const msg = err?.error?.error || 'Error al registrar usuario';
        alert(msg);
      }
    });
  }

  private createFormData(file: File): FormData {
    const formData = new FormData();
    formData.append('imagen', file);
    return formData;
  }
}
