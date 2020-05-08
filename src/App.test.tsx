import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders first try text", () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/first try/i);
  expect(textElement).toBeInTheDocument();
});
