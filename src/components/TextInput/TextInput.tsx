/* eslint-disable react/jsx-pascal-case */
import React from "react";
import classNames from "classnames";
import { Typography } from "../Typography/Typography";
import { useDarkModePreference } from "../../hooks/useDarkModePreference";

export interface TextInputProps {
  placeholder?: string;
  label?: string;
  leadingText?: string;
  type: "text" | "email";
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  helperText?: string;
  LeadingIcon?: React.ReactElement;
  TrailingIcon?: React.ReactElement;
}

export const TextInput = ({
  type,
  value,
  handleChange,
  label,
  leadingText,
  placeholder,
  error,
  helperText,
  LeadingIcon,
  TrailingIcon,
  disabled,
}: TextInputProps) => {
  const isDarkMode = useDarkModePreference();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e);
  };
  return (
    <div className="w-80">
      {label ? (
        <Typography
          variant="sm"
          customWeight="medium"
          customColor={isDarkMode ? "text-white" : "text-gray-700"}
          className="mb-1.5"
        >
          {label}
        </Typography>
      ) : null}
      <div
        className={classNames("relative", {
          "flex items-center": leadingText,
        })}
      >
        <div className="h-11 shadow-sm rounded-lg w-full absolute flex items-center justify-between px-3.5 pointer-events-none">
          {LeadingIcon ? (
            <LeadingIcon.type className="text-gray-500" />
          ) : (
            <div />
          )}
          {TrailingIcon ? (
            <TrailingIcon.type
              className={classNames({
                "text-gray-400": !error,
                "text-error-500": error,
              })}
            />
          ) : null}
        </div>

        {leadingText ? (
          <div
            className={classNames(
              "flex items-center h-11 text-md text-gray-500 pl-3.5 pr-3 border border-r-0 rounded-l-lg cursor-default select-none",
              {
                "bg-white border-gray-300 focus:ring-gray-100 focus:border-gray-100 focus:ring-opacity-20 ": !isDarkMode && !disabled,
                "border-gray-500 focus:ring-primary-100 focus:border-primary-300 bg-gray-800": isDarkMode && !disabled,
                "dark:bg-gray-700": disabled && isDarkMode,
                "bg-gray-100 text-gray-500": disabled && !isDarkMode,
              }
            )}
          >
            {leadingText}
          </div>
        ) : null}

        <input
          type={type}
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={classNames(isDarkMode ? "text-white" : "text-gray-900",
            "w-full select-none text-md border h-11 placeholder-gray-500",
            {
              "pl-9": LeadingIcon,
              "pr-9": TrailingIcon,
              "rounded-l-0 rounded-r-lg": leadingText,
              "rounded-lg": !leadingText,
              "bg-white  border-gray-300 focus:ring-gray-100 focus:border-gray-100 focus:ring-opacity-20 ": !isDarkMode && !disabled,
              "border-gray-500 focus:ring-primary-100 focus:border-primary-300 bg-gray-800": isDarkMode && !disabled,
              "border-error-300 focus:ring-4 focus:border-error-300 focus:ring-error-100":
                error,
              "bg-gray-700": disabled && isDarkMode,
              "bg-gray-100 text-gray-500": disabled && !isDarkMode,
            }
          )}
          disabled={disabled}
        />
      </div>

      {error ? (
        <div className="mt-1.5 text-error-500 text-sm">{error}</div>
      ) : null}

      {helperText ? (
        <div className="mt-1.5 text-gray-500 text-sm">{helperText}</div>
      ) : null}
    </div>
  );
};
