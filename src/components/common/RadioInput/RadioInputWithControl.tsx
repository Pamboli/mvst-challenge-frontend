import { Controller, FieldValues } from "react-hook-form";
import { RadioWithControlProps } from "./types";
import { RadioInput } from "./RadioInput";

export function RadioInputWithControl<T extends FieldValues>({
  control,
  name,
  rules,
  ...props
}: RadioWithControlProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { ref, ...field } }) => (
        <RadioInput {...props} inputRef={ref} {...field} />
      )}
    />
  );
}
