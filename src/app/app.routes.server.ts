/*
 ------ CODIGO ORIGINAL, FUE MODIFICADO PARA EVITAR PROBLEMA CON RENDERIZADO (TEMPORAL)
import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];*/

//ESTE QUITARLO DESPUES:

// src/app/app.routes.server.ts

import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // Ruta para la página de detalle de un trabajador
    // para que se renderice en el servidor bajo demanda, no que se prerenderice estáticamente
    path: 'resenas-trabajador/:id',
    renderMode: RenderMode.Server // este es el cambio
  },
  {
    // Esta ruta (**) es para cualquier otra ruta que no coincida y queremos que se maneje
    // en el servidor. Puedes cambiarla a 'RenderMode.Prerender' si quieres que el resto
    // de tus rutas estáticas (como '/', '/contacto', etc. si las tuvieras definidas y quieres que sean estáticas)
    // se prerrendericen. Si no, 'Server' es una opción segura.
    // Para el momento, con esta configuración, solo la ruta resenas-trabajador/:id será Server-side
    // y el resto se manejará según el modo de fallback.
    path: '**',
    renderMode: RenderMode.Server // <--- Cambiar a Server para evitar problemas con otras rutas dinámicas futuras, o dejar como Prerender si solo la raíz es la estática
  }
  
];