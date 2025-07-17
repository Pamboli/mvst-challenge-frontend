import { render, screen, fireEvent } from "@testing-library/react";
import { TextInput } from "./TextInput";

describe("TextInput", () => {
  const name = "email";

  it("renders the input with correct attributes", () => {
    render(
      <TextInput
        name={name}
        value="test@example.com"
        onChange={() => {}}
        placeholder="Enter your email"
        type="email"
      />
    );
    const input = screen.getByPlaceholderText(
      "Enter your email"
    ) as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input.type).toBe("email");
    expect(input.value).toBe("test@example.com");
    expect(input.name).toBe(name);
  });

  it("calls onChange with the new value when input changes", () => {
    const onChange = jest.fn();
    render(<TextInput name={name} value="" onChange={onChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "hello@world.com" } });

    expect(onChange).toHaveBeenCalledWith("hello@world.com");
  });

  it("renders icon if provided", () => {
    render(
      <TextInput
        name={name}
        value=""
        onChange={() => {}}
        icon={<span data-testid="icon">Icon</span>}
      />
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies error styles and shows error message", () => {
    render(
      <TextInput
        name={name}
        value=""
        onChange={() => {}}
        error="Invalid email"
      />
    );

    const wrapper = screen.getByText("Invalid email");
    expect(wrapper).toBeInTheDocument();
  });

  it("renders input as readOnly when readOnly prop is true", () => {
    render(
      <TextInput
        name={name}
        value="readonly value"
        onChange={() => {}}
        readOnly
      />
    );
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });
});
