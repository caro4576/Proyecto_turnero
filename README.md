# Proyecto turnero

Sistema de turnos pensado para consultorios médicos, peluquerías y estéticas. Un mismo motor (negocios, profesionales, servicios, clientes y turnos) que se adapta a cada rubro.

## Tecnologías
- Node.js + Express
- Supabase (PostgreSQL)
- HTML + Tailwind CSS (próximamente)

## Estado
En desarrollo. Hoja de ruta de 2 semanas.

- [x] Día 1: Supabase y primera conexión con Express
- [x] Día 2: modelo de datos (negocios, profesionales, servicios, clientes, turnos)
- [x] Día 3: servicios y horarios
- [x] Día 4: registro, login y seguridad por negocio (RLS)
- [ ] Día 5: turnos sin superposición y horarios libres
- [ ] Día 6: agenda del negocio
- [ ] Día 7: página pública de reserva
- [ ] Día 8: recordatorios por WhatsApp
- [ ] Día 9: adaptación por rubro
- [ ] Día 10: piloto y publicación

## Cómo correrlo en local
1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Crear un archivo `.env` en la raíz con tus datos de Supabase:
   ```
   SUPABASE_URL=la-url-de-tu-proyecto
   SUPABASE_SECRET_KEY=tu-clave-secreta
   ```
   La clave secreta es solo para el servidor: no se sube al repositorio ni se comparte.
3. Iniciar el servidor:
   ```bash
   node index.js
   ```
4. Abrir `http://localhost:3000/panel.html` para registrar un negocio e ingresar. En `public/panel.html` hay que completar la URL del proyecto y la clave *publishable* (la secret nunca va ahí).

## Modelo de datos
- `negocios`: nombre, rubro y dueño (`owner_id`). Cada dueño solo ve lo suyo gracias a RLS.
- `profesionales`: pertenecen a un negocio.
- `servicios`: nombre, duración en minutos y negocio.
- `horarios`: días y horas de atención de cada profesional.
- `clientes`: nombre y teléfono.
- `turnos`: profesional, cliente, servicio, inicio, fin y estado.