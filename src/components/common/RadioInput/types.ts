import { Ref } from "react";
import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";

export type RadioOption = {
  label: string;
  value: string;
};

export type RadioInputProps = {
  options: RadioOption[];
  label?: string;
};

export type BaseInput = RadioInputProps & {
  onChange: (value: string) => void;
  value: string;
  name: string;
  error?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  inputRef?: Ref<HTMLInputElement | null>;
};

export type RadioWithControlProps<T extends FieldValues> = RadioInputProps & {
  name: Path<T>;
  control: Control<T>;
  error?: string;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
};
