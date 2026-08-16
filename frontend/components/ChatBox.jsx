"use client";

import { useEffect, useRef, useState } from "react";
import InputBar from "./InputBar";
import MessageBubble from "./MessageBubble";

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000";

const starterMessages = [
  {
    role: "assistant",
    content:
      "Hola, soy tu agente estimador. Describe un sintoma y elegire la especialidad adecuada."
  }
];

const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
});

function formatCopay(value) {
  if (typeof value === "number" && !Number.isNaN(value)) {
    return currencyFormatter.format(value);
  }

  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }

  return "N/A";
}

async function parseError(response) {
  const data = await response.json().catch(() => null);
  if (data?.botReply) {
    return data.botReply;
  }
  if (data?.error) {
    return data.error;
  }

  return `HTTP ${response.status}`;
}

export default function ChatBox() {
  const [messages, setMessages] = useState(starterMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const replaceLastMessage = ({ content, hospitalData = null }) => {
    setMessages((prev) => {
      if (prev.length === 0) {
        return prev;
      }

      const updated = [...prev];
      // Replace the "Pensando..." bubble with the final response.
      updated[updated.length - 1] = {
        role: "assistant",
        content,
        hospitalData,
        selectedPlan: null
      };
      return updated;
    });
  };

  const selectPlanForMessage = (messageIndex, plan) => {
    setMessages((prev) =>
      prev.map((message, index) =>
        index === messageIndex ? { ...message, selectedPlan: plan } : message
      )
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    setMessages((prev) => [
      ...prev,
      { role: "user", content: trimmed },
      { role: "assistant", content: "Pensando..." }
    ]);
    setInput("");
    setLoading(true);

    try {
      const analyzeResponse = await fetch(`${apiBaseUrl}/analyze-symptom`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ symptom: trimmed })
      });

      if (!analyzeResponse.ok) {
        throw new Error(await parseError(analyzeResponse));
      }

      const analyzeData = await analyzeResponse.json();
      replaceLastMessage({
        content:
          typeof analyzeData?.botReply === "string" && analyzeData.botReply.trim()
            ? analyzeData.botReply.trim()
            : "No se pudo obtener una respuesta válida.",
        hospitalData: analyzeData?.hospitalData ?? null
      });
    } catch (error) {
      const message = error?.message
        ? `No se pudo completar la estimacion: ${error.message}`
        : "No se pudo completar la estimacion.";
      replaceLastMessage({ content: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.3em] text-emerald-700">
            Consulta
          </p>
          <h2 className="text-lg font-semibold text-emerald-900">
            Estimacion en tiempo real
          </h2>
        </div>
        <div className="rounded-full bg-emerald-500 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white">
          Comparador de planes
        </div>
      </div>

      <div
        className="max-h-[60vh] space-y-4 overflow-y-auto px-6 py-6"
        aria-live="polite"
      >
        {messages.map((message, index) => {
          const hospitalData =
            message.role === "assistant" && message.hospitalData
              ? message.hospitalData
              : null;
          const selectedPlan = message?.selectedPlan ?? null;
          const planCards = [
            {
              key: "basico",
              title: "PLAN BÁSICO",
              copay: hospitalData?.copays?.basico
            },
            {
              key: "estandar",
              title: "PLAN ESTÁNDAR",
              copay: hospitalData?.copays?.estandar
            },
            {
              key: "premium",
              title: "PLAN PREMIUM",
              copay: hospitalData?.copays?.premium
            }
          ];

          return (
            <div key={`${message.role}-${index}`} className="space-y-3">
              <MessageBubble role={message.role} content={message.content} />
              {hospitalData ? (
                <div className="fade-up w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {planCards.map((plan) => {
                      const isSelected = selectedPlan === plan.key;
                      const cardClasses = isSelected
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-slate-200 bg-white";

                      return (
                        <div
                          key={plan.key}
                          onClick={() => selectPlanForMessage(index, plan.key)}
                          className={`rounded-3xl border p-5 shadow-sm flex h-full cursor-pointer flex-col transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50/40 hover:shadow-md ${cardClasses}`}
                        >
                          <p
                            className={`text-xs font-bold tracking-widest uppercase mb-4 border-b pb-2 text-center ${
                              isSelected ? "text-emerald-700" : "text-slate-500"
                            }`}
                          >
                            {plan.title}
                          </p>
                          <span className="mb-3 w-max rounded-full bg-emerald-100 px-2 py-1 text-[10px] font-bold text-emerald-700">
                            {hospitalData.specialty ?? "N/A"}
                          </span>
                          <h3 className="text-lg font-bold text-slate-800 leading-tight">
                            {hospitalData.hospital ?? "N/A"}
                          </h3>
                          <p className="text-xs text-slate-500 mt-1 mb-4 flex items-center gap-1">
                            <span aria-hidden="true">📍</span>
                            <span>{hospitalData.location ?? "N/A"}</span>
                          </p>
                          <div className="flex-grow" />
                          <p className="text-4xl font-black text-emerald-500 text-center">
                            {formatCopay(plan.copay)}
                          </p>
                          {plan.key === "premium" ? (
                            <p className="mt-2 text-center text-xs font-semibold text-amber-500">
                              Mejor Cobertura
                            </p>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
        <div ref={endRef} />
      </div>

      <div className="border-t border-slate-100 px-6 py-5">
        <InputBar
          value={input}
          onChange={setInput}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
}
