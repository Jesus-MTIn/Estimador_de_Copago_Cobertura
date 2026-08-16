"use client";

import Image from "next/image";
import Link from "next/link";
import ChatBox from "../../components/ChatBox";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-6 text-slate-800">
      <section className="mx-auto grid min-h-[calc(100vh-2rem)] w-full max-w-7xl grid-cols-1 gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-md md:grid-cols-10 md:gap-6 md:p-6">
        
        {/* BARRA LATERAL IZQUIERDA (Sidebar) */}
        <aside className="rounded-3xl bg-emerald-500 p-6 text-white md:col-span-3 flex flex-col shadow-inner">
          
          {/* Logo y Cabecera */}
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-100 font-bold">
              ViaCopago
            </p>
            <h1 className="text-3xl font-bold tracking-tight">
              ViaCopago <span className="text-red-500">✚</span>
            </h1>
            <p className="text-sm text-emerald-50 mt-2">
              Consulta guiada para estimar copagos y cobertura hospitalaria.
            </p>
            <Link
              href="/"
              className="mt-4 inline-flex w-fit items-center rounded-full bg-amber-400 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-900 transition hover:bg-amber-500"
            >
              ← Volver al inicio
            </Link>
          </div>

          {/* GUÍA DE PROCESO (Tarjetas de Pasos) */}
          <div className="mt-10">
            <h2 className="mb-6 text-xs font-bold uppercase tracking-wider text-emerald-100">
              Guía de Proceso
            </h2>
            
            <div className="flex flex-col gap-4">
              
              {/* Paso 1 - Card */}
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-emerald-400/20 transform transition-transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-black text-white shadow-sm">
                    1
                  </div>
                  <div>
                    <p className="text-lg font-bold text-emerald-900 leading-tight italic">Inicie</p>
                    <p className="text-xs text-slate-600 mt-1">Describa su síntoma o tratamiento médico.</p>
                  </div>
                </div>
              </div>

              {/* Paso 2 - Card */}
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-emerald-400/20 transform transition-transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 font-black text-white shadow-sm">
                    2
                  </div>
                  <div>
                    <p className="text-lg font-bold text-emerald-900 leading-tight italic">Confirme</p>
                    <p className="text-xs text-slate-600 mt-1">Nuestra IA analizará su plan de seguro.</p>
                  </div>
                </div>
              </div>

              {/* Paso 3 - Card (Toque Dorado de Copago) */}
              <div className="bg-white p-4 rounded-2xl shadow-lg border-2 border-amber-400 transform transition-transform hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-400 font-black text-white shadow-sm">
                    3
                  </div>
                  <div>
                    <p className="text-lg font-bold text-emerald-900 leading-tight italic font-black">Copago</p>
                    <p className="text-xs text-slate-600 mt-1 font-medium">Obtenga una estimación precisa de su pago.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-emerald-600/40 p-4">
            <div className="relative mx-auto h-48 w-full max-w-[280px] animate-float">
              <Image
                src="/chatbot.png"
                alt="Chatbot ViaCopago"
                fill
                className="object-contain drop-shadow-[0_10px_18px_rgba(0,0,0,0.2)]"
                priority
              />
            </div>
          </div>

          {/* Decoración sutil de fondo para la sidebar */}
          <div className="mt-auto pt-4 text-center opacity-20">
            <span className="text-6xl font-black italic">VIA-MED</span>
          </div>
        </aside>

        {/* ÁREA DEL CHAT */}
        <div className="rounded-3xl bg-slate-50 md:col-span-7 flex flex-col overflow-hidden border border-slate-100 shadow-inner">
          <ChatBox />
        </div>

      </section>
    </main>
  );
}
