/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

export default function FormInput({
  title,
  placeholder,
  use_name,
  restrictions,
  registerOBJ,
  errorsOBJ
}) {
  return (
    <div className="input_container">
      <div className="input__container">
        <label>{title}</label>
      </div>
      <input
        type="text"
        id={use_name}
        placeholder={placeholder}
        {...registerOBJ(use_name, restrictions)}
      />
      {
        <div className="error__container">
          <li className="error__line">{errorsOBJ[use_name]?.message}</li>
        </div>
      }
    </div>
  );
}

export function FormTextarea({
  title,
  placeholder,
  use_name,
  restrictions,
  registerOBJ,
  errorsOBJ
}) {
  return (
    <div className="input_container">
      <div className="input__container">
        <label>{title}</label>
      </div>
      <textarea
        type="text"
        id={use_name}
        placeholder={placeholder}
        {...registerOBJ(use_name, restrictions)}
      />
      {errorsOBJ[use_name] && (
        <div className="error__container">
          <li className="error__line">{errorsOBJ[use_name]?.message}</li>
        </div>
      )}
    </div>
  );
}

export function FormStars({ use_name, restrictions, errorsOBJ, registerOBJ }) {
  const [rating, setRating] = useState(undefined);
  return (
    <div>
      <div className="star_container">
        {Array.from(Array(5).keys()).map((_, i) => (
          <div key={i}>
            <input
              className="star_hidden exept"
              type="radio"
              value={i + 1}
              id={i}
              {...registerOBJ(use_name, restrictions)}
              onClick={() => {
                setRating(i + 1);
                console.log(rating);
              }}
            />
            <label htmlFor={i}>
              <StarIcon fill={rating && rating >= i + 1 ? "#242D63" : "none"} />
            </label>{" "}
          </div>
        ))}
      </div>
      {errorsOBJ[use_name]?.message && (
        <span>{errorsOBJ[use_name]?.message}</span>
      )}
    </div>
  );
}

function StarIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="star"
      width={46}
      height={46}
      viewBox="0 0 24 24"
      fill={props.fill}
      stroke="#242D63"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}




export const CountrySelector = ({ setValue, use_name, title, errorsOBJ }) => {
  const [options, setOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("No Country");

  useEffect(() => {
    // Fetch countries from the API
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all"); // Example API URL
        const data = await response.json();

        // Format data for react-select
        const countryOptions = data.map((country) => ({
          value: country.name.common, // or country.cca3 for 3-letter codes
          label: country.name.common,
        }));

        setOptions(countryOptions);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);


  useEffect(() => {
    if (selectedCountry !== "") {
      console.log("Selected country:", selectedCountry);
      setValue(use_name, selectedCountry.value, { shouldValidate: true });
    }
  }, [selectedCountry]);

  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption ? selectedOption : {value: "No Country", label: "No Country"});
    };

  return (
    <div className="input_container">
      <div className="input__container">
        <label>{title}</label>

        {errorsOBJ[use_name] && (
          <div className="error__container">
            <li className="error__line">{errorsOBJ[use_name]?.message}</li>
          </div>
        )}
      </div>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        options={options}
        placeholder="Select a country..."
        isClearable
        isSearchable
        value={
          selectedCountry
        }
        onChange={handleChange}
        styles={customStyles}
      />
    </div>
  );
};


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#bfd5b900",
    border: "#00000000",
  borderRadius: "30px"
    
   
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#007bff"
      : state.isFocused
      ? "#e9ecef"
      : null,
    color: state.isSelected ? "#fff" : "#333",
    "&:hover": {
      backgroundColor: "#e9ecef",
    },
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999, // Ensure the menu appears on top
  }),
};
