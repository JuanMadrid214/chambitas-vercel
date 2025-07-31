import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen',
  imports: [],
  templateUrl: './resumen.html',
  styleUrl: './resumen.css'
})
export class Resumen {
constructor (private router:Router) {}

  Empleador(){
    this.router.navigate(['/lista-empleadores']);
  }
  Empleado(){
    this.router.navigate(['/lista-trabajadores']);
  }
  Regreso(){
    this.router.navigate(['/landing-page']);
  }
}
