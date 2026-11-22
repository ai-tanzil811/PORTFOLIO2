import { links } from "../data/links";

export type TerminalCommand = "help" | "about" | "projects" | "clear";

export function parseTerminalCommand(input: string): string | null {
  const command = input.trim().toLowerCase();

  switch (command) {
    case "help":
      return "Available commands: help, about, projects, clear";
    case "about":
      return "Ashraful Islam Tanzil is an AI and Data Science researcher.";
    case "projects":
      return `Selected work is available below, and on GitHub: ${links.github}`;
    case "clear":
      return null;
    case "":
      return "Enter a command. Type \"help\" to see available commands.";
    default:
      return `Command not found: ${input.trim()}. Type "help" for available commands.`;
  }
}

