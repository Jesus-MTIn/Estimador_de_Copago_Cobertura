# **VIACOPAGO** ✚

**IA para estimar copagos, sugerir especialidades y reducir la incertidumbre médica en segundos.**

VIACOPAGO es una plataforma full-stack creada para la **HackIAthon de Viamática 2026** que transforma una consulta médica en una experiencia clara, rápida y accionable. El usuario describe un síntoma o tratamiento y la IA devuelve una **estimación de copago**, la **especialidad sugerida** y una **ruta más informada** para decidir dónde atenderse.

---

---

## 📸 Vista Previa del Agente

| Landing Page Principal | Interfaz de Chat con IA |
| :---: | :---: |
| ![Landing Page](./frontend/public/screenshot-landing.png) | ![Chat Area](./frontend/public/screenshot-chat.png) |

---

## 🚨 Problema y solución

| Problema | Solución con VIACOPAGO |
|---|---|
| Incertidumbre sobre costos médicos | La IA estima copagos en tiempo real |
| Dificultad para elegir especialidad | Analiza el síntoma y sugiere la atención correcta |
| Comparación manual de opciones | Presenta hospitales/coberturas de forma clara |
| Experiencia fragmentada | Unifica conversación, cálculo y resultados en una sola interfaz |

---

## 🧠 Propuesta de valor

VIACOPAGO combina **lenguaje natural + lógica determinística + consulta estructurada**:

1. El usuario describe su caso en lenguaje cotidiano.
2. La IA interpreta el síntoma y normaliza la especialidad.
3. El backend consulta la base de datos y calcula el copago.
4. El frontend muestra resultados con una experiencia moderna, responsiva y simple.

**Resultado:** menos fricción, mejor orientación y una demo que se siente real.

---

## 🧰 Stack tecnológico

| Capa | Tecnologías |
|---|---|
| Frontend | **Next.js 14**, **React 18**, **Tailwind CSS** |
| Backend | **Node.js**, **Express**, **Nodemon** |
| IA | **Google Gemini API** |
| Datos | **Supabase**, **PostgreSQL**, **Prisma** |
| UI/UX | Diseño responsivo, tarjetas suaves, jerarquía visual clara |
| Tooling | **dotenv**, **CORS**, scripts de desarrollo y build |

---

## ✨ Características principales

- 🔎 **Análisis de síntomas en lenguaje natural**
- 💸 **Estimación de copago**
- 🏥 **Sugerencia de especialidad médica**
- 📊 **Comparación visual de cobertura**
- 📱 **Interfaz responsive y moderna**
- ⚡ **Arquitectura preparada para escalar**

---

## 🏗️ Arquitectura del proyecto

El proyecto está organizado en una estructura limpia y escalable:

```bash
/
├── frontend/   # Next.js + Tailwind CSS
├── backend/    # Express + IA + acceso a datos
└── README.md
```

### Frontend
- `app/page.js`: landing page principal
- `app/chat/page.js`: interfaz del chatbot
- `components/`: componentes reutilizables de UI

### Backend
- `src/server.js`: servidor principal
- rutas API para análisis y cálculo
- integración con Supabase y Gemini

---

## 🚀 Instalación y uso

### 1) Clonar el repositorio

```bash
git clone <URL_DEL_REPO>
cd Estimador_de_Copago_Cobertura
```

### 2) Instalar backend

```bash
cd backend
npm install
```

### 3) Configurar variables de entorno del backend

Crear `backend/.env` basado en `.env.example`:

```bash
PORT=4000
DATABASE_URL=postgresql://postgres:password@localhost:5432/copay?schema=public
OPENAI_API_KEY=tu_clave
OPENAI_MODEL=gpt-4o-mini
```

### 4) Instalar frontend

```bash
cd ../frontend
npm install
```

### 5) Configurar variables de entorno del frontend

Crear `frontend/.env` basado en `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key
GEMINI_API_KEY=tu_clave_gemini
SUPABASE_SERVICE_KEY=tu_service_role_key
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

### 6) Ejecutar el proyecto

**Backend**
```bash
cd backend
npm run dev
```

**Frontend**
```bash
cd frontend
npm run dev
```

---

## 🎨 Experiencia visual

- Diseño **moderno, responsivo y limpio**
- Paleta visual basada en **blanco, verde esmeralda, dorado y rojo**
- Componentes con bordes redondeados y sombras suaves
- Flujo centrado en conversación y toma de decisión rápida

---

## 🤖 Lógica de IA

La estimación no depende solo de una respuesta generativa. El flujo usa una aproximación híbrida:

- **Interpretación del síntoma** con IA
- **Normalización de especialidad**
- **Consulta estructurada a datos médicos**
- **Cálculo de copago según plan y cobertura**

Esto ayuda a obtener resultados más consistentes, explicables y útiles para demo y evaluación técnica.

---

## 👥 Autores

| Nombre | Rol |
|---|---|
| **Gonzalo Delgado** | Desarrollo Full-Stack |
| **Jesus Montes** | Desarrollo Full-Stack |
| **Oscar Mesa** | Desarrollo Full-Stack |

**Proyecto presentado para la HackIAthon Viamática 2026**.

---

## ✅ Valor para el jurado

VIACOPAGO demuestra:

- capacidad de **resolver un problema real**
- uso práctico de **IA aplicada**
- experiencia visual **lista para usuarios reales**
- arquitectura **escalable y mantenible**

---

## 📦 Deploy sugerido

| Componente | Plataforma recomendada |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Base de datos | Supabase |

---

> **VIACOPAGO**: menos dudas, más claridad, mejor decisión. ✚
