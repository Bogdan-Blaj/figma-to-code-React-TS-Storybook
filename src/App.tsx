import React, { useState } from "react";
import "./App.css";
import { ButtonGroup } from "./components/ButtonGroup/ButtonGroup";
import { IOption, Select } from "./components/Select/Select";
import { countriesData } from "./data/data";
import { countriesFlag } from "./Images/countries";
import { TextInput } from "./components/TextInput/TextInput";
import { FiHelpCircle, FiMail } from "react-icons/fi";

const options = [
  { value: "Leading", content: "Leading" },
  { value: "Middle", content: "Middle" },
  { value: "Trailing", content: "Trailing" },
];

function App() {
  const [activeItem, setActiveItem] = useState(options[1].value);
  const [text, setText] = useState("");

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
    <div>
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

        <div>
          <TextInput
            type="email"
            value={text}
            handleChange={(e) => setText(e.target.value)}
            label="Email"
            placeholder="veronica@example.com"
            helperText="This is a hint text to help the user."
            LeadingIcon={<FiMail />}
            TrailingIcon={<FiHelpCircle />}
            disabled={false}
          />

          <TextInput
            type="text"
            value={text}
            handleChange={(e) => setText(e.target.value)}
            label="Website"
            placeholder="example.com"
            leadingText="https://"
            helperText="This is a hint text to help the user."
            TrailingIcon={<FiHelpCircle />}
            disabled={true}
          />
        </div>
      </div>
    </div>

  );
}

export default App;
