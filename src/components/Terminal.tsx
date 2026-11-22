"use client";

import { FormEvent, useState } from "react";
import { parseTerminalCommand } from "@/lib/terminal";

export function Terminal() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([
    "Welcome to aitanzil.me",
    'Type "help" to see available commands.',
  ]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = parseTerminalCommand(command);

    if (command.trim().toLowerCase() === "clear") {
      setOutput([]);
    } else {
      setOutput(current => [...current, `$ ${command}`, result ?? ""]);
    }
    setCommand("");
  }

  return (
    <section className="terminal" aria-label="Interactive portfolio terminal">
      <div className="terminal-output" role="log" aria-live="polite">
        {output.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}
      </div>
      <form className="terminal-input-row" onSubmit={submit}>
        <label htmlFor="terminal-command">$</label>
        <input
          id="terminal-command"
          name="terminal-command"
          value={command}
          onChange={event => setCommand(event.target.value)}
          placeholder="Type a command..."
          autoComplete="off"
        />
        <button type="submit">Run</button>
      </form>
    </section>
  );
}
