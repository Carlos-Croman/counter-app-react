import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import App from "../src/App";

const appTitle = "Counter App";
const counterValue = 10;

describe("<App /> - unit test", () => {
  test("must match snapshot", () => {
    const { container } = render(<App appTitle={appTitle} counterValue={counterValue} />);

    expect(container).toMatchSnapshot();
  });

  test("should increment the counter on click add button", () => {
    // Arrange
    render(<App appTitle={appTitle} />);

    // Act
    fireEvent.click(screen.getByRole("button", { name: "+1" }));

    // Assert
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("should reset the counter to its initial value on click reset button", () => {
    render(<App appTitle={appTitle} counterValue={counterValue} />);

    fireEvent.click(screen.getByRole("button", { name: "+1" }));
    fireEvent.click(screen.getByRole("button", { name: "⟳" }));

    expect(screen.getByText(counterValue)).toBeInTheDocument();
  });

  test("should decrement the counter on click subtract button", () => {
    render(<App appTitle={appTitle} counterValue={counterValue} />);

    fireEvent.click(screen.getByRole("button", { name: "-1" }));
    fireEvent.click(screen.getByRole("button", { name: "-1" }));

    expect(screen.getByText(`${counterValue - 2}`)).toBeInTheDocument();
  });
});