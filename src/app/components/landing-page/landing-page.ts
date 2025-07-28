import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage {
  constructor (private router:Router) {}

  Navegarlanding(){
    this.router.navigate(['/tipo-registro']);
  }

}
