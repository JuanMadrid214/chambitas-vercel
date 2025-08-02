import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit{
  constructor(private router:Router) { }

  ngOnInit(): void {
      
  }
  perfil(){
    this.router.navigate(['/modificacion-perfil']);
    }
}
