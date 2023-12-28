import React from "react";
import { describe, test, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Text.stories";
const { Default } = composeStories(stories);

describe("Button", () => {
  test("renders with primary", () => {
    render(<Default />);
    expect(screen.getByText("Default Text")).toBeInTheDocument();
  });

  test("renders with different text", () => {
    render(<Default>New Text</Default>);
    expect(screen.getByText("New Text")).toBeInTheDocument();
  });
});
