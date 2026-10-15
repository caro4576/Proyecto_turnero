Proyecto turnero
Sistema de turnos pensado para consultorios médicos, peluquerías y estéticas. Un mismo motor (negocios, profesionales, servicios, clientes y turnos) que se adapta a cada rubro.
Tecnologías
Node.js + Express
Supabase (PostgreSQL)
HTML + Tailwind CSS (próximamente)
Estado
En desarrollo. Hoja de ruta de 2 semanas.
[x] Día 1: Supabase y primera conexión con Express
[x] Día 2: modelo de datos (negocios, profesionales, servicios, clientes, turnos)
[ ] Día 3: servicios y horarios
[ ] Día 4: turnos sin superposición
[ ] Día 5: agenda del negocio con login
[ ] Días 6-7: página pública de reserva
[ ] Día 8: recordatorios por WhatsApp
[ ] Día 9: adaptación por rubro
[ ] Día 10: piloto y publicación
Cómo correrlo en local
Instalar dependencias:
```bash
   npm install
   ```
Crear un archivo `.env` en la raíz con tus datos de Supabase:
```
   SUPABASE_URL=la-url-de-tu-proyecto
   SUPABASE_SECRET_KEY=tu-clave-secreta
   ```
La clave secreta es solo para el servidor: no se sube al repositorio ni se comparte.
Iniciar el servidor:
```bash
   node index.js
   ```
Abrir `http://localhost:3000/profesionales`.
Modelo de datos
`negocios`: nombre y rubro.
`profesionales`: pertenecen a un negocio.
`servicios`: nombre, duración en minutos y negocio.
`clientes`: nombre y teléfono.
`turnos`: profesional, cliente, servicio, inicio, fin y estado.