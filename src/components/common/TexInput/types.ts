import { HTMLInputTypeAttribute, ReactNode, Ref } from "react";
import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";

export type TextInputProps = {
  placeholder?: string;
  icon?: ReactNode;
  label?: string;
  type?: HTMLInputTypeAttribute;
  readOnly?: boolean;
};

export type BaseTextProps = TextInputProps & {
  onChange: (value: string) => void;
  value: string;
  name: string;
  error?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  inputRef?: Ref<HTMLInputElement | null>;
};

export type TextWithControlProps<T extends FieldValues> = TextInputProps & {
  name: Path<T>;
  control: Control<T>;
  error?: string;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
};
