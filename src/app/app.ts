import { Component, signal, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from './components/footer/footer';
import { Sidebar } from './components/sidebar/sidebar';
//import { RouterOutlet } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, Navbar, Footer, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements  OnInit{
  protected readonly title = signal('chambitas-web');
  shouldShowSidebar : boolean = false; //Esta variable ayuda a mostrar la visibilidad del componente sidebar

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Define las rutas donde el sidebar DEBE mostrarse (rutas logueadas)
      const loggedInRoutes = [
        '/resena-trabajadores',
        '/dashboard', // Si se tiene el dashboard
        '/servicios-solicitados', // Otros componentes que son post-login
        // ... añade todas las rutas que requieran el sidebar
      ];

      // Verifica si la URL actual (después de redirecciones) incluye alguna de las rutas logueadas
      this.shouldShowSidebar = loggedInRoutes.some(route => event.urlAfterRedirects.includes(route));
    });
  }
}
