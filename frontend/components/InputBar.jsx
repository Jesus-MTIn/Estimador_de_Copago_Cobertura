export default function InputBar({
  value,
  onChange,
  onSubmit,
  loading
}) {
  const maxLength = 250;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex w-full flex-1 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-emerald-300">
          <input
            type="text"
            className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            placeholder="Escribe un sintoma como dolor de pecho"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            disabled={loading}
            maxLength={maxLength}
          />
          <button
            type="submit"
            className="rounded-full bg-amber-400 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-950 transition hover:bg-amber-500 disabled:cursor-not-allowed disabled:bg-amber-300"
            disabled={loading || !value.trim()}
          >
            {loading ? "Procesando" : "Enviar"}
          </button>
        </div>
        <p className="text-xs text-slate-500">Enter para enviar</p>
      </div>
      <p className="text-xs text-slate-400">
        {value.length}/{maxLength}
      </p>
    </form>
  );
}
