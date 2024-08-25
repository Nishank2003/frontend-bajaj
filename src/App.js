import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import JsonInputForm from "./JsonInputForm";
import Dropdown from "./Dropdown";
import ResponseDisplay from "./ResponseDisplay";

const App = () => {
  const [responseData, setResponseData] = useState([]);
  const [filters, setFilters] = useState([]);

  return (
    <Container maxWidth="sm" style={{ paddingTop: "2rem" }}>
      <Typography variant="h3" align="center" gutterBottom>
        21BCE2433
      </Typography>
      <JsonInputForm onSubmit={setResponseData} />
      {responseData.length > 0 && (
        <>
          <Dropdown
            options={["Alphabets", "Numbers", "Highest lowercase alphabet"]}
            onChange={setFilters}
          />
          <ResponseDisplay data={responseData} filters={filters} />
        </>
      )}
    </Container>
  );
};

export default App;
