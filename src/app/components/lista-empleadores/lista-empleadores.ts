import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { API_BASE_URL } from '../../../config';

@Component({
  selector: 'app-lista-empleadores',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './lista-empleadores.html',
  styleUrl: './lista-empleadores.css'
})
export class ListaEmpleadores implements OnInit {
  empleadores: any[] = [];
  editandoId: number | null = null;
  editedData: any = {};

  constructor(private http: HttpClient,private router:Router) {}

  ngOnInit(): void {
    this.cargarEmpleadores();
  }

  cargarEmpleadores() {
    this.http.get<any[]>(`${API_BASE_URL}/api/auth/empleadores`)
      .subscribe(data => this.empleadores = data);
  }

  editar(empleador: any) {
    this.editandoId = empleador.id;
    this.editedData = { ...empleador };
  }

  guardar(id: number) {
    this.http.put(`${API_BASE_URL}/api/auth/empleadores/${id}`, this.editedData)
      .subscribe(() => {
        this.editandoId = null;
        this.cargarEmpleadores();
      });
  }

  cancelar() {
    this.editandoId = null;
  }

  eliminar(id: number) {
    if (confirm('¿Seguro que deseas eliminar este registro?')) {
      this.http.delete(`${API_BASE_URL}/api/auth/empleadores/${id}`)
        .subscribe(() => this.cargarEmpleadores());
    }
  }
  Regreso(){
    this.router.navigate(['/resumen']);
  }
}

