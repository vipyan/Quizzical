import { test } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";

import StartQuiz from "./StartQuiz";

describe("StartQuiz", () => {
  test("display the Start Quiz button and heading and paragraph", () => {
    render(
        <StartQuiz
            startQuiz={() => { }}
             />
    );
    expect(
      screen.getByRole("button", { name: "Start Quiz" })
      ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Quizzical" })
      ).toBeInTheDocument();
    expect(
      screen.getByText("Challenge your knowledge" )
      ).toBeInTheDocument()

  });
});
