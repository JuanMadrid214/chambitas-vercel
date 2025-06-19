**POLÍTICAS INTERNAS DE INTEGRACIÓN DE CÓDIGO (MERGE)**

**Proyecto: Chambitas — Gestión y Vinculación de Trabajadores Informales**

**FLUJO DE TRABAJO (GIT FLOW ESTÁNDAR)**

El flujo de ramas del repositorio sigue el esquema:

| Rama | Descripción |
| --- | --- |
| main | Rama estable. Solo recibe código que ha pasado QA, testing y revisión final. |
| --- | --- |
| release/vX.X | Preparación para lanzamientos. No se hacen desarrollos nuevos. Solo QA y fixes. |
| --- | --- |
| develop | Rama base para nuevas funcionalidades y fusiones desde feature/. |
| --- | --- |
| feature/\* | Para desarrollos individuales de funciones específicas. |
| --- | --- |
| hotfix/\* | Correcciones urgentes que deben ir directo a producción desde main. |
| --- | --- |

**CRITERIOS PARA SOLICITAR UN MERGE**

**A. Desde ramas feature/\* a develop**

- Incluir nombre claro y numeración de ticket asociado (ej. feature/login-validation-#23).
- Código documentado, con comentarios breves donde haya lógica compleja.
- Pruebas unitarias y funcionales aplicadas.
- Validación local y en entorno de staging/desarrollo.
- Revisión por al menos **1 compañero** (peer review).

**B. Desde develop a release/vX.X**

- Revisión completa de QA.
- Todas las funcionalidades deben estar terminadas y validadas.
- Código debe cumplir los estándares definidos de Chambitas (estilo, estructura, modularidad).

**C. Desde release/vX.X a main**

- Debe pasar por aprobación del líder técnico y/o responsable de despliegue.
- Solo tras validación final y pruebas de regresión.
- Confirmar que no se rompe integración con versiones anteriores.

**D. Desde hotfix/\* a main y develop**

- Se requiere autorización directa del CTO o líder técnico.
- Se debe notificar a todo el equipo en canal oficial (Slack/Teams/GitHub issue).
- Requiere justificación técnica y evidencia del error.
- Post-merge, se debe retroalimentar al equipo para prevenir reincidencias.

**COMPROMISOS DEL COLABORADOR**

Con base en la **LFT, Art. 134 y 135**, los colaboradores tienen la obligación de:

- Desarrollar su trabajo con diligencia y profesionalismo.
- Proteger la confidencialidad de los datos de los usuarios (usuarios, trabajadores, contactos, etc.).
- Evitar introducir código que afecte la integridad o la funcionalidad del sistema.
- Participar activamente en revisiones de código de compañeros.
- Respetar los tiempos de entrega definidos en los sprints o cronograma técnico.

**DATOS PERSONALES Y SEGURIDAD**

Debido a la **sensibilidad de la información (INE, CURP, RFC, zona geográfica, contacto personal)** se prohíbe estrictamente:

- Subir datos reales a entornos públicos o visibles (GitHub, logs sin encriptar).
- Subir claves de API, tokens o contraseñas sin cifrado o protección.
- Hacer uso del entorno de producción para pruebas.

El incumplimiento puede constituir una **falta grave** conforme a la LFT (Art. 47, fracciones II, VI y XII).

**CALIDAD DEL CÓDIGO**

Todo código debe cumplir:

- Estandarización de colores, íconos y estructura UI conforme a branding Chambitas.
- Validaciones completas en formularios de registro (CURP, RFC, INE, zona).
- Diseño responsive y accesible.
- Código modular y reutilizable.
- Uso de buenas prácticas: DRY, KISS, SOLID (según el rol).

**PROCESO DE MERGE**

| Paso | Responsable | Tiempo estimado |
| --- | --- | --- |
| Subir rama feature/\* | Desarrollador | Inmediato |
| --- | --- | --- |
| Crear Pull Request con descripción | Desarrollador | Al terminar la función |
| --- | --- | --- |
| Revisión técnica | Revisor asignado | Máximo 48h |
| --- | --- | --- |
| Correcciones solicitadas | Autor del PR | Máximo 24h |
| --- | --- | --- |
| Aprobación y fusión | Líder técnico/Dev Senior | Según ciclo sprint |
| --- | --- | --- |
| Pruebas en QA o staging | QA o Developer | 24-48h |
| --- | --- | --- |

**SANCIONES POR INCUMPLIMIENTO**

**A. Disciplinarias**

Basadas en la LFT (Art. 47 y 135):

- **Amonestación verbal o escrita** por fusiones sin revisión.
- **Suspensión temporal** de permisos de escritura al repositorio.
- **Reporte a RRHH** para sanción interna si hay reincidencia o mala fe.

**B. Económicas**

Solo aplicables si hay daños demostrables:

- Retención de bonos por desempeño si está vinculado al cumplimiento técnico.
- Reparación del daño si una negligencia técnica ocasiona pérdidas económicas comprobables (LFT art. 110).

**C. Laborales**

- Incumplimiento reiterado o deliberado puede ser causal de **rescisión justificada** del contrato (LFT art. 47 fracciones I, II, VIII, XV).

**AUDITORÍA Y DOCUMENTACIÓN**

- Todos los PR deben contener: título descriptivo, ticket asociado, checklist de pruebas, capturas o evidencia (si aplica).
- El líder de proyecto y CTO se reservan el derecho de bloquear merges que no cumplan el protocolo.
- Se recomienda mantener registro en GitHub Projects o JIRA para trazabilidad.

**DERECHOS DEL COLABORADOR**

- Derecho a réplica y justificación si alguna revisión es rechazada.
- Derecho a soporte y mentoría técnica si el estándar solicitado no ha sido previamente comunicado.
- Derecho a un ambiente de trabajo respetuoso, colaborativo y alineado a las políticas laborales.

**Aprobado por:**  
_ITI. Trujillo Romero Francisco_  
_TSU.Flores Luna Ismael David, Madrid Ortiz Juan de Dios_
