import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politica-privacidad',
  imports: [],
  templateUrl: './politica-privacidad.html',
  styleUrl: './politica-privacidad.css'
})
export class PoliticaPrivacidad {
constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/landing-page']); // O la ruta que corresponda
  }

  downloadPDF() {
  const url = 'https://firebasestorage.googleapis.com/v0/b/descargas-ece37.appspot.com/o/AVISO%20DE%20PRIVACIDAD%20-Chambitas.docx?alt=media&token=8b0d9dde-5585-42ca-b77c-8ded3e61191e';

  const link = document.createElement('a');
  link.href = url;
  link.download = 'aviso-privacidad.pdf'; // Nombre del archivo que se descargará
  link.target = '_blank'; // Abre en nueva pestaña si es necesario
  link.click();}
}
