/*
 * inicio.js — página pública index.html: dibuja servicios, motivos de consulta, testimonios y la próxima hora disponible.
 */
(async function () {
  await Nucleo.iniciar();
  const { esc, moneda } = Utils;

  // Íconos lineales (trazos de 24x24). Se eligen con el campo "icono" de cada servicio en config.js.
  const ICONOS = {
    chat: '<path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z"/>',
    documento: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    calendario: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    persona: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    corazones: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.600-7 10-7 10z"/>',
    ola: '<path d="M2 12c2.500-4 5-4 7.500 0s5 4 7.500 0 3-3 5-2M2 18c2.500-4 5-4 7.500 0s5 4 7.500 0 3-3 5-2M2 6c2.500-4 5-4 7.500 0s5 4 7.500 0 3-3 5-2"/>',
    nube: '<path d="M7 18a4 4 0 0 1-.5-8 5.500 5.500 0 0 1 10.600 1A3.500 3.500 0 0 1 17 18z"/><path d="M9 21l1-2M13 21l1-2"/>',
    vela: '<path d="M12 3c2 2.500 2 4 0 5-2-1-2-2.500 0-5z"/><rect x="8" y="10" width="8" height="11" rx="1.500"/>',
    maletin: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    escudo: '<path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    familia: '<circle cx="8" cy="7" r="3"/><circle cx="17" cy="9" r="2.500"/><path d="M2 20a6 6 0 0 1 12 0M14 20a4.500 4.500 0 0 1 8 0"/>'
  };
  const icono = (clave, tam = 26) => `<svg width="${tam}" height="${tam}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONOS[clave] || ICONOS.chat}</svg>`;

  // Por qué elegirme
  document.getElementById('lista-diferenciadores').innerHTML = CONFIG.diferenciadores.map(d => `
    <li class="tarjeta p-5 aparece">
      <span class="icono-servicio">${icono(d.icono)}</span>
      <h3 class="mt-3 text-lg font-semibold text-marca-800">${esc(d.titulo)}</h3>
      <p class="mt-1 text-sm text-tinta-500">${esc(d.texto)}</p>
    </li>`).join('');

  // Motivos de consulta (tarjetas y lista del pie)
  document.getElementById('lista-motivos').innerHTML = CONFIG.motivos.map(m => `
    <li class="tarjeta p-6 aparece">
      <span class="icono-servicio">${icono(m.icono)}</span>
      <h3 class="mt-4 text-lg font-semibold text-marca-800">${esc(m.nombre)}</h3>
      <p class="mt-2 text-sm text-tinta-700">${esc(m.descripcion)}</p>
    </li>`).join('');
  document.getElementById('pie-motivos').innerHTML = CONFIG.motivos.map(m => `<li>${esc(m.nombre)}</li>`).join('');

  // Procesos de ejemplo
  document.getElementById('lista-casos').innerHTML = CONFIG.casos.map(c => `
    <article class="tarjeta p-7 aparece">
      <span class="text-xs font-semibold uppercase tracking-wide text-acento-600">${esc(c.etiqueta)}</span>
      <h3 class="mt-2 text-2xl font-semibold text-marca-800">${esc(c.titulo)}</h3>
      <p class="mt-3 text-tinta-700">${esc(c.resumen)}</p>
    </article>`).join('');

  // Servicios activos
  const servicios = await Nucleo.servicios(true);
  document.getElementById('lista-servicios').innerHTML = servicios.map(s => `
    <article class="tarjeta relative p-7 flex flex-col aparece ${s.destacado ? 'tarjeta-destacada' : ''}">
      ${s.destacado ? '<span class="cinta">Recomendado</span>' : ''}
      <span class="icono-servicio">${icono(s.icono)}</span>
      <h3 class="mt-4 text-xl font-semibold text-marca-800">${esc(s.nombre)}</h3>
      <p class="mt-2 text-tinta-700 flex-1">${esc(s.descripcion)}</p>
      <p class="mt-5 text-sm text-tinta-500">${esc(s.duracionMin)} min</p>
      <p class="text-3xl font-titulo font-semibold text-marca-700">${moneda(s.precio)}</p>
      <a class="btn ${s.destacado ? 'btn-primario' : 'btn-secundario'} mt-5" href="agendar.html?servicio=${encodeURIComponent(s.id)}">Agendar este servicio</a>
    </article>`).join('') || '<p class="text-tinta-500">Próximamente publicaremos nuestros servicios.</p>';

  // Testimonios
  const testimonios = await Nucleo.testimonios();
  document.getElementById('lista-testimonios').innerHTML = testimonios.map(t => `
    <figure class="tarjeta p-6" role="listitem">
      <blockquote class="text-tinta-700">“${esc(t.texto)}”</blockquote>
      <figcaption class="mt-4 flex items-center gap-3">
        <img src="${esc(t.foto)}" alt="" width="44" height="44" loading="lazy" class="w-11 h-11 rounded-full object-cover">
        <span><strong class="block text-sm">${esc(t.nombre)}</strong><span class="text-xs text-tinta-500">${esc(t.cargo)}</span></span>
      </figcaption>
    </figure>`).join('');

  // Próxima hora disponible (tarjeta de la portada)
  const dias = await Nucleo.diasAgendables();
  const primero = dias.find(d => d.libres > 0);
  if (primero) {
    const hora = (await Nucleo.horasLibres(primero.fecha))[0];
    const hoy = Utils.hoy();
    const cuando = primero.fecha === hoy ? 'Hoy' : primero.fecha === Utils.sumarDias(hoy, 1) ? 'Mañana' : Utils.fechaLarga(primero.fecha);
    document.getElementById('proxima-hora-texto').textContent = `${cuando}, ${hora}`;
    document.getElementById('proxima-hora').hidden = false;
  }

  UI.iniciarAnimaciones();
})();
