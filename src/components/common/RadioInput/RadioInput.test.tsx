import { render, screen, fireEvent } from "@testing-library/react";
import { RadioInput } from "./RadioInput";

describe("RadioInput", () => {
  const name = "color";

  const options = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
  ];

  it("renders all options", () => {
    render(
      <RadioInput
        name={name}
        options={options}
        value="red"
        onChange={() => {}}
      />
    );
    options.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("checks the option matching the value prop", () => {
    render(
      <RadioInput
        name={name}
        options={options}
        value="blue"
        onChange={() => {}}
      />
    );

    const checkedInput = screen.getByDisplayValue("blue") as HTMLInputElement;
    expect(checkedInput.checked).toBe(true);

    const uncheckedInput = screen.getByDisplayValue("red") as HTMLInputElement;
    expect(uncheckedInput.checked).toBe(false);
  });

  it("calls onChange when an option is clicked", () => {
    const onChange = jest.fn();
    render(
      <RadioInput
        name={name}
        options={options}
        value="red"
        onChange={onChange}
      />
    );

    const blueOption = screen.getByLabelText("Blue");
    fireEvent.click(blueOption);
    expect(onChange).toHaveBeenCalledWith("blue");
  });
});
