import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificacion-perfil',
  standalone: true,
  imports: [],
  templateUrl: './modificacion-perfil.html',
  styleUrl: './modificacion-perfil.css'
})
export class ModificacionPerfil {
  activeTab: 'perfil' | 'password' = 'perfil';
constructor (private router:Router) {}
    Regreso(){
    this.router.navigate(['/tipo-registro']);
  }
}
