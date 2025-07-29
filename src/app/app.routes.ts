import { RouterModule, Routes } from '@angular/router';
import { CambioContrasena } from './components/cambio-contrasena/cambio-contrasena';
import { ConfirmacionRestablecer } from './components/confirmacion-restablecer/confirmacion-restablecer';
import { DetallesServicio } from './components/detalles-servicio/detalles-servicio';
import { InicioSesion } from './components/inicio-sesion/inicio-sesion';
import { LandingPage } from './components/landing-page/landing-page';
import { ModificacionPerfil } from './components/modificacion-perfil/modificacion-perfil';
import { RegistroEmpleador } from './components/registro-empleador/registro-empleador';
import { RegistroTrabajadores } from './components/registro-trabajadores/registro-trabajadores';
import { ResenaTrabajadores } from './components/resena-trabajadores/resena-trabajadores';
import { RestablecerContrasena } from './components/restablecer-contrasena/restablecer-contrasena';
import { Resumen } from './components/resumen/resumen';
import { ServiciosSolicitados } from './components/servicios-solicitados/servicios-solicitados';
import { Verificacion } from './components/verificacion/verificacion';
import { TipoRegistro } from './components/tipo-registro/tipo-registro';

//nuevo componente:
import { ResenaTrabajadorDetalle } from './components/resena-trabajador-detalle/resena-trabajador-detalle';
import { NgModule } from '@angular/core';


export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'tablero', component: LandingPage },
  { path: 'inicio-sesion', component: InicioSesion },
  { path: 'registro-trabajador', component: RegistroTrabajadores },
  { path: 'registro-empleador', component: RegistroEmpleador },
  { path: 'modificacion-perfil', component: ModificacionPerfil },
  { path: 'cambio-contrasena', component: CambioContrasena },
  { path: 'restablecer-contrasena', component: RestablecerContrasena },
  { path: 'confirmacion-restablecer', component: ConfirmacionRestablecer },
  { path: 'verificacion', component: Verificacion },
  { path: 'detalles-servicio', component: DetallesServicio },
  { path: 'servicios-solicitados', component: ServiciosSolicitados },
  { path: 'resena-trabajadores', component: ResenaTrabajadores },
  // NUEVA RUTA para el detalle de las reseñas de un trabajador
  { path: 'resenas-trabajador/:id', component: ResenaTrabajadorDetalle }, 
  { path: 'resumen', component: Resumen },
  {path: 'tipo-registro', component: TipoRegistro}, // Assuming this is the intended route for landing page navigation
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }