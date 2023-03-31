// data that simulates an API call

import React from "react";
import { IOption } from "../components/Select/Select";

export type CountryISO = "BE" | "DE" | "FR" | "IT" | "NL" | "RU" | "US";

interface ICountry {
  city: string;
  countryISO: CountryISO;
}

export const countriesData: ICountry[] = [
  {
    city: "Amsterdam",
    countryISO: "NL",
  },
  {
    city: "Rome",
    countryISO: "IT",
  },
  {
    city: "Berlin",
    countryISO: "DE",
  },
  {
    city: "Paris",
    countryISO: "FR",
  },
  {
    city: "Washington",
    countryISO: "US",
  },
  {
    city: "Moscow",
    countryISO: "RU",
  },
  {
    city: "Brussels",
    countryISO: "BE",
  },
];

export const dates: IOption[] = [
  {
    label: "Okt 25 - Okt 31",
    value: "okt25",
  },
  {
    label: "Nov 1 - Nov 7",
    value: "nov1",
  },
  {
    label: "Nov 8 - Nov 14",
    value: "nov8",
  },
  {
    label: "Nov 15 - Nov 21",
    value: "nov15",
  },
  {
    label: "Nov 22 - Nov 28",
    value: "nov22",
  },
  {
    label: "Nov 29 - Dec 4",
    value: "nov29",
  },
  {
    label: "Dec 5 - Dec 11",
    value: "dec5",
  },
];

export const prices: IOption[] = [
  {
    label: "Any price",
    value: "-1",
  },
  {
    label: "Below 50",
    value: "0",
  },
  {
    label: "50 - 100",
    value: "50",
  },
  {
    label: "100 - 200",
    value: "100",
  },
  {
    label: "200 - 300",
    value: "200",
  },
  {
    label: "300 - 400",
    value: "300",
  },
  {
    label: "400 - 500",
    value: "400",
  },
  {
    label: "500 - 600",
    value: "500",
  },
];
