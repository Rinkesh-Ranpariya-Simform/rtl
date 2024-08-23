import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe } from "vitest";

test("App contains correct heading", () => {
  render(<App />);
  const headingElement = screen.getByText("I'm gonna learn React Testing Library");
  expect(headingElement).toBeInTheDocument();
});



// describe("App contains correct heading", () => {

  // test("App contains correct heading", () => {});
  // test("App contains correct heading", () => {});
  // test("App contains correct heading", () => {});

// });
