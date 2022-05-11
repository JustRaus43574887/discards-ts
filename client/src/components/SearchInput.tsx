import React, { useState } from "react";

import { SearchTextField } from "../components/MUI/CssComponents";
import { InputAdornment } from "@material-ui/core";
import { Search, Notify, SearchClose } from "../icons";

const SearchInput: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSearch = () => {
    console.log(value);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <SearchTextField
        style={{ marginRight: 13 }}
        value={value}
        onChange={handleChange}
        variant="outlined"
        size="small"
        placeholder="Поиск"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
          endAdornment: value.length !== 0 && (
            <InputAdornment position="end" onClick={() => setValue("")}>
              <SearchClose />
            </InputAdornment>
          ),
        }}
      />
      {value.length === 0 ? (
        <Notify count={1} />
      ) : (
        <p
          onClick={handleSearch}
          style={{
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "0.2px",
            color: "#FF5151",
          }}
        >
          Найти
        </p>
      )}
    </div>
  );
};

export default SearchInput;
