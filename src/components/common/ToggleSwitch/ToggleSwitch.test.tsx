import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleSwitch } from "./ToggleSwitch";

describe("ToggleSwitch", () => {
  const options = ["One", "Two", "Three"];

  it("renders all options as buttons", () => {
    render(
      <ToggleSwitch options={options} selectedIndex={0} onChange={() => {}} />
    );

    options.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: option })).toBeInTheDocument();
    });
  });

  it("applies correct text colors based on selectedIndex", () => {
    const { rerender } = render(
      <ToggleSwitch options={options} selectedIndex={1} onChange={() => {}} />
    );

    options.forEach((option, idx) => {
      const btn = screen.getByRole("button", { name: option });
      if (idx === 1) {
        expect(btn).toHaveClass("text-black");
        expect(btn).not.toHaveClass("text-white");
      } else {
        expect(btn).toHaveClass("text-white");
        expect(btn).not.toHaveClass("text-black");
      }
    });

    rerender(
      <ToggleSwitch options={options} selectedIndex={2} onChange={() => {}} />
    );

    expect(screen.getByRole("button", { name: options[2] })).toHaveClass(
      "text-black"
    );
  });

  it("calls onChange with correct index when a button is clicked", () => {
    const onChange = jest.fn();
    render(
      <ToggleSwitch options={options} selectedIndex={0} onChange={onChange} />
    );

    const buttonTwo = screen.getByRole("button", { name: "Two" });
    fireEvent.click(buttonTwo);
    expect(onChange).toHaveBeenCalledWith(1);

    const buttonThree = screen.getByRole("button", { name: "Three" });
    fireEvent.click(buttonThree);
    expect(onChange).toHaveBeenCalledWith(2);
  });

  it("moves the sliding indicator according to selectedIndex", () => {
    const { container, rerender } = render(
      <ToggleSwitch options={options} selectedIndex={0} onChange={() => {}} />
    );

    const indicator = container.querySelector("div.absolute");
    expect(indicator).toHaveStyle({
      width: `${100 / options.length}%`,
      transform: "translateX(0%)",
    });

    rerender(
      <ToggleSwitch options={options} selectedIndex={2} onChange={() => {}} />
    );
    expect(indicator).toHaveStyle({
      width: `${100 / options.length}%`,
      transform: "translateX(200%)",
    });
  });
});
