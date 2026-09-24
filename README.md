# Majid's Profile

A personal portfolio web app built with React and Vite. It presents Majid Ali’s background, technical skills, featured projects, and contact details in a single-page, animated UI.

## Features

- Animated single-page portfolio layout powered by Framer Motion
- Sections for intro, about, education, leadership, skills, and projects
- Contact area with quick links (email/GitHub/location)
- Contact form that opens the user’s email client using a `mailto:` link
- Tailwind CSS v4 styling integrated through Vite

## Technology Stack

- React 19
- Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite` plugin)
- Framer Motion
- React Icons
- ESLint 9 (flat config)

## Setup

### Prerequisites

- Node.js 18+ (recommended current LTS)
- npm

### Install dependencies

```bash
npm install
```

## Run the project

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build locally

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Configuration / Environment Variables

This project currently does not use any environment variables. All displayed content is hardcoded in `src/App.jsx`.

## Usage Examples

- Open the app, click **View My Work** to jump to the projects section.
- Click **Contact Me** or scroll to **Send me a Message**, fill the form, and submit to open your default email client with a prefilled message.

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── assets/
```

## Testing and Build Notes

- There is currently no automated test suite configured in this repository.
- Use `npm run lint` and `npm run build` to validate code quality and production build output.

## Deployment Notes

- Build artifacts are generated in `dist/` via `npm run build`.
- Because this is a Vite single-page app, it can be deployed to static hosts (for example: GitHub Pages, Netlify, Vercel, Cloudflare Pages) that serve `dist/`.
- Configure your host to return `index.html` for client-side routes if you add route-based navigation later.
