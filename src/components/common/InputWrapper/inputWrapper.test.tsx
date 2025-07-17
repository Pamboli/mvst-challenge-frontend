import { render, screen } from "@testing-library/react";
import { InputWrapper } from "./InputWrapper";

describe("InputWrapper", () => {
  const name = "username";

  it("renders the label when provided", () => {
    render(
      <InputWrapper name={name} label="Username">
        <input id={name} />
      </InputWrapper>
    );

    const label = screen.getByText("Username");
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", name);
  });

  it("does not render label if none provided", () => {
    render(
      <InputWrapper name={name}>
        <input id={name} />
      </InputWrapper>
    );

    const label = screen.queryByLabelText(/.*/);
    expect(label).toBeNull();
  });

  it("renders the children inside", () => {
    render(
      <InputWrapper name={name} label="Email">
        <input id={name} />
      </InputWrapper>
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders the error message when provided", () => {
    render(
      <InputWrapper name={name} error="This field is required">
        <input id={name} />
      </InputWrapper>
    );

    const error = screen.getByText("This field is required");
    expect(error).toBeInTheDocument();
  });
});
