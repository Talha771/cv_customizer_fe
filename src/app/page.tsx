
import styles from "./page.module.css";


const markdownContent =`# Hi there! 👋 I'm Muhammad Talha, aka TJ aka TJ Bravo

## 🚀 Software Developer | AI Engineer | Full-Stack Dev
---

### 🛠️ Technologies & Tools:

- **AI & ML:** LangChain, OpenAI API, LlamaIndex, Pinecone, FAISS, Vector Databases
- **Backend:** FastAPI, Flask, Django, Node.js (Express), PostgreSQL, MongoDB, Redis
- **Frontend:** Next.js, React, TypeScript, TailwindCSS, shadcn/ui
- **DevOps & Cloud:** Docker, AWS, Vercel, GitHub Actions, CI/CD, Kubernetes
- **Databases:** SQL (PostgreSQL, MySQL), NoSQL (MongoDB, Redis)
- **Other:** Web Scraping, APIs, Microservices, Authentication (JWT, OAuth, SSO)

---

### 🌟 What I'm Working On:

- 🚀 Building **Agentic AI** systems to enhance automation & reasoning capabilities.
- 🧠 Developing **RAG pipelines** for smarter AI knowledge retrieval.
- 🎨 Crafting seamless UIs with **Next.js, React, and TailwindCSS**.
- 🏗️ Architecting scalable **FastAPI/Django backend solutions**.
- 🔍 Experimenting with **Vector DBs** for efficient AI search & retrieval.

---

### 📌 Featured Projects:

#### 🏆 **AI-Powered CV Generator**
- Full-fledged **resume builder** with AI-enhanced capabilities.
- Supports multiple **user-authenticated profiles**.
- Built using **FastAPI backend** & **Next.js frontend**.
- Utilizes **SQL database** for structured data management.

#### 🤖 **Agentic AI Chatbot**
- Context-aware, multi-turn conversational AI.
- Implements **Retrieval-Augmented Generation (RAG)**.
- Uses **LangChain, OpenAI, and Vector Databases**.
- Deployed on **FastAPI & Vercel**.`;


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}/>
      
    </div>    
  );
}

// Should be landing page  