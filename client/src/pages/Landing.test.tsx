import React from "react";
import { render, screen } from "@testing-library/react";
import Landing from "./Landing";
import { MemoryRouter } from "react-router-dom";

describe("landing page", () => {
  test("check if name is appearing", () => {});

  test("check if button to select languages in present", () => {
    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );

    const linkElement = screen.getByText("Select Your Language");
    expect(linkElement).toBeInTheDocument();
  });

  test('check if href is "/language', () => {});

  test("check if button changes color on hover", () => {});
});
