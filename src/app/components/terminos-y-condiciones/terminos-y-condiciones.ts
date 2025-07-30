import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos-y-condiciones',
  imports: [],
  templateUrl: './terminos-y-condiciones.html',
  styleUrl: './terminos-y-condiciones.css'
})
export class TerminosYCondiciones {
constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/landing-page']); // O la ruta que corresponda
  }

  downloadPDF() {
  const url = 'https://firebasestorage.googleapis.com/v0/b/descargas-ece37.appspot.com/o/T%C3%89RMINOS%20Y%20CONDICIONES%20DE%20USO%20DE%20LA%20PLATAFORMA%20-%20Chambitas.docx?alt=media&token=1ba19c17-4bc7-486e-a487-e481d39f9e84';

  const link = document.createElement('a');
  link.href = url;
  link.download = 'aviso-privacidad.pdf'; // Nombre del archivo que se descargará
  link.target = '_blank'; // Abre en nueva pestaña si es necesario
  link.click();
}
}
