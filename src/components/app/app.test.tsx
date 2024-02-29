import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./app";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/мбоу алгосош/i);
  expect(linkElement).toBeInTheDocument();
});
