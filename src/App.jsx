import React, { useState } from 'react';

export default function LandingEbookRetiro() {
  // Estado para los checkpoints interactivos (Autorregulación inspirada en el ebook)
  const [selectedCheckpoint, setSelectedCheckpoint] = useState(null);
  
  // Estado para el formulario
  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [registrado, setRegistrado] = useState(false);

  // Opciones de autocheck (6 temas clave extraídos del Ebook)
  const checkpoints = [
    { id: 'transformar', titulo: '🌱 Transformarme desde dentro', mensaje: 'Estás lista para cuestionar viejas creencias y abrir caminos que antes no veías. Este ebook te muestra cómo empezar tu reinvención.' },
    { id: 'cuerpo', titulo: '🏃‍♀️ El movimiento y el cuerpo', mensaje: 'Sientes que tu mente se expande cuando el cuerpo se mueve. La fuerza física despierta tu poder emocional y espiritual.' },
    { id: 'miedo', titulo: '🔥 Transformar el miedo en impulso', mensaje: 'El miedo no es tu enemigo, es tu borde de expansión. Aprenderás a usarlo como guía para avanzar con confianza.' },
    { id: 'pausa', titulo: '🧘‍♀️ Darme el permiso de pausar', mensaje: 'Comprendes que en la pausa y en el descanso también te reinventas, soltando la exigencia desmedida.' },
    { id: 'energia', titulo: '✨ Honrar mi energía actual', mensaje: 'Quieres dejar de responder al presente desde versiones pasadas y empezar a crear desde tu verdad de hoy.' },
    { id: 'proposito', titulo: '🎯 Claridad en mis metas', mensaje: 'Necesitas ordenar tus objetivos por áreas y avanzar paso a paso con coherencia interna y gratitud consciente.' }
  ];

  const handleSelectCheck = (item) => {
    setSelectedCheckpoint(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !whatsapp) return;
    setRegistrado(true);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-600 selection:text-white">
      
      {/* 1. SECCIÓN HERO */}
      <header className="max-w-2xl mx-auto px-6 pt-16 pb-12 text-center">
        <span className="text-xs uppercase tracking-widest bg-amber-900/40 text-amber-300 py-1.5 px-4 rounded-full border border-amber-700/40 font-medium">
          Dos días para descubrirte en poder • Carito Luna
        </span>
        
        <h1 className="text-3xl md:text-5xl font-bold mt-6 mb-4 tracking-tight leading-tight text-white">
          Descubrí tu poder de reinventarte y crea tu vida desde el autoconocimiento
        </h1>
        
        <p className="text-stone-300 text-base md:text-lg mb-8 leading-relaxed">
          Un adelanto exclusivo de 2 días de nuestro Ebook de Gratitud Consciente. Diseñado con PNL y neurociencia para conectar con tu fuerza interna, soltar la exigencia y dar el primer paso hacia tu siguiente versión[cite: 1, 2].
        </p>

        <a 
          href="#formulario" 
          className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-semibold py-4 px-8 rounded-2xl shadow-xl transition duration-200 uppercase tracking-wider text-sm">
          Quiero mi Ebook Gratis 🚀
        </a>
      </header>

      {/* 2. AUTOCHECK INTERACTIVO (Filtro para personas interesadas) */}
      <section className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-stone-900/90 border border-stone-800 p-6 md:p-8 rounded-3xl shadow-xl">
          <h3 className="text-amber-300 font-semibold text-lg mb-2 text-center">✨ Autoevaluación consciente</h3>
          <p className="text-stone-300 text-sm mb-6 text-center">Selecciona cuál de estos estados resuena más con vos hoy:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {checkpoints.map((cp) => (
              <button
                key={cp.id}
                onClick={() => handleSelectCheck(cp)}
                className={`p-3.5 rounded-2xl text-sm text-left border transition flex items-center justify-between ${selectedCheckpoint?.id === cp.id ? 'bg-amber-700/40 border-amber-500 text-white shadow-lg' : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700'}`}>
                <span>{cp.titulo}</span>
                <span className="text-xs text-amber-400">Seleccionar</span>
              </button>
            ))}
          </div>

          {selectedCheckpoint ? (
            <div className="bg-stone-950 border-l-4 border-amber-500 p-4 rounded-r-2xl text-sm text-stone-200 animate-fadeIn">
              <p className="font-semibold text-amber-300 mb-1">Mensaje para tu proceso:</p>
              <p>{selectedCheckpoint.mensaje}</p>
            </div>
          ) : (
            <p className="text-center text-xs text-stone-500 italic">Haz clic en una opción para ver tu reflexión personalizada.</p>
          )}
        </div>
      </section>

      {/* 3. CÓMO FUNCIONA Y CÓMO SE DESCARGA */}
      <section className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-stone-900/50 border border-stone-800/80 p-8 rounded-3xl text-center">
          <h3 className="text-xl font-bold text-white mb-3">¿Cómo funciona y cómo lo recibes?</h3>
          <p className="text-stone-300 text-sm leading-relaxed mb-4">
            Este adelanto interactivo te entrega las dos primeras páginas de nuestro Ebook de 21 días de Gratitud[cite: 1, 2]. Al registrarte, el material completo se enviará de forma automática y directa a tu **WhatsApp** para que puedas leerlo, hacer los ejercicios de PNL y empezar a transformarte desde adentro[cite: 2].
          </p>
        </div>
      </section>

      {/* 4. FORMULARIO DE REGISTRO + BONUS */}
      <section id="formulario" className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-amber-700/40 p-8 md:p-10 rounded-3xl shadow-2xl">
          {!registrado ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Obtén tu Ebook + Bonus Exclusivo</h2>
                <p className="text-stone-300 text-sm">
                  Regístrate ahora y llévate acceso prioritario a <span className="text-amber-300 font-semibold">entradas anticipadas a nuestros próximos retiros presenciales y acompañamiento virtual</span>.
                </p>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Tu Nombre</label>
                <input 
                  type="text" 
                  placeholder="Ej: Carina" 
                  value={nombre} 
                  onChange={(e) => setNombre(e.target.value)} 
                  required
                  className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 mb-2">Tu Número de WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="Ej: +54 9 11..." 
                  value={whatsapp} 
                  onChange={(e) => setWhatsapp(e.target.value)} 
                  required
                  className="w-full bg-stone-950 border border-stone-800 rounded-2xl px-4 py-3.5 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-500 text-white font-semibold py-4 rounded-2xl shadow-lg transition duration-200 uppercase tracking-wider text-sm">
                Quiero mi Ebook y mis Beneficios 🎁
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-amber-400 mb-3">¡Felicitaciones, {nombre}! 🎉</h3>
              <p className="text-stone-300 text-sm mb-6 leading-relaxed">
                Tus datos se registraron con éxito. En breve te escribiremos por WhatsApp para entregarte tu Ebook y asegurarte el acceso a los beneficios anticipados.
              </p>
              <a 
                href={`https://wa.me/?text=Hola%20Carito,%20me%20registré%20para%20el%20ebook%20y%20quiero%20mis%20beneficios`}
                target="_blank" 
                rel="noreferrer"
                className="inline-block bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3.5 px-8 rounded-2xl transition">
                Abrir WhatsApp ahora
              </a>
            </div>
          )}
        </div>
      </section>

      {/* 5. FRASE FINAL MOTIVADORA (Elegí la opción C para cerrar) */}
      <footer className="max-w-xl mx-auto px-6 py-12 text-center border-t border-stone-900 mt-8">
        <p className="text-amber-200/90 italic text-sm mb-4">
          "Lo que agradeces, se expande. Tu proceso es válido y tu tiempo es perfecto."
        </p>
        <p className="text-stone-500 text-xs">
          Descubrimiento del Ser • Carito Luna Master Coach PNL[cite: 1, 2]
        </p>
      </footer>

    </div>
  );
}