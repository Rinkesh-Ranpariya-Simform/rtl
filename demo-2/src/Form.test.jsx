import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import Form from "./Form";

test("Render Mobile field", () => {
  render(<Form />);

  const mobileBtn = screen.getByText("Mobile");
  fireEvent.click(mobileBtn);

  screen.debug();

  const emailInput = screen.getByText("Enter your Mobile number");
  expect(emailInput).toBeInTheDocument();

  const mobileInput = screen.queryByText("Enter your Email");
  expect(mobileInput).not.toBeInTheDocument();
});

test("Render Email field", () => {
  const { container } = render(<Form />);
  logRoles(container);

  const emailBtn = screen.getByText("Email");
  fireEvent.click(emailBtn);

  screen.debug();

  const mobileInput = screen.getByText("Enter your Email");
  expect(mobileInput).toBeInTheDocument();

  const emailInput = screen.queryByText("Enter your Mobile number");
  expect(emailInput).not.toBeInTheDocument();
});
