import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByText("Home page");

    expect(heading).toBeInTheDocument();
  });
  it("should be loggedOut by default", () => {
    render(<Home />);

    const logIn = screen.getByText("Log in");

    expect(logIn).toBeInTheDocument();
  });
});
