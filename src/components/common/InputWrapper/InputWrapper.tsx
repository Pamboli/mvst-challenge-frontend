import { poppins } from "@/fonts";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  label?: string;
  name: string;
  error?: string;
};

export function InputWrapper({ children, name, error, label }: Props) {
  return (
    <div
      className={`flex w-full flex-col justify-start gap-1 text-start ${poppins.className}`}
    >
      {label && (
        <label className="font-medium text-sm text-gray" htmlFor={name}>
          {label}
        </label>
      )}
      {children}
      {error && <p className="text-sm text-alert">{error}</p>}
    </div>
  );
}
