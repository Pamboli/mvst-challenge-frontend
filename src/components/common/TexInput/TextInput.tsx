import { clsx } from "clsx";
import { BaseTextProps } from "./types";
import { poppins } from "@/fonts";
import { InputWrapper } from "../InputWrapper/InputWrapper";

export function TextInput({
  label,
  name,
  error,
  icon,
  inputRef,
  onChange,
  value,
  onBlur,
  onFocus,
  placeholder,
  type,
  readOnly,
}: BaseTextProps) {
  return (
    <InputWrapper name={name} error={error} label={label}>
      <div
        className={clsx(
          "flex outline-1 h-10 rounded-md border items-center border-placeholder px-3 bg-input",
          {
            "outline outline-alert": !!error,
            "outline-accent focus-within:outline": !error,
          }
        )}
      >
        <input
          ref={inputRef}
          className="w-full outline-none bg-transparent placeholder:text-placeholder text-gray"
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e.currentTarget.value)}
          onBlur={onBlur}
          value={value}
          onFocus={onFocus}
          type={type}
          readOnly={readOnly}
        />
        {icon}
      </div>
    </InputWrapper>
  );
}
