import { fireEvent, render, screen } from "@testing-library/react";
import { createElement } from "react";
import { describe, expect, it } from "vitest";
import { Terminal } from "../../src/components/Terminal";

describe("Terminal", () => {
  it("displays command output in the terminal", () => {
    render(createElement(Terminal));
    const input = screen.getByPlaceholderText("Type a command...");

    fireEvent.change(input, { target: { value: "about" } });
    fireEvent.submit(input.closest("form")!);

    expect(screen.getByRole("log")).toHaveTextContent(
      "Ashraful Islam Tanzil is an AI and Data Science researcher.",
    );
  });

  it("clears the terminal output", () => {
    render(createElement(Terminal));
    const input = screen.getByPlaceholderText("Type a command...");

    fireEvent.change(input, { target: { value: "clear" } });
    fireEvent.submit(input.closest("form")!);

    expect(screen.getByRole("log")).toBeEmptyDOMElement();
  });
});
