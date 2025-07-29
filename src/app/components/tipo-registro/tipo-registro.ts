import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tipo-registro',
  imports: [],
  templateUrl: './tipo-registro.html',
  styleUrl: './tipo-registro.css'
})
export class TipoRegistro {
  constructor (private router:Router) {}

  Empleador(){
    this.router.navigate(['/registro-empleador']);
  }
  Empleado(){
    this.router.navigate(['/registro-trabajador']);
  }
  Regreso(){
    this.router.navigate(['/landing-page']);
  }

}
