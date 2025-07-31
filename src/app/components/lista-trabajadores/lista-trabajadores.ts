import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-trabajadores',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-trabajadores.html',
  styleUrl: './lista-trabajadores.css'
})
export class ListaTrabajadores implements OnInit {

  trabajadores: any[] = [];
  editandoId: number | null = null;
  editedData: any = {};

  constructor(private http: HttpClient,private router:Router) {}

  ngOnInit(): void {
    this.cargarTrabajadores();
  }

  cargarTrabajadores() {
    this.http.get<any[]>('http://localhost:4000/api/auth/trabajadores')
      .subscribe(data => this.trabajadores = data);
  }

  editar(t: any) {
    this.editandoId = t.id;
    this.editedData = { ...t };
  }

  guardar(id: number) {
    this.http.put(`http://localhost:4000/api/auth/trabajadores/${id}`, this.editedData)
      .subscribe(() => {
        this.editandoId = null;
        this.cargarTrabajadores();
      });
  }

  cancelar() {
    this.editandoId = null;
  }

  eliminar(id: number) {
    if (confirm('¿Deseas eliminar este trabajador?')) {
      this.http.delete(`http://localhost:4000/api/auth/trabajadores/${id}`)
        .subscribe(() => this.cargarTrabajadores());
    }
  }
  Regreso(){
    this.router.navigate(['/resumen']);
  }
}