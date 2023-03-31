import React, { useState } from "react";
import "./App.css";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import { IOption, Select } from "./components/Select/Select";
import { countriesData } from "./data/data";
import { countriesFlag } from "./Images/countries";

const options = [
  { value: "Leading", content: "Leading" },
  { value: "Middle", content: "Middle" },
  { value: "Trailing", content: "Trailing" },
];

function App() {
  const [activeItem, setActiveItem] = useState(options[1].value);

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

  const handleSelectCountry = (countryValue: string) => {
    const country = countries.find((c) => c.value === countryValue) as IOption;
    setSelectedCountry(country);
  };

  return (
    <div className="flex flex-col">
      <ButtonGroup
        active={activeItem}
        options={options}
        setActive={setActiveItem}
      />

      <Select
        options={countries}
        selectedOption={selectedCountry}
        setSelectedOption={handleSelectCountry}
        placeholder="Select a country"
        width="w-20rem"
      />
    </div>
  );
}

export default App;
