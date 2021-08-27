import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Jennie och Andreas Pipeline lyckades, nu kör vi en demo!/i
  );
  expect(linkElement).toBeInTheDocument();
});
