import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import StartQuestion from "./StartQuestion";

describe("StartQuestion", () => {
  test("display the button check answers", () => {
    render(
      <StartQuestion startAnswer={() => {}} questions={[]} click={() => {}} />
    );
    expect(
      screen.getByRole("button", { name: "Check answers" })
    ).toBeInTheDocument();
  });
});
