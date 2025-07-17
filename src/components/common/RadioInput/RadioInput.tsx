import { clsx } from "clsx";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { BaseInput } from "./types";

export function RadioInput({
  name,
  options,
  onChange,
  value,
  error,
  inputRef,
  label,
  onBlur,
  onFocus,
}: BaseInput) {
  return (
    <InputWrapper name={name} error={error} label={label}>
      <div className="flex gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={clsx(
              `cursor-pointer text-white border rounded-lg h-10 flex-1 px-4 py-2 flex items-center justify-center gap-2 hover:border-accent transition-colors`,
              {
                "text-opacity-50 border-placeholder": value !== option.value,
                "text-opacity-100 border-white": value === option.value,
              }
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              ref={inputRef}
              onBlur={onBlur}
              onFocus={onFocus}
              className="hidden"
            />
            {option.label}
          </label>
        ))}
      </div>
    </InputWrapper>
  );
}
