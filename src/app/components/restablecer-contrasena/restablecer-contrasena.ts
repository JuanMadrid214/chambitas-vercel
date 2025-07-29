import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-restablecer-contrasena',
  imports: [FormsModule, CommonModule],
  templateUrl: './restablecer-contrasena.html',
  styleUrl: './restablecer-contrasena.css'
})
export class RestablecerContrasena implements AfterViewInit {
  correo: string = '';
  isLoading: boolean = false;
  mensajeExito: boolean = false;
  correoValido: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    console.log('✅ Componente de restablecer contraseña inicializado correctamente');
  }

  validarCorreo(event: any) {
    const correo = event.target.value.trim();
    console.log(`📧 Validando correo: ${correo}`);
    
    // Expresión regular para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (correo === '') {
      this.correoValido = false;
      return;
    }
    
    this.correoValido = emailRegex.test(correo);
    
    if (this.correoValido) {
      console.log('✅ Correo válido');
    } else {
      console.log('❌ Correo inválido');
    }
  }

  enviarCodigo() {
    console.log('📨 Función enviarCodigo ejecutada');
    
    if (!this.correoValido || this.correo.trim() === '') {
      console.log('⚠️ Correo inválido - no se puede enviar');
      alert('Por favor, ingresa un correo electrónico válido');
      return;
    }
    
    // Mostrar estado de carga
    this.isLoading = true;
    console.log(`📋 Correo ingresado: ${this.correo}`);
    console.log('🚀 Enviando solicitud al servidor...');
    
    // Simular llamada al servidor
    setTimeout(() => {
      console.log('✅ Código de restablecimiento enviado exitosamente (simulado)');
      
      this.isLoading = false;
      this.mensajeExito = true;
      
      // Ocultar mensaje después de 3 segundos
      setTimeout(() => {
        this.mensajeExito = false;
        this.limpiarFormulario();
      }, 3000);
      
    }, 2000);
  }

  limpiarFormulario() {
    this.correo = '';
    this.correoValido = false;
    this.mensajeExito = false;
    console.log('🧹 Formulario limpiado');
    
    // Solo ejecutar manipulación del DOM en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const correoInput = document.querySelector('#correo') as HTMLInputElement;
      if (correoInput) {
        correoInput.focus();
        console.log('🎯 Focus puesto en el input de correo');
      }
    }
  }

  ngAfterViewInit() {
    // Solo ejecutar en el navegador (cliente)
    if (isPlatformBrowser(this.platformId)) {
      console.log('👁️ Vista del componente inicializada');
      
      // Enfocar automáticamente el input de correo
      setTimeout(() => {
        const correoInput = document.querySelector('#correo') as HTMLInputElement;
        if (correoInput) {
          correoInput.focus();
          console.log('🎯 Auto-focus en el input de correo aplicado');
        }
      }, 100);
    }
  }
}