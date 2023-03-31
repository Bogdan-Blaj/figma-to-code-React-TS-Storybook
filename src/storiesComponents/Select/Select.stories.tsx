import React, { useState } from "react";
import StoryLayout from "../StoryLayout";
import { Story, Meta } from "@storybook/react";
import { IOption, Select, SelectProps } from "../../components/Select/Select";
import { countriesData, dates, prices } from "../../data/data";
import { countriesFlag } from "../../Images/countries";
import { FiCalendar, FiDollarSign } from "react-icons/fi";

const meta: Meta = {
  title: "Select",
  component: Select,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

interface Props extends SelectProps {
  darkMode: boolean;
}

const SelectStory: Story<Props> = (args) => {
  const countries: IOption[] = countriesData.map((country) => ({
    value: country.countryISO,
    label: (
      <>
        <img
          src={countriesFlag[country.countryISO]}
          alt={country.countryISO.toLowerCase()}
          className="w-5 h-5 mr-2"
        />{" "}
        {`${country.city}, ${country.countryISO}`}
      </>
    ),
  }));
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedDate, setSelectedDate] = useState<IOption>();
  const [selectedPrice, setSelectedPrice] = useState<IOption>();

  const handleSelectCountry = (countryValue: string) => {
    const country = countries.find((c) => c.value === countryValue) as IOption;
    setSelectedCountry(country);
  };
  const handleSelectDate = (dateValue: string) => {
    const date = dates.find((p) => p.value === dateValue) as IOption;
    setSelectedDate(date);
  };

  const handleSelectPrice = (priceValue: string) => {
    const price = prices.find((p) => p.value === priceValue) as IOption;
    setSelectedPrice(price);
  };

  return (
    <StoryLayout darkMode={args.darkMode} className="space-x-3 space-y-3">
      <Select
        options={countries}
        selectedOption={selectedCountry}
        setSelectedOption={handleSelectCountry}
        placeholder="Select a country"
        width="w-20rem"
      />

      <Select
        options={dates}
        LeadingIcon={<FiCalendar />}
        selectedOption={selectedDate}
        setSelectedOption={handleSelectDate}
        placeholder="Select a date"
        width="w-50"
      />
      <Select
        options={prices}
        LeadingIcon={<FiDollarSign />}
        selectedOption={selectedPrice}
        setSelectedOption={handleSelectPrice}
        placeholder="Select a price"
        width="w-50"
      />
    </StoryLayout>
  );
};

export const Default = SelectStory.bind({});

Default.args = {
  darkMode: false,
};

Default.parameters = {
  controls: {
    exclude: ["options", "selectedOption", "setSelectedOption", "LeadingIcon"],
  },
};
