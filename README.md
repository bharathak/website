# Bharath Annamaneni

This website serves as my professional portfolio and work experience showcase. It features a decoupled architecture with a high-performance Go backend and a modern React frontend. The live website can be accessed at: [https://bharath-annamanenis-domain.tld](https://bharath-annamanenis-domain.tld)

## 🚀 Current Implementation

### Architecture
- **Stable Go Backend (`ba-web-backend`):** High-performance REST API using the standard library `net/http` to maintain zero external dependencies. Compiled to a native binary for production reliability and bound to `0.0.0.0` for universal connectivity.
- **Production-Ready Frontend (`ba-web-frontend`):** React (TypeScript) Single Page Application with persistent theme management. Features an environment-aware configuration (`config.ts`) optimized for static hosting on object storage (AWS S3 / Google Cloud Storage).
- **Decoupled Communication:** Seamless routing between frontend and backend using a centralized API configuration that handles both local development proxies and remote production endpoints.

### Design & User Experience
- **Modern Aesthetic:** Features elegant, pill-shaped floating header and footer elements with glassmorphism effects (backdrop blurs) and rounded borders.
- **Persistent Theme Engine:** Integrated Light and Dark modes with a custom high-contrast toggle. The light palette is specifically tuned for readability and reduced eye strain.
- **Responsive Layout:** Optimized vertical flexbox structure with a slim sticky footer and professional typography.
- **Personalized Branding:** Featuring a custom SVG Google Gemini logo and a focused professional narrative.

### Key Components
- **API Endpoints:**
    - `GET /api/health`: System status and health check.
    - `GET /api/projects`: Serves a curated portfolio of systems-level projects.
    - `GET /api/blog`: Serves dynamic technical articles and deep-dives.
    - `POST /api/contact`: Secure channel for direct message submissions.
- **User Interface:**
    - **Narrative Navigation:** Logical page order: **About -> Work -> Interests -> Projects -> Blog -> Social**.
    - **Integrated Social Dashboard:** A compact platform grid combined with a direct, functional contact portal.

---

## 🛠 Technical Stack

### Backend
- **Module Name:** `ba-web-backend`
- **Language:** Go (Golang)
- **Framework:** Standard Library (`net/http`) for a lightweight, zero-dependency core.
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
