# REST Countries Pulse — Global Demographic & Economic REST API Dashboard

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![REST API](https://img.shields.io/badge/REST%20API-v3.1-0ea5e9?style=for-the-badge&logo=fastapi&logoColor=white)](https://restcountries.com)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

An interactive, responsive React.js dashboard engineering real-time REST API consumption across 250+ sovereign territories. Features automated error resilience, data caching, dynamic regional filtering, population sorting, full-text search, and detailed analytical drilldowns.

---

## 🎯 Recruiter Quick Overview

| Question | Answer |
|---|---|
| **What problem does this project solve?** | Consumes complex, heterogeneous geopolitical data from external REST APIs and transforms it into an intuitive, high-speed analytical dashboard with sub-second search and zero latency bottlenecks. |
| **Why did you build it?** | To demonstrate mastery of asynchronous REST API consumption, custom React hooks (`useFetchCountries`), error handling, network retry mechanisms, data memoization (`useMemo`), and accessible modal interactions. |
| **Which technologies were used?** | React 18, Modern JavaScript (ES6+), REST Countries v3.1 API, Vite, Vanilla CSS3 (Custom Design System, Glassmorphism, CSS Grid & Flexbox). |
| **Where can I inspect the code?** | [https://github.com/syeddmahammadalthaf-glitch/rest-countries-pulse](https://github.com/syeddmahammadalthaf-glitch/rest-countries-pulse) |

---

## ✨ Key Features

- **Live REST API Integration:** Fetches real-time geopolitical and demographic data from the REST Countries v3.1 API using a dedicated service layer and custom hook.
- **Resilient Offline Fallback Cache:** In the event of network rate limits or offline conditions, the application gracefully mounts a verified snapshot cache so the dashboard never crashes.
- **Asynchronous States (Loading, Error & Retry):**
  - Animated shimmering skeleton cards during initial API stream.
  - User-friendly error alert with an interactive **"Retry Connection"** trigger button.
- **Dynamic Search & Multi-Criteria Filtering:**
  - Full-text search matching country name, official title, capital city, or 3-letter CCA3 code.
  - Regional quick-filter pills: `All`, `Africa`, `Americas`, `Asia`, `Europe`, `Oceania`, `Antarctic`.
  - Metrics sorting: Population (Highest/Lowest first) and Alphabetical (A-Z / Z-A).
- **Global Intelligence Metrics Bar:**
  - Real-time aggregate calculation of total countries, matching count, and filtered population sum.
- **Detailed Nation Inspection Modal:**
  - High-resolution SVG/PNG flag view.
  - Native name, official capital, subregion, population breakdown.
  - Currencies (with official names & symbols), official languages.
  - Clickable land border navigation tags that seamlessly transition to adjacent countries.
  - Direct Google Maps satellite link.
- **Dark & Light Mode Support:** Clean theme toggle persisted in browser storage.

---

## 🛠️ Technology Stack

- **Frontend Library:** React 18 (`react`, `react-dom`)
- **API Protocol:** RESTful HTTP JSON (`fetch`, asynchronous promises)
- **Tooling:** Vite 5 (Fast HMR, optimized production tree-shaking)
- **Styling:** Vanilla CSS3 with Custom Design Tokens & Glassmorphic elevation
- **Environment:** `VITE_API_BASE_URL` configurable environment variable

---

## 📂 Project Architecture

```
rest-countries-pulse/
├── public/                 # Static assets & favicons
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Top navigation with live API status, search & theme switch
│   │   ├── MetricsBar.jsx       # Real-time aggregate demographic statistics cards
│   │   ├── FilterControls.jsx   # Region filter pills & metrics sorting dropdown
│   │   ├── CountryCard.jsx      # Territory overview card with flag & quick metrics
│   │   ├── CountryModal.jsx     # Deep analytical inspection modal with borders & maps
│   │   ├── SkeletonGrid.jsx     # Shimmer skeleton loader for pending async requests
│   │   ├── ErrorAlert.jsx       # Accessible error alert banner with manual retry action
│   │   └── EmptyState.jsx       # Contextual empty state when query returns 0 matches
│   ├── data/
│   │   └── fallbackCountries.js # Verified offline backup data
│   ├── hooks/
│   │   └── useFetchCountries.js # Encapsulated custom hook for data fetching & error handling
│   ├── services/
│   │   └── countriesApi.js      # Isolated REST API client service layer
│   ├── App.jsx                  # Root state orchestration & metric computation
│   ├── App.css                  # Component styling, cards, modal, and responsive grids
│   ├── index.css                # Global design system variables & CSS reset
│   └── main.jsx                 # Entry point
├── .env.example                 # Example environment variable template
├── .env                         # Local dev environment configuration
├── index.html                   # HTML template with Google Fonts
├── vite.config.js               # Bundler configuration
├── package.json                 # Project dependencies & scripts
├── .gitignore                   # Version control exclusion rules
├── LICENSE                      # MIT License
└── README.md                    # Technical documentation
```

---

## 🚀 Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/syeddmahammadalthaf-glitch/rest-countries-pulse.git
   cd rest-countries-pulse
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables (optional):**
   ```bash
   cp .env.example .env
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3001` in your browser.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 💡 Engineering Decisions & Challenges

### 1. Separation of Concerns: Service vs. Hook vs. Component
API fetching logic is isolated inside `src/services/countriesApi.js`. React lifecycle and state logic are managed inside `src/hooks/useFetchCountries.js`. Components remain purely presentational, ensuring maximum testability and clean code organization.

### 2. High Performance Filtering on 250+ Datasets
All filtering, sorting, and aggregate mathematical summations are wrapped inside `useMemo` hooks. This ensures zero redundant array iterations when unassociated states (e.g. theme toggle or modal view) change.

### 3. Graceful Error Handling
Unlike basic tutorial apps that break on 404 or 500 network errors, `useFetchCountries` catches network interruptions, displays an informative alert with a manual retry mechanism, and mounts verified cached records to guarantee continuous uptime.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
