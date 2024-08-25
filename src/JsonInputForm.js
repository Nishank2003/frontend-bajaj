import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const JsonInputForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const jsonData = JSON.parse(inputValue);
      onSubmit(jsonData.data || []);
      setError("");
    } catch (err) {
      setError("Invalid JSON");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <TextField
        label="Enter JSON"
        variant="outlined"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        error={!!error}
        helperText={error}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default JsonInputForm;
