import { describe, expect, it } from "vitest";
import { links } from "../../src/data/links";
import { parseTerminalCommand } from "../../src/lib/terminal";

describe("parseTerminalCommand", () => {
  it("handles known commands", () => {
    expect(parseTerminalCommand("help")).toContain("Available commands");
    expect(parseTerminalCommand("about")).toContain("Ashraful Islam Tanzil");
    expect(parseTerminalCommand("projects")).toContain("GitHub");
    expect(parseTerminalCommand("clear")).toBeNull();
  });

  it("returns a helpful fallback for unknown commands", () => {
    expect(parseTerminalCommand("not-a-command")).toContain("Command not found");
  });

  it("validates external profile URLs", () => {
    const profileUrls = [
      links.github,
      links.huggingFace,
      links.kaggle,
      links.pypi,
      links.linkedin,
    ];

    for (const url of profileUrls) {
      expect(() => new URL(url)).not.toThrow();
      expect(new URL(url).protocol).toBe("https:");
    }
  });
});
