
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-modificacion-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './modificacion-perfil.html',
  styleUrl: './modificacion-perfil.css'
})
export class ModificacionPerfil implements OnInit {
  activeTab: 'perfil' | 'password' = 'perfil';
  usuario: any = {};
  userId = 0;
  mensaje: string = ''; // ✅ para mostrar mensajes en lugar de alert
  passwordForm = { actual: '', nueva: '', confirmar: '' };

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      return; // ⛔️ Evita ejecutar en servidor
    }

    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (!user?.id) {
      this.mostrarMensaje('Usuario no autenticado');
      this.router.navigate(['/login']);
      return;
    }

    this.userId = user.id;
    this.cargarUsuario();
  }

  cargarUsuario() {
       const url = `http://localhost:4000/api/auth/usuario/${this.userId}`;
    // const url = `http://localhost:4000/api/usuario/${this.userId}`;
    this.http.get<any>(url).subscribe({
      next: (data) => {
        this.usuario = {
          nombre_completo: data.nombre_completo || '',
          email: data.email || '',
          usuario: data.usuario || '',
          contrasena: '',
          tipo_usuario: data.tipo_usuario || '',
          telefono: data.telefono || '',
          curp: data.curp || '',
          rfc: data.rfc || '',
          especialidad: data.especialidad || '',
          codigo_postal: data.codigo_postal || '',
          zona: data.zona || '',
          ine_url: data.ine_url || ''
        };
      },
      error: (err) => {
        console.error('Error al cargar usuario:', err);
        this.mostrarMensaje('Error al cargar perfil');
      }
    });
  }

  guardarCambios() {
    const tipo = this.usuario.tipo_usuario;
    const rutaBase = 'http://localhost:4000/api/auth';
    const ruta = tipo === 'empleador'
      ? `${rutaBase}/empleadores/${this.userId}`
      : tipo === 'trabajador'
      ? `${rutaBase}/trabajadores/${this.userId}`
      : null;

    if (!ruta) {
      this.mostrarMensaje('Tipo de usuario no válido');
      return;
    }

    this.http.put(ruta, this.usuario).subscribe({
      next: () => this.mostrarMensaje('Perfil actualizado correctamente'),
      error: (err) => {
        console.error(err);
        this.mostrarMensaje(`Error al guardar cambios: ${err.status}`);
      }
    });
  }

  cambiarContrasena() {
    if (this.passwordForm.nueva !== this.passwordForm.confirmar) {
      this.mostrarMensaje('Las contraseñas no coinciden');
      return;
    }

const url = `http://localhost:4000/api/auth/usuario/${this.userId}/password`;
    this.http.put(url, {
      actual: this.passwordForm.actual,
      nueva: this.passwordForm.nueva
    }).subscribe({
      next: () => {
        this.mostrarMensaje('Contraseña actualizada correctamente');
        this.passwordForm = { actual: '', nueva: '', confirmar: '' };
      },
      error: (err) => {
        console.error(err);
        this.mostrarMensaje(
          err.status === 401
            ? 'Contraseña actual incorrecta'
            : `Error al cambiar contraseña: ${err.status}`
        );
      }
    });
  }

  Regreso() {
    this.router.navigate(['/resena-trabajadores']);
  }

  mostrarMensaje(msg: string) {
    this.mensaje = msg;
    setTimeout(() => (this.mensaje = ''), 4000); // 🔄 mensaje temporal
  }
}
