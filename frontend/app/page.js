import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-8 md:py-16">
      {/* SECCIÓN HERO PRINCIPAL */}
      <section className="mx-auto w-full max-w-7xl rounded-[3rem] border border-emerald-100 bg-white p-8 shadow-[0_20px_50px_rgba(15,23,42,0.1)] md:p-16 border-t-8 border-t-emerald-500">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          
          {/* Columna Izquierda: Textos y Acciones */}
          <div className="space-y-12">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-xs font-bold text-emerald-700 uppercase tracking-widest">
              Inteligencia Artificial Médica • Viamática 2026
            </span>

            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black text-red-500">✚</span>
                <p className="text-2xl font-black tracking-tighter text-slate-900">
                  VIACOPAGO
                </p>
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-[1.1] text-slate-900 md:text-7xl">
                Calcula tu{" "}
                <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-amber-400 bg-clip-text italic text-transparent">
                  copago
                </span>{" "}
                en segundos
              </h1>

              <p className="max-w-xl text-xl leading-relaxed text-slate-500">
                Describe tus síntomas y obtén una estimación precisa de costos,
                especialidad sugerida y comparación de hospitales antes de salir de casa.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/chat"
                className="rounded-2xl bg-amber-400 px-10 py-4 text-lg font-black text-slate-900 transition-all hover:bg-amber-500 hover:scale-105 shadow-[0_8px_0_0_rgba(217,119,6,1)] active:shadow-none active:translate-y-1"
              >
                Comenzar simulación →
              </Link> 
            </div>

            {/* Stats Rápidos */}
            <div className="grid max-w-xl grid-cols-3 gap-8 border-t border-slate-100 pt-10">
              <div>
                <p className="text-4xl font-black text-slate-900">95%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Precisión</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-900">2 min</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Respuesta</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-900">24/7</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Activo</p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: El Robot (Panel Verde) */}
          <div className="relative">
            <div className="relative mx-auto flex min-h-[550px] w-full max-w-[550px] items-center justify-center overflow-hidden rounded-[3rem] border-4 border-emerald-400/20 bg-emerald-500 shadow-2xl">
              {/* Decoración de fondo */}
              <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 animate-pulse" />
              <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-700/30" />
              
              {/* MASCOTA FLOTANTE (Ajustada para balance) */}
              <div className="relative z-20 h-[500px] w-[500px] animate-float">
                <Image
                  src="/robot-mascota.png"
                  alt="Mascota ViaCopago"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Badge Flotante */}
              <div className="absolute bottom-10 left-1/2 z-30 w-[85%] -translate-x-1/2 rounded-[2rem] border border-white/30 bg-white/90 p-6 backdrop-blur-md shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">Simulación en curso</p>
                    <p className="text-lg font-bold text-slate-800 leading-none mt-1">Copago estimado</p>
                  </div>
                  <span className="text-3xl font-black text-amber-500">$18.40</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CARDS (Separadas con gap-12) */}
      <section className="mx-auto mt-24 w-full max-w-7xl space-y-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          
          {/* Card 1: ¿Qué resuelve? */}
          <article className="rounded-[2.8rem] border border-amber-100 bg-white p-12 shadow-sm transition-all hover:shadow-md">
            <div className="mb-8 flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-3xl text-amber-500 shadow-inner">
                ?
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 leading-none">
                  ¿Qué resuelve?
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  Optimizamos tu experiencia médica.
                </p>
              </div>
            </div>
            <ul className="space-y-6 text-xl text-slate-600 font-medium">
              <li className="flex gap-4 items-center">
                <span className="h-3 w-3 rounded-full bg-amber-400"></span>
                <span>Incertidumbre sobre costos finales.</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="h-3 w-3 rounded-full bg-amber-400"></span>
                <span>Confusión sobre la especialidad correcta.</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="h-3 w-3 rounded-full bg-amber-400"></span>
                <span>Dificultad para comparar hospitales.</span>
              </li>
            </ul>
          </article>

          {/* Card 2: ¿Qué entrega? */}
          <article className="rounded-[2.8rem] border border-emerald-100 bg-white p-12 shadow-sm transition-all hover:shadow-md">
            <div className="mb-8 flex items-center gap-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-3xl text-emerald-600 shadow-inner">
                ✓
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 leading-none">
                  ¿Qué entrega?
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  Información clave y accionable.
                </p>
              </div>
            </div>
            <ul className="space-y-6 text-xl text-slate-700 font-medium">
              <li className="flex gap-4 items-center">
                <span className="text-emerald-600 font-black">✓</span>
                <span>Especialidad médica sugerida.</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-emerald-600 font-black">✓</span>
                <span>Cálculo preciso de copago.</span>
              </li>
              <li className="flex gap-4 items-center">
                <span className="text-emerald-600 font-black">✓</span>
                <span>Ranking de hospitales por cercanía.</span>
              </li>
            </ul>
          </article>
        </div>

        {/* FOOTER */}
        <footer className="mt-20 rounded-[3rem] border border-slate-200 bg-white px-10 py-16 shadow-sm md:px-16">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <span className="text-3xl font-black text-red-500">✚</span>
                <p className="text-4xl font-black tracking-tighter text-slate-900">
                  VIACOPAGO
                </p>
              </div>
              <p className="max-w-md text-lg text-slate-500 leading-relaxed italic">
                "Democratizando la información médica para decisiones más inteligentes antes de tu consulta."
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-slate-800">Plataforma</h4>
              <ul className="space-y-4 text-slate-500 font-semibold">
                <li className="hover:text-emerald-500 cursor-pointer transition-colors">Cómo funciona</li>
                <li className="hover:text-emerald-500 cursor-pointer transition-colors">Casos de éxito</li>
                <li className="hover:text-emerald-500 cursor-pointer transition-colors">Seguridad de datos</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-slate-800">Acciones</h4>
              <ul className="space-y-4 text-slate-500 font-semibold">
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Simulador de Copago</li>
                <li className="hover:text-amber-500 cursor-pointer transition-colors">Soporte IA 24/7</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-100 pt-10 text-xs font-bold text-slate-400 uppercase tracking-widest flex justify-between items-center">
            <p>* Estimaciones orientativas sujetas a validación de red médica.</p>
            <p>© 2026 VIACOPAGO • MANTA, ECUADOR</p>
          </div>
        </footer>
      </section>
    </main>
  );
} 