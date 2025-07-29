import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-verificacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verificacion.html',
  styleUrl: './verificacion.css'
})
export class Verificacion implements AfterViewInit {
  codigo: string[] = ['', '', '', ''];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    console.log('✅ Componente de verificación inicializado correctamente');
  }

  moverAlSiguiente(event: any, index: number) {
    const input = event.target;
    const valor = input.value;

    console.log(`🔢 Input ${index}: ${valor} - Función moverAlSiguiente ejecutada`);

    // Solo permitir números
    if (!/^\d*$/.test(valor)) {
      input.value = '';
      console.log('❌ Carácter no válido ingresado, solo se permiten números');
      return;
    }

    this.codigo[index] = valor;
    console.log('📝 Código actual:', this.codigo);

    // Mover al siguiente input
    if (valor.length === 1 && index < 3) {
      const siguienteInput = input.nextElementSibling;
      if (siguienteInput) {
        siguienteInput.focus();
        console.log(`➡️ Moviendo al siguiente input (posición ${index + 1})`);
      }
    }
  }

  verificarCodigo() {
    console.log('🔍 Función verificarCodigo ejecutada');
    
    const codigoCompleto = this.codigo.join('');
    console.log('📋 Código completo ingresado:', codigoCompleto);
    
    if (codigoCompleto.length !== 4) {
      console.log('⚠️ Código incompleto - faltan dígitos');
      alert('Por favor, ingresa los 4 dígitos del código');
      return;
    }
    
    // Simular validación
    console.log('✅ Código de 4 dígitos completado');
    console.log('🚀 Enviando código al servidor para verificación...');
    
    // Aquí iría la lógica real de verificación
    // Por ahora, simulamos una respuesta exitosa
    setTimeout(() => {
      console.log('🎉 Verificación exitosa (simulada)');
      alert(`Código verificado correctamente: ${codigoCompleto}`);
    }, 1000);
  }

  reenviarCodigo(event: Event) {
    event.preventDefault();
    console.log('📧 Función reenviarCodigo ejecutada');
    
    // Limpiar código actual
    this.codigo = ['', '', '', ''];
    console.log('🧹 Código limpiado:', this.codigo);
    
    // Solo ejecutar manipulación del DOM en el navegador
    if (isPlatformBrowser(this.platformId)) {
      // Limpiar los inputs visualmente
      const inputs = document.querySelectorAll('.codigo-input');
      inputs.forEach((input: any) => {
        input.value = '';
      });
      
      // Enfocar el primer input
      const primerInput = inputs[0] as HTMLInputElement;
      if (primerInput) {
        primerInput.focus();
        console.log('🎯 Focus puesto en el primer input');
      }
    }
    
    console.log('📨 Solicitando nuevo código al servidor...');
    
    // Simular envío de nuevo código
    setTimeout(() => {
      console.log('✅ Nuevo código enviado exitosamente (simulado)');
      alert('Se ha enviado un nuevo código a tu correo electrónico');
    }, 500);
  }

  // Método adicional para debugging
  ngAfterViewInit() {
    // Solo ejecutar en el navegador (cliente)
    if (isPlatformBrowser(this.platformId)) {
      console.log('👁️ Vista del componente inicializada');
      
      // Enfocar automáticamente el primer input
      setTimeout(() => {
        const primerInput = document.querySelector('.codigo-input') as HTMLInputElement;
        if (primerInput) {
          primerInput.focus();
          console.log('🎯 Auto-focus en el primer input aplicado');
        }
      }, 100);
    }
  }

  // Método para manejar teclas especiales (opcional)
  manejarTeclas(event: KeyboardEvent, index: number) {
    console.log(`⌨️ Tecla presionada: ${event.key} en input ${index}`);
    
    if (isPlatformBrowser(this.platformId)) {
      if (event.key === 'Backspace' && !this.codigo[index] && index > 0) {
        const inputAnterior = document.querySelector(`input:nth-child(${index})`) as HTMLInputElement;
        if (inputAnterior) {
          inputAnterior.focus();
          console.log(`⬅️ Backspace: moviendo al input anterior (${index - 1})`);
        }
      }
    }
  }
}