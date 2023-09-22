import * as React from "react";
import classNames from "classnames";
import { twMerge } from "tailwind-merge";
import * as icons from "@heroicons/react/24/outline";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  primary?: boolean;
  secondary?: boolean;
  small?: boolean;
  link?: boolean;
  active?: boolean;
  icon?: keyof typeof icons;
  borderless?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      primary,
      secondary,
      small,
      link,
      type = "button",
      icon,
      active,
      borderless,
      ...rest
    },
    ref
  ) => {
    const IconComponent = icons[icon || "FolderIcon"];

    const regular = !primary && !secondary && !link;

    return (
      <button
        ref={ref}
        type={type}
        className={twMerge(
          classNames(
            "inline-flex gap-1 items-center rounded px-3 py-2 font-semibold shadow-sm",
            {
              "bg-white text-gray-900 border hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700":
                regular,
            },
            {
              "text-white bg-indigo-600 border border-indigo-600 hover:bg-indigo-700 hover:border-indigo-600 dark:bg-indigo-600 dark:border-indigo-600":
                primary,
            },
            {
              "text-gray-900 bg-gray-200 border border-gray-100 hover:bg-gray-300 hover:border-gray-100":
                secondary,
            },
            { "px-2.5 py-1 text-sm": small },
            { "ring-4": active },
            {
              "p-0 bg-transparent text-gray-800 font-normal border-0 shadow-none hover:bg-transparent hover:text-indigo-500 dark:text-gray-400":
                link,
            },
            { "opacity-25": rest?.disabled },
            { "border-0": borderless }
          )
        )}
        {...rest}
      >
        <div className="flex w-full items-center justify-center">
          <div className="flex gap-2 items-center">
            {icon && <IconComponent className="w-4 h-4" />}
            {children}
          </div>
        </div>
      </button>
    );
  }
);
