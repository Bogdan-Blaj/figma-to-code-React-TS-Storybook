import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import React from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

export interface IOption {
  value: string;
  label: string | React.ReactNode;
}

export interface SelectProps {
  options: IOption[];
  selectedOption: IOption | undefined;
  setSelectedOption: (option: string) => void;
  placeholder?: string;
  LeadingIcon?: React.ReactElement;
  width?: string;
  className?: string;
}

export const Select = ({
  options,
  selectedOption,
  setSelectedOption,
  placeholder,
  LeadingIcon,
  width,
  className,
}: SelectProps) => {
  return (
    <div className={classNames("relative inline-block ", width)}>
      <Listbox
        value={selectedOption && selectedOption.value}
        onChange={setSelectedOption}
      >
        {({ open }) => (
          <>
            <Listbox.Button
              className={classNames(
                "flex items-center border h-11 border-gray-300 px-3.5 rounded-lg bg-white shadow-sm  text-md",
                "focus:ring-4 focus:border-primary-300 focus:ring-primary-100 whitespace-nowrap",
                {
                  "text-gray-900 ": selectedOption,
                  "text-gray-500 ": !selectedOption,
                },
                width
              )}
            >
              {LeadingIcon ? (
                <div className="w-5 h-5 mr-2 overflow-hidden">
                  <LeadingIcon.type size={20} className="text-gray-400" />
                </div>
              ) : null}
              {selectedOption ? selectedOption.label : placeholder}
              <FiChevronDown
                size={20}
                className={classNames(
                  "text-gray-500 dark:text-gray-300 transform duration-100 ease-out",
                  {
                    "-rotate-180": open,
                    "ml-auto": width,
                    "ml-3.5": !width,
                  }
                )}
              />
            </Listbox.Button>
            <Listbox.Options className="inline-flex flex-col w-full bg-white border border-gray-300 rounded-lg shadow-lg top-13 ">
              {options.map((option, index) => (
                <Listbox.Option
                  as={React.Fragment}
                  key={option.value}
                  value={option.value}
                >
                  {({ active, selected }) => (
                    <li
                      className={classNames(
                        "flex items-center pl-3.5 pr-3 justify-between h-11 text-gray-900  text-md cursor-pointer hover:bg-primary-25  whitespace-nowrap",
                        {
                          "bg-primary-25": active,
                          "rounded-t-lg": index === 0,
                          "rounded-b-lg": index === options.length - 1,
                        }
                      )}
                    >
                      <div className="flex items-center">{option.label}</div>
                      {selected ? (
                        <FiCheck className="ml-5 text-primary-600 " />
                      ) : null}
                    </li>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};
