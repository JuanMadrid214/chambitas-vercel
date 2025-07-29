import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-empleador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro-empleador.html',
  styleUrl: './registro-empleador.css'
})
export class RegistroEmpleador {
constructor (private router:Router) {}
    Regreso(){
    this.router.navigate(['/tipo-registro']);
  }
}
