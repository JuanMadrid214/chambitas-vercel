import { RouterModule, Routes } from '@angular/router';
import { CambioContrasena } from './components/cambio-contrasena/cambio-contrasena';
import { ConfirmacionRestablecer } from './components/confirmacion-restablecer/confirmacion-restablecer';
import { DetallesServicio } from './components/detalles-servicio/detalles-servicio';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion';
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
import { ListaEmpleadores } from './components/lista-empleadores/lista-empleadores';
import { ListaTrabajadores } from './components/lista-trabajadores/lista-trabajadores';
//nuevo componente:
import { ResenaTrabajadorDetalle } from './components/resena-trabajador-detalle/resena-trabajador-detalle';
import { NgModule } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { PoliticaPrivacidad } from './components/politica-privacidad/politica-privacidad';
import { TerminosYCondiciones } from './components/terminos-y-condiciones/terminos-y-condiciones';


export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'tablero', component: LandingPage },
  { path: 'inicio-sesion', component: InicioSesionComponent },
  { path: 'registro-trabajador', component: RegistroTrabajadores },
  { path: 'registro-empleador', component: RegistroEmpleador },
  { path: 'modificacion-perfil', component: ModificacionPerfil },
  { path: 'cambio-contrasena', component: CambioContrasena },
  { path: 'restablecer-contrasena', component: RestablecerContrasena },
  { path: 'confirmacion-restablecer', component: ConfirmacionRestablecer },
  { path: 'verificacion', component: Verificacion },
  {path: 'servicios-solicitados', component: ServiciosSolicitados },
  {path: 'modificacion-perfil', component: ModificacionPerfil },
  { path: 'detalles-servicio', component: DetallesServicio },
  { path: 'servicios-solicitados', component: ServiciosSolicitados },
  { path: 'resena-trabajadores', component: ResenaTrabajadores },
  {path:'navbar',component : Navbar}, // Assuming this is the intended route for navbar component
  {path: 'landing-page', component: LandingPage }, // Assuming this is the intended route for landing page navigation
  // NUEVA RUTA para el detalle de las reseñas de un trabajador
  { path: 'resenas-trabajador/:id', component: ResenaTrabajadorDetalle }, 
  { path: 'resumen', component: Resumen },
  {path: 'tipo-registro', component: TipoRegistro}, // Assuming this is the intended route for landing page navigation
  {path : 'aviso-privacidad', component: PoliticaPrivacidad},
  { path: 'terminos-y-condiciones', component: TerminosYCondiciones },
  {path: 'lista-empleadores', component: ListaEmpleadores},
  {path: 'lista-trabajadores', component: ListaTrabajadores},
  { path: '**', redirectTo: '' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, 70] })],
  exports: [RouterModule]
})
export class AppRoutingModule { }