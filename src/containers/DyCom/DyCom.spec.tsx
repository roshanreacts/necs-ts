import React from "react";
import { describe, test, expect, vi } from "vitest";
import { composeStories } from "@storybook/react";
import { fireEvent, render, screen } from "@testing-library/react";

import { getServer } from "@/utils/test-utils";
import * as stories from "./DyCom.stories";

const { DyComButton } = composeStories(stories);

const server = getServer();
describe("Profile", () => {
  test("renders film cards for each film", async () => {
    server.use(...DyComButton.parameters.msw.handlers);
    const mockFn = vi.fn();
    render(<DyComButton />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    await screen.findAllByRole("button");
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
