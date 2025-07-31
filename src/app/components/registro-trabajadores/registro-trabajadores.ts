import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-registro-trabajadores',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-trabajadores.html',
  styleUrls: ['./registro-trabajadores.css']
})
export class RegistroTrabajadores {

  formData = {
    nombre_completo: '',
    email: '',
    usuario: '',
    contrasena: '',
    tipo_usuario: 'trabajador',
    telefono: '',
    curp: '',
    rfc: '',
    especialidad: '',
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

  checkEmailExists(email: string): Promise<boolean> {
    return firstValueFrom(this.http.get<{ exists: boolean }>(`http://localhost:4000/api/auth/check-email?email=${encodeURIComponent(email)}`))
      .then(res => res.exists)
      .catch(() => false);
  }

  async submit() {
    if (await this.checkEmailExists(this.formData.email)) {
      alert('El correo ya está registrado');
      return;
    }

    if (this.selectedFile) {
      this.uploading = true;
      try {
        const uploadResponse = await this.http.post<any>(
          'http://localhost:4000/api/upload',
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

    this.http.post('http://localhost:4000/api/auth/register', this.formData)
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
