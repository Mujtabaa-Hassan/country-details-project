"use client";

import { useParams } from 'next/navigation';

export default function CountryDetails() {
  const { country_name } = useParams(); 

  const countries = [
    { name: "Pakistan", capital: "Islamabad", population: 220000000 },
    { name: "Iran", capital: "Tehran", population: 83995249 },
    { name: "Iraq", capital: "Baghdad", population: 42268021 },
    { name: "Turkey", capital: "Istanbul", population: 40172458 },
    { name: "Germany", capital: "Berlin", population: 40172458 },
  ];

  if (!country_name) {
    return <div>Country Not Found!</div>; 
  }

  const selectedCountry = countries.find(
    (country) => country.name.toLowerCase() === country_name.toString().trim().toLowerCase()
  );

  if (!selectedCountry) {
    return (
      <div className="text-center m-10 bg-gray-500 rounded-lg">
        <h1 className="text-white text-center text-2xl">Country Not Found!</h1>
      </div>
    );
  }

  return (
    <div className="text-center m-10 bg-blue-500 hover:bg-blue-600 rounded-lg">
      <h1 className="text-white text-center text-xl p-4">Country Name: {selectedCountry.name}</h1>
      <h2 className="text-white text-center text-xl p-4">Capital: {selectedCountry.capital}</h2>
      <h3 className="text-white text-center text-xl p-4">Population: {selectedCountry.population}</h3>
    </div>
  );
}
