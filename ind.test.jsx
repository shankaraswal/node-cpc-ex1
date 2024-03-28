import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Ind from "../ind";

describe("Ind", () => {
  test("renders without crashing", () => {
    render(<Ind />);
    expect(screen.getByTestId("ind")).toBeInTheDocument();
  });

  test("increments count when button clicked", () => {
    render(<Ind />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });

  test("decrements count when button clicked", () => {
    render(<Ind count={1} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  test("count does not go below 0", () => {
    render(<Ind count={0} />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });
});
