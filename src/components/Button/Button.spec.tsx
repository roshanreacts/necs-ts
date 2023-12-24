import React from "react";
import { describe, test, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Button.stories";
const { Primary } = composeStories(stories);

describe("Button", () => {
  test("renders with primary", () => {
    render(<Primary />);
    expect(screen.getByText("Click me!")).toBeInTheDocument();
  });

  test("renders with different text", () => {
    render(<Primary>Submit</Primary>);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
