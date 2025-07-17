"use client";

import { poppins } from "@/fonts";
import clsx from "clsx";

type Props = {
  options: string[];
  selectedIndex: number;
  onChange: (index: number) => void;
};

export function ToggleSwitch({ options, selectedIndex, onChange }: Props) {
  return (
    <div className="relative w-full h-12 bg-neutral-800 rounded-full flex items-center px-1">
      <div
        className="absolute top-0 left-0 h-full rounded-full bg-white transition-transform duration-300 ease-in-out"
        style={{
          width: `${100 / options.length}%`,
          transform: `translateX(${selectedIndex * 100}%)`,
        }}
      />
      {options.map((option, idx) => (
        <button
          key={`${option}-${idx}`}
          onClick={() => onChange(idx)}
          className={clsx(
            poppins.className,
            "flex-1 z-10 h-full rounded-full transition-colors",
            options[selectedIndex] === option ? "text-black" : "text-white"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
