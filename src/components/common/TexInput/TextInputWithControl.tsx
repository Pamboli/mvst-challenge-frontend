import { Controller, FieldValues } from "react-hook-form";
import { TextInput } from "./TextInput";
import { TextWithControlProps } from "./types";

export function TextInputWithControl<T extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: TextWithControlProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { ref, ...field } }) => (
        <TextInput inputRef={ref} {...field} {...props} />
      )}
    />
  );
}
