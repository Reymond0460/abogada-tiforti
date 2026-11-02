/*
 * config.js — marca, contacto y datos iniciales de la demo. SIN lógica.
 * Es el primer archivo que se edita al personalizar la web para un cliente real.
 */
const CONFIG = {
  marca: {
    nombre: 'Constanza Rodríguez',
    rubro: 'Abogada · Estudio jurídico Coni 902',
    eslogan: 'Defendemos tus derechos con claridad, cercanía y estrategia. Te explicamos cada paso de tu caso.',
    iniciales: 'CR',
    email: 'contacto@coni902.example',
    telefono: '+56 9 0000 0000',
    ciudad: 'Santiago, Chile · y online',
    horarioTexto: 'Lunes a viernes, 09:00 a 18:00'
  },

  // ⚠ NÚMERO DE RELLENO: cambiar por el WhatsApp real (código de país, sin "+" ni espacios).
  whatsapp: '56900000000',

  // PIN del panel de administración (solo demo; se muestra en pantalla).
  pinAdmin: '1234',

  // Prefijo de las claves en localStorage (cambiar si se publican dos demos en el mismo dominio).
  prefijoAlmacenamiento: 'abg_demo_v1_',

  // Cuántos días hacia adelante se puede agendar.
  diasAgendables: 14,

  // Disponibilidad inicial. Días: 0 = domingo ... 6 = sábado.
  disponibilidadInicial: {
    dias: [1, 2, 3, 4, 5],
    horas: ['09:00', '10:00', '11:00', '12:00', '15:00', '16:00', '17:00']
  },

  // Áreas de práctica (tarjetas y lista del pie). icono: ver ICONOS en js/inicio.js.
  motivos: [
    { nombre: 'Derecho laboral', icono: 'maletin', descripcion: 'Despidos, finiquitos, cobro de remuneraciones, tutela de derechos y autodespido.' },
    { nombre: 'Accidentes laborales', icono: 'escudo', descripcion: 'Indemnización por accidentes del trabajo y enfermedades profesionales.' },
    { nombre: 'Derecho de familia', icono: 'familia', descripcion: 'Divorcio, pensión de alimentos, cuidado personal y relación directa y regular.' },
    { nombre: 'Herencias y sucesiones', icono: 'documento', descripcion: 'Posesión efectiva, partición de bienes y testamentos.' },
    { nombre: 'Arriendos y propiedades', icono: 'casa', descripcion: 'Contratos, desalojos, cobro de rentas y compraventas de inmuebles.' },
    { nombre: 'Deudas y cobranzas', icono: 'balanza', descripcion: 'Defensa ante demandas de cobro, renegociación y ley de insolvencia.' },
    { nombre: 'Derecho civil', icono: 'chat', descripcion: 'Contratos, responsabilidad civil e indemnización de perjuicios.' },
    { nombre: 'Derecho penal', icono: 'llave', descripcion: 'Defensa y querellas en procesos penales, con estrategia desde el primer día.' },
    { nombre: 'Otras materias', icono: 'persona', descripcion: '¿No ves tu caso? Cuéntame y evaluamos cómo ayudarte.' }
  ],

  // Por qué elegirme (tarjetas de la sección "Sobre mí").
  diferenciadores: [
    { titulo: 'Seguimiento proactivo', icono: 'chat', texto: 'Te informamos cada avance de tu causa por WhatsApp, sin que tengas que preguntar.' },
    { titulo: 'Atención personalizada', icono: 'persona', texto: 'Cada caso lo lleva directamente la abogada, con estrategia a tu medida.' },
    { titulo: 'Trayectoria comprobable', icono: 'balanza', texto: 'Más de 10 años de experiencia y cientos de causas con resultados favorables.' },
    { titulo: 'Reserva y confidencialidad', icono: 'escudo', texto: 'Todo lo que conversamos está protegido por el secreto profesional.' }
  ],

  // Casos de ejemplo (ficticios y anonimizados).
  casos: [
    { titulo: 'Despido injustificado: indemnización recuperada', resumen: 'Trabajador con 9 años de antigüedad despedido sin causa justificada. Se logró el pago de indemnizaciones y recargos legales por vía judicial.', etiqueta: 'Laboral · Caso ganado' },
    { titulo: 'Pensión de alimentos acordada', resumen: 'Madre de dos hijos sin pensión regular. Se obtuvo un acuerdo con retención directa, sin necesidad de un juicio prolongado.', etiqueta: 'Familia · Acuerdo' }
  ],

  serviciosIniciales: [
    // icono: ver ICONOS en js/inicio.js. destacado: muestra la cinta "Recomendado".
    { id: 's1', nombre: 'Primera consulta de orientación', descripcion: 'Evaluamos tu caso, tus opciones legales y los pasos a seguir. Sin compromiso.', duracionMin: 45, precio: 25000, activo: true, icono: 'chat', destacado: true },
    { id: 's2', nombre: 'Asesoría y revisión de documentos', descripcion: 'Revisión de contratos, finiquitos u otros documentos, con informe breve de recomendaciones.', duracionMin: 60, precio: 45000, activo: true, icono: 'documento' },
    { id: 's3', nombre: 'Representación y patrocinio', descripcion: 'Llevamos tu causa de principio a fin. El honorario se define tras la primera consulta.', duracionMin: 60, precio: 120000, activo: true, icono: 'balanza' }
  ],

  testimoniosIniciales: [
    { id: 't1', nombre: 'Carolina V.', cargo: 'Caso laboral', foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=70', texto: 'Me explicó todo con claridad y me mantuvo informada en cada etapa. Gané mi juicio y recuperé lo que me correspondía.' },
    { id: 't2', nombre: 'Andrés F.', cargo: 'Derecho de familia', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=70', texto: 'Muy profesional y cercana. En un proceso difícil me dio tranquilidad y resultados concretos.' },
    { id: 't3', nombre: 'Paula H.', cargo: 'Herencia', foto: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=160&q=70', texto: 'Resolvió en pocos meses una herencia que llevaba años estancada. Totalmente recomendable.' }
  ],

  // Citas de ejemplo. "diasDesdeHoy" se convierte en fecha real al iniciar la demo.
  citasIniciales: [
    { servicioId: 's1', diasDesdeHoy: 1, hora: '10:00', nombre: 'Javiera Morales', email: 'javiera@ejemplo.test', telefono: '+56 9 1111 2222', mensaje: 'Me despidieron sin aviso y quiero revisar mi finiquito.', estado: 'confirmada' },
    { servicioId: 's2', diasDesdeHoy: 2, hora: '16:00', nombre: 'Tomás Rivas', email: 'tomas@ejemplo.test', telefono: '+56 9 3333 4444', mensaje: 'Necesito revisar un contrato de arriendo.', estado: 'pendiente' },
    { servicioId: 's1', diasDesdeHoy: 3, hora: '09:00', nombre: 'Daniela Pino', email: 'daniela@ejemplo.test', telefono: '+56 9 5555 6666', mensaje: '', estado: 'pendiente' }
  ]
};
