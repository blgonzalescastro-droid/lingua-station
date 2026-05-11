# Lingua Station

> English learning platform built with React 19 and Vite. Three integrated tools — dictionary, real news, and TED Talks — wrapped in daily quests that earn XP and track streaks.

## Tech Stack

| Category             | Technology                               |
| -------------------- | ---------------------------------------- |
| **Framework**        | React 19 + Vite 8                        |
| **Language**         | JavaScript (ESNext)                      |
| **Routing**          | React Router 7                           |
| **State Management** | Zustand 5 + Context API (auth)           |
| **HTTP Client**      | Axios 1                                  |
| **UI Framework**     | TailwindCSS 4                            |
| **Authentication**   | FakeStore API + localStorage             |
| **External APIs**    | Merriam-Webster · NewsData.io · RapidAPI |

## Prerequisites

- **Node.js** 18+
- **npm** 9+ (or yarn / pnpm)
- **Git** for version control
- API keys for all three services (see [Environment Variables](#environment-variables))

## Environment Variables

Create a `.env` file at the project root:

```env
VITE_MW_DICTIONARY_KEY=your_merriam_webster_key
VITE_NEWSDATA_KEY=your_newsdata_key
VITE_RAPIDAPI_KEY=your_rapidapi_key
```

| Variable                 | Service               | Where to get it            |
| ------------------------ | --------------------- | -------------------------- |
| `VITE_MW_DICTIONARY_KEY` | Merriam-Webster API   | https://dictionaryapi.com  |
| `VITE_NEWSDATA_KEY`      | NewsData.io           | https://newsdata.io        |
| `VITE_RAPIDAPI_KEY`      | RapidAPI (TED Talks)  | https://rapidapi.com       |

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/blgonzalescastro-droid/lingua-station.git
   cd lingua-station
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Fill in your API keys
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

   Server runs at `http://localhost:5173`

## Scripts

| Command           | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Start development server       |
| `npm run build`   | Build for production           |
| `npm run preview` | Serve production build locally |
| `npm run lint`    | Run ESLint                     |

## Architecture

The application follows a **Feature-Based Architecture** with clear separation of concerns.

### Project Structure

```
src/
├── app/
│   ├── App.jsx               # Root component + AuthProvider
│   └── routes.jsx            # React Router configuration
├── common/
│   ├── components/           # Shared UI (Header, Hero, Features, Footer, Testimonials)
│   └── layouts/
│       ├── LandingPage.jsx   # Public layout
│       └── DashboardPage.jsx # Authenticated layout + top nav
└── features/
    ├── auth/
    │   ├── components/       # ProtectedRoute
    │   ├── context/          # AuthContext (Context API)
    │   ├── hooks/            # useAuth
    │   ├── pages/            # LoginPage, RegisterPage
    │   └── services/         # FakeStore API calls
    ├── dictionary/
    │   ├── components/       # WordResult, Flashcards
    │   ├── hooks/            # useDictionary
    │   ├── pages/            # DictionaryPage
    │   └── store/            # Zustand flashcard store
    ├── news/
    │   ├── components/       # NewsCard, CategorySelector
    │   ├── hooks/            # useNews
    │   ├── pages/            # NewsPage
    │   └── store/            # Zustand preferences store
    └── dashboard/
        └── pages/            # DashboardHome (quests + stats)
```

## Key Features

- **Smart Dictionary** — Search any word via Merriam-Webster API. Save words as flashcards with one click.
- **Real English News** — Live articles via NewsData.io, filtered by topic across 10 categories.
- **TED Talks** — Browse 3,000+ talks via RapidAPI with subtitles in 112 languages.
- **Gamified Dashboard** — Daily quests, XP progress, level tracking and streak system.
- **Authentication** — Register and login via FakeStore API. Token persisted in `localStorage`.
- **Protected Routes** — Unauthenticated users are redirected to login automatically.
- **Responsive Design** — Optimized for mobile, tablet, laptop and desktop.

## Authentication Flow

```
User visits /dashboard
    → ProtectedRoute checks AuthContext
    → No token → redirect to /login
    → Login → FakeStore API returns JWT
    → Token saved to localStorage
    → AuthContext initialized from localStorage on reload
    → User lands on /dashboard
```

## State Management

| Scope      | Solution    | Used for                                |
| ---------- | ----------- | --------------------------------------- |
| Auth state | Context API | Token, login, logout, isAuthenticated   |
| Flashcards | Zustand     | Saved words, persisted across sessions  |
| News prefs | Zustand     | Selected topic categories               |
| TED prefs  | Zustand     | Selected topic + subtitle language      |

## Code Quality

- **ESLint** with React Hooks and React Refresh plugins
- **Vite HMR** for fast feedback during development

Run linter:

```bash
npm run lint
```

## Resources

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Router v7](https://reactrouter.com)
- [Zustand](https://zustand-demo.pmnd.rs)
- [TailwindCSS v4](https://tailwindcss.com)
- [Merriam-Webster API](https://dictionaryapi.com)
- [NewsData.io](https://newsdata.io/docs)
- [RapidAPI – TED Talks](https://rapidapi.com)
- [FakeStore API](https://fakestoreapi.com)
