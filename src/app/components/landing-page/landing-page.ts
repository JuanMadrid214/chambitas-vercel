import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],//Navbar se cambió en las import de este componente, agregar si marca error
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css'
})
export class LandingPage implements OnInit {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          setTimeout(() => {
            this.viewportScroller.scrollToAnchor(fragment);
          }, 100);
        }
      }
    });
  }

  Navegarlanding() {
    this.router.navigate(['/tipo-registro']);
  }
  registroProfesionales(){
    this.router.navigate(['/registro-trabajador'])
  }
}
