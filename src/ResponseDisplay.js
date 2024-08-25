import React from "react";
import Typography from "@mui/material/Typography";

const ResponseDisplay = ({ data, filters }) => {
  const filterData = () => {
    let filteredData = [];

    if (filters.includes("Alphabets")) {
      filteredData = filteredData.concat(
        data.filter((item) => /^[a-zA-Z]$/.test(item))
      );
    }

    if (filters.includes("Numbers")) {
      filteredData = filteredData.concat(
        data.filter((item) => /^[0-9]$/.test(item))
      );
    }

    if (filters.includes("Highest lowercase alphabet")) {
      const lowerCaseLetters = data.filter((item) => /^[a-z]$/.test(item));
      const highestLowerCase = lowerCaseLetters.sort().pop();
      if (highestLowerCase) {
        filteredData.push(highestLowerCase);
      }
    }

    return filteredData;
  };

  const filteredData = filterData();

  return (
    <div style={{ marginTop: "1rem" }}>
      <Typography variant="h5">Filtered Response:</Typography>
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResponseDisplay;
