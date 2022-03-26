import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders PayMoz in the App", () => {
  render(<App />);
  const HeaderElement = screen.getByText(/PayNoz./i);
  expect(HeaderElement).toBeInTheDocument();
});
