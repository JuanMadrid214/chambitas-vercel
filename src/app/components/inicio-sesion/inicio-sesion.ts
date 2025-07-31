import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.html'
})
export class InicioSesionComponent {
  formData = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) {}
    
  Regreso(){
    this.router.navigate(['/tipo-registro']);
    }

  submit() {
    this.http.post<any>('http://localhost:4000/api/auth/login', this.formData)
      .subscribe({
        next: (res) => {
          // Guardar datos del usuario sin JWT
          localStorage.setItem('user', JSON.stringify(res.user));

          // Redirigir según tipo
          if (res.user.tipo === 'empleador') {
            this.router.navigate(['/dashboard-empleador']);
          } else if (res.user.tipo === 'trabajador') {
            this.router.navigate(['/dashboard-trabajador']);
          } else {
            this.router.navigate(['/']);
          }
        },
        error: () => alert('Credenciales incorrectas')
      });
  }
}
