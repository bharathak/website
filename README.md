# Bharath Annamaneni

This website serves as my professional portfolio and systems development showcase. It features a decoupled architecture with a high-performance Go backend and a modern React frontend. 

The live website can be accessed at: [https://bharath-annamanenis-domain.tld](https://bharath-annamanenis-domain.tld)

## 🚀 Current Implementation

### Architecture
- **Stable Go Backend (`ba-web-backend`):** High-performance REST API using the standard library `net/http` to maintain zero external dependencies. Compiled to a native binary for production reliability and bound to `0.0.0.0` for universal connectivity.
- **Production-Ready Frontend (`ba-web-frontend`):** React (TypeScript) Single Page Application with persistent theme management. Features an environment-aware configuration (`config.ts`) optimized for static hosting on object storage (AWS S3 / Google Cloud Storage).
- **Decoupled Communication:** Seamless routing between frontend and backend using a centralized API configuration that handles both local development proxies and remote production endpoints.

### Design & User Experience
- **Modern Aesthetic:** Features elegant, pill-shaped floating header and footer elements with glassmorphism effects (backdrop blurs) and rounded borders.
- **Persistent Theme Engine:** Integrated Light and Dark modes with a custom high-contrast toggle.
- **Symmetrical 2x4 Grids:** Balanced layouts for both Technical Expertise and Personal Interests, providing a professional and organized visual flow.
- **Personalized Branding:** Featuring a custom SVG Google Gemini logo and a focused professional narrative.

### Key Components
- **Professional Work:** An executive-level summary highlighting 10+ years of expertise in distributed systems, AI infrastructure, and Go/Rust development, with a specific focus on solving IT problems using Generative AI.
- **Interests Dashboard:** A comprehensive 2x4 grid showcasing a balanced life of technical deep-dives (HPC, Cybersecurity, OSINT) and personal passions (Vedic Astrology, Geopolitics, Photography).
- **Education & Certifications:** Detailed academic background from Texas A&M and JNTU, alongside a verified list of 11 professional certifications (CKA, CKAD, AWS, HashiCorp).
- **API Endpoints:** Functional routes for health checks, project data, and dynamic blog articles.

---

## 🛠 Technical Stack

### Backend
- **Module Name:** `ba-web-backend`
- **Language:** Go (Golang)
- **Framework:** Standard Library (`net/http`) for a lightweight, zero-dependency core.
- **API:** RESTful JSON API.
- **Build System:** Native Go toolchain (compiled binaries).

### Frontend
- **Package Name:** `ba-web-frontend`
- **Framework:** React 18+ with TypeScript.
- **Build Tool:** Vite for ultra-fast development and optimized production bundles.
- **Icons:** Lucide React for consistent, scalable vector graphics.
- **Styling:** Vanilla CSS3 with advanced features (Flexbox, Grid, CSS Variables, Backdrop Filters).
- **Routing:** React Router 6 for client-side navigation.

---

## 📋 Roadmap

### 1. Data & Persistence
- [ ] **Database Integration:** Transition from hardcoded slices to **SQLite** or **PostgreSQL**.
- [ ] **Data Migration Tool:** Build a Go CLI for automated database schema management.
- [ ] **Markdown Engine:** Serve and render blog content from filesystem-based Markdown files.

### 2. Systems Development Enhancements
- [ ] **Structured Logging:** Implement `slog` for enterprise-grade observability.
- [ ] **Prometheus Metrics:** Add a `/metrics` endpoint for system performance monitoring.
- [ ] **Custom Middleware:** Implement rate limiting, request ID tracking, and recovery handlers.

### 3. Frontend & Polish
- [ ] **Animations:** Integrate Framer Motion for smooth page transitions.
- [ ] **Syntax Highlighting:** Add code highlighting (Prism.js) for technical articles.

### 4. Security & DevOps
- [ ] **Admin Dashboard:** Secure portal for content management via JWT authentication.
- [ ] **Containerization:** Comprehensive `Dockerfile` and `docker-compose.yml` configurations.
- [ ] **CI/CD:** GitHub Actions for automated testing, building, and deployment pipelines.
- [ ] **TLS/HTTPS:** Native HTTPS support in the Go backend.
