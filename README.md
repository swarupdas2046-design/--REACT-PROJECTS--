# Swarup Das | Interactive Developer Portfolio

An interactive, macOS-inspired developer portfolio built with React and Vite. Instead of presenting the portfolio as a traditional single-page layout, this project turns the browser into a small desktop environment with a navigation bar, application dock, draggable windows, project cards, a resume viewer, a Spotify embed, a notes panel, and a developer terminal.

The portfolio represents Swarup Das as an AI-focused full-stack developer in progress, with an emphasis on full-stack products, real-time systems, interactive experiences, and AI application engineering.

## Contents

- [Overview](#overview)
- [Features](#features)
- [Portfolio Windows](#portfolio-windows)
- [Dock Actions](#dock-actions)
- [Terminal Commands](#terminal-commands)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Customizing the Portfolio](#customizing-the-portfolio)
- [Build and Preview](#build-and-preview)
- [Implementation Notes](#implementation-notes)
- [Author](#author)

## Overview

This project is a frontend portfolio application designed to feel like a personal computer desktop. The main screen is composed of:

- A macOS-style top navigation bar with profile text, menu labels, system-style icons, and live date/time.
- A bottom dock that opens portfolio tools and external links.
- A full-screen mountain wallpaper background.
- Independent portfolio windows that can be dragged and resized.
- A command-line interface for exploring Swarup's background, skills, projects, and contact details.

The application is intentionally component-driven. Window visibility is managed centrally in `App.jsx`, while individual windows own their content and presentation.

## Features

- **Desktop-inspired interface** with a wallpaper, top bar, dock, and floating windows.
- **Draggable and resizable windows** powered by `react-rnd`.
- **Project showcase** backed by JSON data rather than hard-coded cards.
- **GitHub profile integration** with links to project repositories and live demos.
- **Resume viewer** using the resume PDF stored in the public assets.
- **Markdown/code note viewer** that loads `public/note.txt` and renders it with syntax highlighting.
- **Interactive terminal** powered by `react-console-emulator`.
- **Embedded Spotify artist player** using Spotify's public embed URL.
- **External contact and profile shortcuts** for Google Calendar, email, and LinkedIn.
- **SCSS styling** split by application area and component/window.
- **Vite development workflow** with hot module replacement and production builds.

## Portfolio Windows

Each internal window is opened from the dock and rendered through the shared `MacWindow` wrapper.

### GitHub window

The GitHub window contains:

- A link to the GitHub profile `@swarupdas2046-design`.
- Project cards generated from `src/assets/github.json`.
- Project thumbnail, title, description, technology tags, live demo link, and repository link when available.

The current featured projects are:

1. **BidArena** - real-time auction platform.
2. **ByteBoutique** - React e-commerce application.
3. **DebugBattle** - real-time multiplayer Tic-Tac-Toe game.
4. **Inkwell** - React blog platform.
5. **DOM Figma-Like Editor** - browser-based design editor built with Vanilla JavaScript.

### Note window

The Note window fetches `/note.txt` from the public directory and displays the content with TypeScript syntax highlighting. The note currently contains a profile and engineering configuration covering identity, frontend and backend skills, data technologies, security, integrations, tooling, AI direction, and engineering capabilities.

### Resume window

The Resume window embeds `public/Swarup_Das_Resume_5.pdf` in an iframe so visitors can view the resume inside the desktop interface.

### Spotify window

The Spotify window contains a lazy-loaded Spotify artist embed. The embedded player supports Spotify's standard controls and playback experience.

### CLI window

The CLI window provides a terminal-style interface with the prompt `swarup@portfolio:~$`. It introduces Swarup as an AI-focused full-stack developer and exposes portfolio information through commands.

All windows use the red control to close the window. The yellow and green controls are currently visual controls and do not perform an action.

## Dock Actions

The dock provides the primary way to explore the portfolio:

| Dock item | Result                                                |
| --------- | ----------------------------------------------------- |
| GitHub    | Opens the internal GitHub project window.             |
| Calendar  | Opens Google Calendar in a new browser tab.           |
| Notes     | Opens the internal note/code window.                  |
| Mail      | Opens a new email using `swarupdas2046@gmail.com`.    |
| Resume    | Opens the internal resume window.                     |
| Spotify   | Opens the internal Spotify window.                    |
| LinkedIn  | Opens Swarup's LinkedIn profile in a new browser tab. |
| CLI       | Opens the internal developer terminal.                |

## Terminal Commands

The terminal currently supports the following commands:

| Command          | Description                                                            |
| ---------------- | ---------------------------------------------------------------------- |
| `about`          | Displays Swarup's role, focus, current work, and areas of exploration. |
| `skills`         | Displays the frontend, backend, database, AI, and tooling stack.       |
| `projects`       | Lists featured projects and their primary technologies.                |
| `contact`        | Displays GitHub, LinkedIn, and email contact information.              |
| `github`         | Opens the GitHub profile in a new tab.                                 |
| `resume`         | Attempts to open the resume in a new tab.                              |
| `whoami`         | Displays the current portfolio user: `swarup`.                         |
| `pwd`            | Displays the simulated working directory.                              |
| `ls`             | Lists the simulated portfolio directories.                             |
| `echo <message>` | Prints the supplied message.                                           |

> Tip: The terminal welcome message refers to `help`, but the current command configuration does not register a `help` command. Use the commands listed above to explore the available content.

## Technology Stack

### Core

- **React 19** for the component-based user interface.
- **React DOM 19** for mounting the application in the browser.
- **Vite 7** for development, bundling, and previewing production builds.
- **JavaScript (JSX)** for application code.
- **SCSS** for component and window styling.

### UI and content packages

- `react-rnd` for draggable and resizable windows.
- `react-console-emulator` for the portfolio terminal.
- `react-syntax-highlighter` for the code-style note viewer.
- `react-markdown` is included as a dependency for Markdown rendering.

### Code quality

- ESLint 9.
- `@eslint/js` recommended rules.
- React Hooks lint rules.
- React Refresh lint rules for Vite.

## Project Structure

```text
check/
├── public/
│   ├── doc-icons/                 # Dock icons
│   ├── navbar-icons/             # Top navigation icons
│   ├── thumbnails/               # Project preview images
│   ├── mac-wallpaper.jpg         # Available desktop wallpaper asset
│   ├── mountaint-wellpaper.jpg   # Wallpaper used by the application
│   ├── note.txt                  # Content loaded by the Note window
│   └── Swarup_Das_Resume_5.pdf   # Resume embedded in the Resume window
├── src/
│   ├── assets/
│   │   └── github.json            # Project portfolio data
│   ├── components/
│   │   ├── DateTime.jsx           # Live date/time display
│   │   ├── Dock.jsx               # Portfolio dock actions
│   │   ├── Nav.jsx                # Top navigation bar
│   │   └── *.scss                 # Component styles
│   ├── windows/
│   │   ├── Card.jsx               # Reusable project card
│   │   ├── Github.jsx              # Project showcase window
│   │   ├── MacWindow.jsx           # Shared draggable window shell
│   │   ├── Cli-Window/             # Terminal window and styles
│   │   ├── Note-Window/            # Note/code viewer and styles
│   │   ├── Resume-Window/          # Embedded resume and styles
│   │   └── Spotify-window/         # Spotify embed and styles
│   ├── App.jsx                    # Window state and application composition
│   ├── app.scss                   # Global layout and wallpaper styles
│   └── main.jsx                   # React entry point
├── index.html                     # Vite HTML entry document
├── package.json                   # Dependencies and npm scripts
├── eslint.config.js               # ESLint configuration
└── vite.config.js                 # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js 18 or newer recommended.
- npm, which is included with Node.js.

### Installation

From the project directory:

```bash
cd check
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local URL in the terminal. Open that URL in a browser to interact with the portfolio desktop.

## Available Scripts

Run these commands inside `check/`:

| Script            | Purpose                                                         |
| ----------------- | --------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server with hot module replacement. |
| `npm run build`   | Creates an optimized production build in `dist/`.               |
| `npm run lint`    | Runs ESLint across the project.                                 |
| `npm run preview` | Serves the production build locally for verification.           |

## Customizing the Portfolio

### Add or edit projects

Update `src/assets/github.json`. Each project can define:

```json
{
  "id": 1,
  "image": "/thumbnails/project.png",
  "title": "Project name",
  "description": "Short project description.",
  "tags": ["React", "Node.js"],
  "repoLink": "https://github.com/your-account/project",
  "demoLink": "https://your-demo.example.com"
}
```

The `image`, `repoLink`, and `demoLink` values are optional in the card component. Place new thumbnails in `public/thumbnails/` and reference them with a root-relative public path.

### Update the note content

Edit `public/note.txt`. The Note window reads this file at runtime, so no component change is needed for text-only updates.

### Update the resume

Replace the PDF in `public/` and update the iframe source in `src/windows/Resume-Window/Resume.jsx` if the filename changes.

### Update external links

The Calendar, email, and LinkedIn actions are defined in `src/components/Dock.jsx`. The GitHub profile link is defined in `src/windows/Github.jsx` and the terminal profile commands are defined in `src/windows/Cli-Window/Cli.jsx`.

### Add a new internal window

1. Create the window component and its SCSS file under `src/windows/`.
2. Add a new boolean to `windowState` in `src/App.jsx`.
3. Render the window conditionally in `App.jsx`.
4. Add a dock action in `src/components/Dock.jsx` that sets the new state to `true`.
5. Wrap the new content in `MacWindow` so it receives the shared window controls and drag/resize behavior.

## Build and Preview

To verify a production build:

```bash
npm run build
npm run preview
```

The application is a static Vite frontend. It can be deployed to a static hosting provider such as Vercel, Netlify, GitHub Pages, or any host that serves the generated `dist/` directory. Ensure the public assets remain available at the same root-relative paths after deployment.

## Implementation Notes

- Window visibility is held in a single `windowState` object in `App.jsx`.
- `MacWindow` provides the common window frame and uses `react-rnd` for movement and resizing.
- The initial window size is `35vw` by `45vh`, with an initial position of `x: 300` and `y: 200`.
- The GitHub project list is rendered with `Array.map`, making the content easy to extend through JSON.
- Static files in `public/` are requested with root-relative paths such as `/note.txt` and `/thumbnails/bidarena.png`.
- The resume dock window embeds `Swarup_Das_Resume_5.pdf`; the terminal's `resume` command currently references `/resume.pdf` separately.
- External embeds and profile links require network access in the visitor's browser.

## Author

Created by **Swarup Das**.

**Happy to connect.**

- GitHub: [swarupdas2046-design](https://github.com/swarupdas2046-design)
- LinkedIn: [Swarup Das](https://www.linkedin.com/in/swarup-das-/)
- Email: [swarupdas2046@gmail.com](mailto:swarupdas2046@gmail.com)
