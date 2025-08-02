import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  imports: [ ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  constructor(private router: Router) {}

  avisoPrivacidad(){
    this.router.navigate(['/aviso-privacidad'])
  }

  terminosCondiciones(){
    this.router.navigate(['/terminos-y-condiciones'])
  }

}
