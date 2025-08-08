import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import StartAnswer from "./StartAnswer";

describe("StartQuiz", () => { 
    test("display the button check quizs", () => {
        render(
          <StartAnswer startQuiz={() => {}} questions={[]} score={0} />
        );
        expect(
          screen.getByRole("button", { name: "Play Again" })
        ).toBeInTheDocument();
      });

})