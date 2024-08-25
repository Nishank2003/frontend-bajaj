import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Dropdown = ({ options, onChange }) => {
  const handleChange = (event) => {
    const selectedValues = event.target.value;
    onChange(selectedValues);
  };

  return (
    <FormControl fullWidth style={{ marginTop: "1rem", marginBottom: "1rem" }}>
      <InputLabel>Filter Options</InputLabel>
      <Select multiple value={[]} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
