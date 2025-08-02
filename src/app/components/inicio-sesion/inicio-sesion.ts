import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.html',
  styleUrls: ['./inicio-sesion.css'],
  imports: [FormsModule]
})
export class InicioSesionComponent {
  formData = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}
    
  Regreso(){
    this.router.navigate(['/landing-page']);
    }

  submit() {
    this.http.post<any>('http://localhost:4000/api/auth/login', this.formData)
      .subscribe({
        next: (res) => {
          // Guardar datos del usuario sin JWT
          localStorage.setItem('user', JSON.stringify(res.user));

          // Redirigir según tipo
          if (res.user.tipo === 'empleador') {
            this.router.navigate(['/resena-trabajadores']);
          } else if (res.user.tipo === 'trabajador') {
            this.router.navigate(['/lista-publicaciones']);
          }else if (res.user.tipo === 'administrador') {
            this.router.navigate(['/resumen']);
          } else {
            this.router.navigate(['/']);
          }
        },
        error: () => alert('Credenciales incorrectas')
      });
  }
}