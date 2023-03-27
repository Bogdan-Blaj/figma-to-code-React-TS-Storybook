import classNames from "classnames";
import React, { Dispatch, SetStateAction } from "react";

type IButtonItem<T> = {
  value: T;
  content: React.ReactNode;
};

export interface ButtonGroupProps<T> {
  options: IButtonItem<T>[];
  active: T;
  setActive: Dispatch<SetStateAction<T>>;
}

export const ButtonGroup = <T extends unknown>({
  active,
  setActive,
  options,
}: ButtonGroupProps<T>) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            key={option.value as string}
            className={classNames(
              "inline-flex whitespace-nowrap items-center h-10 px-4 font-medium text-sm focus:outline-none hover:bg-gray-200  text-gray-700  border border-gray-300",
              {
                "rounded-l-lg border-r-0": index === 0,
                "border-r-0": index !== 0 && index !== options.length - 1,
                "rounded-r-lg": index === options.length - 1,
                "bg-gray-200 ": active === option.value,
              }
            )}
            onClick={() => setActive(option.value)}
          >
            {option.content}
          </button>
        );
      })}
    </>
  );
};
