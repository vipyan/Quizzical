// App.test.tsx
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  test("loads questions from the API (via MSW) and renders them", async () => {
    const user = userEvent.setup();

    render(<App />); // <-- hit MSW, not local mock

    // Click the Start button to show the questions screen.
    // Adjust the selector to match your actual StartQuiz button text.
    await user.click(screen.getByRole("button", { name: /Start Quiz/i }));

    // Optional: you show a loading UI
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // The mocked MSW response has question: "What is 2 + 2?"
    //expect(await screen.findByText("What is 2 + 2?")).toBeInTheDocument();
    // escape + in regex
    const q1 = await screen.findByText(/What is 2 \+ 2\?/i);
    expect(q1).toBeInTheDocument();

    // Answers from MSW are ["1","3","5","4"] (shuffled). We just assert one exists:
    expect(screen.getByRole("button", { name: "4" })).toBeInTheDocument();
  });
});
