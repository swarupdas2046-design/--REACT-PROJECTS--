import MacWindow from "../MacWindow";
import Terminal from "react-console-emulator";
import "./Cli.scss";

const Cli = ({ setWindowState, windowName}) => {
  const commands = {
//     help: {
//       description: "Show available commands",
//       usage: "help",
//       fn: () => `
// Available commands:

//   about       → About Swarup
//   skills      → View technical skills
//   projects    → View featured projects
//   contact     → Get contact information
//   github      → Open GitHub profile
//   resume      → Open resume
//   clear       → Clear terminal

// Type any command to continue.
//       `,
//     },

    about: {
      description: "About Swarup",
      usage: "about",
      fn: () => `
Swarup Das
────────────────────────────────────────

Role      : AI-Focused Full-Stack Developer
Focus     : Full-Stack + AI Engineering
Building  : Real-Time & AI-Powered Applications

I enjoy turning ideas into complete products,
from frontend interfaces to backend systems
and intelligent AI-powered workflows.

Currently exploring:
→ LLM Applications
→ RAG Systems
→ AI Agents
→ Real-Time Systems
→ Scalable Backend Architecture
      `,
    },

    skills: {
      description: "Display technical skills",
      usage: "skills",
      fn: () => `
TECH STACK
────────────────────────────────────────

Frontend
  React.js
  Next.js
  JavaScript
  Tailwind CSS
  Framer Motion
  GSAP
  Three.js

Backend
  Node.js
  Express.js
  REST APIs
  Socket.IO
  JWT
  Zod

Database
  MongoDB
  Mongoose
  Redis

AI
  Gemini
  LLM APIs
  AI Application Development

Tools
  Git
  GitHub
  Postman
  Docker
  Vercel
  Render
      `,
    },

    projects: {
      description: "View featured projects",
      usage: "projects",
      fn: () => `
FEATURED PROJECTS
────────────────────────────────────────

01. BidArena
    Real-Time Auction Platform
    React • Node • Express • MongoDB
    Socket.IO • JWT • Razorpay

02. DebugBattle
    Real-Time Multiplayer Game
    React • Redux Toolkit • Node
    MongoDB • Socket.IO • Zod

03. DOM Figma-Like Editor
    Interactive Design Editor
    JavaScript • DOM • LocalStorage

04. ByteBoutique
    React E-Commerce Application
    React • React Router • Axios • REST API

05. Inkwell
    React Blog Platform
    React • Context API • CRUD
      `,
    },

    contact: {
      description: "Show contact information",
      usage: "contact",
      fn: () => `
CONTACT
────────────────────────────────────────

GitHub   : github.com/swarupdas2046-design
LinkedIn : linkedin.com/in/swarup-das
Email    : swarupdas2046@gmail.com

Feel free to connect, collaborate,
or build something interesting together.
      `,
    },

    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open(
          "https://github.com/swarupdas2046-design",
          "_blank"
        );

        return "Opening GitHub profile...";
      },
    },

    resume: {
      description: "Open resume",
      usage: "resume",
      fn: () => {
        // Replace this path with your actual resume path
        window.open("/resume.pdf", "_blank");

        return "Opening Swarup's resume...";
      },
    },

    whoami: {
      description: "Display current user",
      usage: "whoami",
      fn: () => "swarup",
    },

    pwd: {
      description: "Print working directory",
      usage: "pwd",
      fn: () => "/home/swarup/portfolio",
    },

    ls: {
      description: "List portfolio directories",
      usage: "ls",
      fn: () => `
about/
skills/
projects/
contact/
resume/
      `,
    },

    echo: {
      description: "Echo text",
      usage: "echo <message>",
      fn: (...args) => args.join(" "),
    },
  };

  return (
    <MacWindow setWindowState={setWindowState} windowName={windowName}>
      <div className="cli-window">
        <Terminal
          commands={commands}

          welcomeMessage={`
╭────────────────────────────────────────────────────╮
│                                                    │
│   Welcome to Swarup's Developer Terminal 🚀        │
│                                                    │
│   AI-Focused Full-Stack Developer                  │
│   React • Node.js • MongoDB • AI                   │
│                                                    │
╰────────────────────────────────────────────────────╯

Type "help" to explore the portfolio.
          `}

          promptLabel="swarup@portfolio:~$"

          promptLabelStyle={{
            color: "#67e8f9",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: "600",
          }}

          inputTextStyle={{
            color: "#f8fafc",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            fontWeight: "500",
          }}

          messageStyle={{
            color: "#cbd5e1",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            lineHeight: "1.7",
          }}

          contentStyle={{
            color: "#cbd5e1",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
            lineHeight: "1.7",
          }}

          style={{
            backgroundColor: "#050505",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "14px",
          }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;