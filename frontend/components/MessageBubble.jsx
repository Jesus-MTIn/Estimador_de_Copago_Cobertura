export default function MessageBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`fade-up flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-sm md:text-base ${
          isUser
            ? "border border-emerald-100 bg-emerald-50 text-emerald-900"
            : "border border-slate-200 border-l-4 border-l-emerald-400 bg-white text-slate-700"
        }`}
        style={{ whiteSpace: "pre-line" }}
      >
        {content}
      </div>
    </div>
  );
}
