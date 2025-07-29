import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-trabajadores',
  imports: [],
  templateUrl: './registro-trabajadores.html',
  styleUrl: './registro-trabajadores.css'
})
export class RegistroTrabajadores {
  constructor (private router:Router) {}
    Regreso(){
    this.router.navigate(['/tipo-registro']);
  }

}
