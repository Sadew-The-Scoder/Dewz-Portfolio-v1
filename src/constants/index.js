export const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Contact", path: "/contact" },
];


// constants/terminalData.js

export const TERMINAL_INFO = {
  welcomeMessage: [
    "Welcome to DewZzz OS v1.0.0 (Type 'help' for a list of available commands)",
    "Status: Online | Environment: Production",
    "----------------------------------------------------------------"
  ],
  promptUser: "guest@dewzzz",
  promptPath: "~"
};

export const TERMINAL_COMMANDS = {
  help: {
    description: "Display all available commands",
    action: () => [
      "Available commands:",
      "  about    - Discover who I am and what I do",
      "  skills   - View my technical stack",
      "  projects - Explore my recent development work",
      "  clear    - Clear the terminal screen",
      "  banner   - Reprint the welcome banner"
    ]
  },
  about: {
    description: "About me",
    action: () => [
      "Hi, I'm Sadew! A Junior MERN Stack Developer based in Sri Lanka.",
      "I build clean, responsive, and performance-optimized web applications.",
      "Currently exploring Next.js and crafting lightweight automation tools."
    ]
  },
  skills: {
    description: "My skills stack",
    action: () => [
      "Frontend: React, Tailwind CSS, DaisyUI, HTML5, CSS3, JavaScript",
      "Backend:  Node.js, Express.js, REST APIs",
      "Database: MongoDB, MySQL",
      "Tools:    Git, pnpm, Linux (Arch/Debian), Neovim, Sublime Text, VS Code, Visual Studio",
      "Others:   C++, Python, Go Lang, Visual Basic, Bash scripting"
    ]
  },
  projects: {
    description: "Featured projects",
    action: () => [
      "1. DewZzz Portfolio - Interactive MERN/Tailwind developer portfolio site.",
      "2. MERN To-Do Application - A full-stack task manager with robust API integration.",
      "3. Custom Automation Scripts - Bash & Python utilities for system environment tweaks.",
      "4. More projects with C++, Go, Visual Basic, Python, ExpressJS. (Not public)"
    ]
  }
};