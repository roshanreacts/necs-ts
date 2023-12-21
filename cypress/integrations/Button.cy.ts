import { mount } from "@cypress/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "../../src/components/Button.stories";

describe("Button component", () => {
  const { Primary } = composeStories(stories);
  it("renders primary button", () => {
    mount(Primary);
    cy.get("button").should("have.value", "Click me!");
  });
});
