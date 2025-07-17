"use client";

import { type PropsWithChildren } from "react";

import { clsx } from "clsx";
import Link from "next/link";
import { SpinnerIcon } from "../Icons";

type Props = {
  noGrow?: boolean;
  variant?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
} & (
  | {
      type?: "submit" | "reset" | "button";
      onClick?: () => void;
      href?: never;
    }
  | {
      type?: never;
      onClick?: never;
      href: string;
    }
);

function getVariant(variant: Props["variant"]) {
  return clsx(
    "text-nowrap rounded-full px-7 flex items-center gap-2 justify-center font-medium transition-colors h-12 cursor-pointer",
    {
      "hover:bg-accent-hover bg-accent text-white": variant === "primary",
      "<hover:bg-accent-hover></hover:bg-accent-hover> bg-transparent text-gray-600 border border-accent text-white":
        variant === "secondary",
    }
  );
}

function Button({
  variant = "primary",
  children,
  type = "submit",
  loading,
  href,
  noGrow = false,
  onClick,
  disabled,
}: PropsWithChildren<Props>) {
  if (href) {
    return (
      <Link
        href={href}
        className={clsx(getVariant(variant), !noGrow && "w-full")}
      >
        {loading ? <div /> : children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={clsx(
        getVariant(variant),
        !noGrow && "w-full",
        "disabled:text-opacity-50 disabled:bg-opacity-50  disabled:hover:bg-accent disabled:hover:bg-opacity-50 disabled:cursor-default"
      )}
      type={type}
      disabled={disabled}
    >
      {loading ? (
        <div className="animate-spin">
          <SpinnerIcon />
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export { Button, getVariant };
