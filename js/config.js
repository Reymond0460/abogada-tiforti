/*
 * config.js — marca, contacto y datos iniciales de la demo. SIN lógica.
 * Es el primer archivo que se edita al personalizar la web para un cliente real.
 */
const CONFIG = {
  marca: {
    nombre: 'Camila Reyes',
    rubro: 'Psicóloga clínica · Terapia individual y de pareja',
    eslogan: 'Un espacio seguro, sin juicios, para que vuelvas a sentirte bien. Atención presencial y online.',
    iniciales: 'CR',
    email: 'contacto@camilareyes.example',
    telefono: '+56 9 0000 0000',
    ciudad: 'Providencia, Santiago · y online',
    horarioTexto: 'Lunes a viernes, 09:00 a 19:00'
  },

  // ⚠ NÚMERO DE RELLENO: cambiar por el WhatsApp real (código de país, sin "+" ni espacios).
  whatsapp: '56900000000',

  // PIN del panel de administración (solo demo; se muestra en pantalla).
  pinAdmin: '1234',

  // Prefijo de las claves en localStorage (cambiar si se publican dos demos en el mismo dominio).
  prefijoAlmacenamiento: 'psi_demo_v1_',

  // Cuántos días hacia adelante se puede agendar.
  diasAgendables: 14,

  // Disponibilidad inicial. Días: 0 = domingo ... 6 = sábado.
  disponibilidadInicial: {
    dias: [1, 2, 3, 4, 5],
    horas: ['09:00', '10:00', '11:00', '12:00', '15:00', '16:00', '17:00', '18:00']
  },

  // Motivos de consulta (sección de tarjetas y lista del pie). icono: ver ICONOS en js/inicio.js.
  motivos: [
    { nombre: 'Ansiedad y estrés', icono: 'ola', descripcion: 'Preocupación constante, ataques de pánico, tensión y dificultad para desconectarte.' },
    { nombre: 'Depresión y ánimo bajo', icono: 'nube', descripcion: 'Tristeza persistente, apatía, cansancio y pérdida de interés en lo que antes disfrutabas.' },
    { nombre: 'Terapia de pareja', icono: 'corazones', descripcion: 'Mejorar la comunicación, resolver conflictos y reconstruir la confianza.' },
    { nombre: 'Duelo y pérdidas', icono: 'vela', descripcion: 'Acompañamiento en la muerte de un ser querido, separaciones y cambios de vida.' },
    { nombre: 'Autoestima y relaciones', icono: 'persona', descripcion: 'Inseguridad, dependencia emocional y dificultad para poner límites.' },
    { nombre: 'Estrés laboral y burnout', icono: 'maletin', descripcion: 'Agotamiento, sobrecarga y equilibrio entre trabajo y vida personal.' },
    { nombre: 'Trauma y experiencias difíciles', icono: 'escudo', descripcion: 'Procesar vivencias dolorosas a tu ritmo y con herramientas basadas en evidencia.' },
    { nombre: 'Crianza y adolescencia', icono: 'familia', descripcion: 'Orientación a madres y padres, y apoyo a adolescentes en etapas de cambio.' },
    { nombre: 'Otras situaciones', icono: 'chat', descripcion: '¿No ves tu motivo? Cuéntame y evaluamos juntas cómo acompañarte.' }
  ],

  // Por qué elegirme (tarjetas de la sección "Sobre mí").
  diferenciadores: [
    { titulo: 'Atención cercana', icono: 'corazones', texto: 'Respondo tus mensajes por WhatsApp y recibes recordatorio de cada sesión.' },
    { titulo: 'Enfoque basado en evidencia', icono: 'documento', texto: 'Terapia cognitivo-conductual y de aceptación y compromiso, con objetivos claros.' },
    { titulo: 'Más de 10 años de experiencia', icono: 'calendario', texto: 'Más de 350 personas y parejas acompañadas, en consulta y online.' },
    { titulo: 'Confidencialidad total', icono: 'escudo', texto: 'Tu información y lo que conversamos están protegidos por secreto profesional.' }
  ],

  // Procesos de ejemplo (historias anonimizadas y ficticias).
  casos: [
    { titulo: 'De la ansiedad al control', resumen: 'Mujer de 34 años con ataques de pánico en el trabajo. En 12 sesiones recuperó su rutina y volvió a viajar en metro sin evitar situaciones.', etiqueta: 'Ansiedad · 12 sesiones' },
    { titulo: 'Reencontrarse como pareja', resumen: 'Pareja con 8 años de relación y conflictos recurrentes. Con terapia de pareja mejoraron su comunicación y acordaron nuevos límites.', etiqueta: 'Pareja · 10 sesiones' }
  ],

  serviciosIniciales: [
    // icono: ver ICONOS en js/inicio.js. destacado: muestra la cinta "Recomendado".
    { id: 's1', nombre: 'Primera sesión de orientación', descripcion: 'Conversamos sobre lo que te trae, qué esperas lograr y cómo puedo acompañarte. Sin compromiso.', duracionMin: 50, precio: 25000, activo: true, icono: 'chat', destacado: true },
    { id: 's2', nombre: 'Psicoterapia individual', descripcion: 'Sesiones semanales para trabajar ansiedad, ánimo, autoestima, duelo u otros motivos.', duracionMin: 50, precio: 40000, activo: true, icono: 'persona' },
    { id: 's3', nombre: 'Terapia de pareja', descripcion: 'Espacio para ambos: comunicación, confianza y acuerdos para una relación más sana.', duracionMin: 75, precio: 55000, activo: true, icono: 'corazones' }
  ],

  testimoniosIniciales: [
    { id: 't1', nombre: 'Carolina V.', cargo: 'Terapia individual', foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=70', texto: 'Llegué con crisis de ansiedad casi diarias. Hoy tengo herramientas y me siento tranquila. Me sentí escuchada desde la primera sesión.' },
    { id: 't2', nombre: 'Andrés F.', cargo: 'Terapia individual', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=70', texto: 'Muy profesional y cálida. Por primera vez pude hablar de cosas que callaba hace años, sin sentirme juzgado.' },
    { id: 't3', nombre: 'Paula y Martín', cargo: 'Terapia de pareja', foto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=160&q=70', texto: 'Aprendimos a conversar sin pelear. La terapia nos devolvió la confianza y las ganas de estar juntos.' }
  ],

  // Citas de ejemplo. "diasDesdeHoy" se convierte en fecha real al iniciar la demo.
  citasIniciales: [
    { servicioId: 's1', diasDesdeHoy: 1, hora: '10:00', nombre: 'Javiera Morales', email: 'javiera@ejemplo.test', telefono: '+56 9 1111 2222', mensaje: 'Últimamente me cuesta dormir por la ansiedad.', estado: 'confirmada' },
    { servicioId: 's3', diasDesdeHoy: 2, hora: '16:00', nombre: 'Tomás Rivas', email: 'tomas@ejemplo.test', telefono: '+56 9 3333 4444', mensaje: 'Queremos mejorar la comunicación con mi pareja.', estado: 'pendiente' },
    { servicioId: 's1', diasDesdeHoy: 3, hora: '09:00', nombre: 'Daniela Pino', email: 'daniela@ejemplo.test', telefono: '+56 9 5555 6666', mensaje: '', estado: 'pendiente' }
  ]
};
