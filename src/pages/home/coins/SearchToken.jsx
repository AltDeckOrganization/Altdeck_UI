
import React from "react";
import { useNavigate } from "react-router";

import "./SearchToken.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function SearchToken({ tokens }) {

  const style = {
    width: 300,
    backgroundColor: "#ffff",
    color: "#fff",
    border: "2px solid #00AA72",
    boxShadow: 24,
  };

  const navigate = useNavigate();
  const redirectTodetailPage = (rowId) => {
    navigate(`/tokens/${rowId}`);
  };

  return (
    <Stack sx={{ width: 300, margin: "auto" }}>
      <Autocomplete
        disablePortal
        id="token-search"
        style={style}
        options={tokens}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        onChange={(e, value) => redirectTodetailPage(value.id)}
        renderInput={(params) =>
          <TextField {...params} label="coins"
          />}
        noOptionsText={"Coin not found"}
      />
    </Stack>
  )
};