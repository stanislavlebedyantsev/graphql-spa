import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "./page";
import { AuthProvider } from "@/hooks/auth";

jest.mock("next/navigation");
HTMLFormElement.prototype.requestSubmit = jest.fn();
describe("Home", () => {
  it("Login should render successfully", async () => {
    render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );

    const logIn = screen.getByText("Sign In");

    expect(logIn).toBeInTheDocument();
  });
});
