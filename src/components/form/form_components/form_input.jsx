/* eslint-disable react/prop-types */

import { useState } from "react";

export default function FormInput({
  title,
  placeholder,
  use_name,
  restrictions,
  registerOBJ,
}) {
  return (
    <div className="input_container">
      <label>{title}:</label>
      <input
        type="text"
        id={use_name}
        placeholder={placeholder}
        {...registerOBJ(use_name, restrictions)}
      />
    </div>
  );
}

export function FormTextarea({
  title,
  placeholder,
  use_name,
  restrictions,
  registerOBJ,
}) {
  return (
    <div className="input_container">
      <label>{title}:</label>
      <textarea
        type="text"
        id={use_name}
        placeholder={placeholder}
        {...registerOBJ(use_name, restrictions)}
      />
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
