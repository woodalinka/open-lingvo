import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("testing routes", () => {
  const user = userEvent.setup();
  test("the button should route on click to '/languages'", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const routeLink = screen.getByText("Select Your Language");
    await user.click(routeLink);
    expect(screen.getByText("Select the language")).toBeInTheDocument();
  });
});
