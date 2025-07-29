import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles-servicio',
  imports: [],
  templateUrl: './detalles-servicio.html',
  styleUrl: './detalles-servicio.css'
})
export class DetallesServicio {
 isHovering = false;

  onMouseOver() {
    this.isHovering = true;
  }

  onMouseOut() {
    this.isHovering = false;
  }
}
