import React from "react";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import SearchIcon from "@mui/icons-material/Search";
import { AutocompleteChangeReason } from "@mui/material/Autocomplete";

export interface SearchValueData {
  id: string;
  label: string;
  type: string;
}

const filter = createFilterOptions<SearchValueData>();

const LandingPageSearchBar = () => {
  //router containing the current search value
  const [currentSearchValue, setCurrentSearchValue] = useState<SearchValueData>(
    { label: "", id: "", type: "" }
  );

  const router = useRouter();

  //Handles clicking the search button + clicking the prepopulated options
  const handleAutoCompleteSearch = (
    event: React.SyntheticEvent<Element, Event>,
    value: string | SearchValueData | null,
    reason: AutocompleteChangeReason
  ) => {
    console.log(value);
    console.log(reason);

    //Handles Cases of when user selects current location and, in the future, when user selects a prepopulated city
    //TODO: Add Prepopulated cities
    if (reason === "selectOption") {
      //will handle location permissions
      if (typeof value !== "string" && value?.type === "getCurrentLocation") {
        setCurrentSearchValue({
          label: "Current Location",
          id: "getCurrentLocation",
          type: "getCurrentLocation",
        });
        navigator.permissions.query({ name: "geolocation" });
        navigator.geolocation.getCurrentPosition((test) => {
          console.log("Location - Lat", test.coords.latitude);
          console.log("Location - Lat", test.coords.longitude);
        });
      }
    }

    //Handles clicking the search button with a custom entry
    else if (reason === "clear") {
      console.log(currentSearchValue);
    }
  };

  //sets the current search value to the entered text if it was typed
  const handleAutoCompleteSearchChange = (event: any) => {
    event.preventDefault();
    setCurrentSearchValue({
      type: "customSearch",
      id: "customSearch",
      label: event.target.value,
    });
  };

  const tempValues = [
    {
      label: "TESTlabel1",
      id: "TESTid1",
      type: "TESTtype1",
    },
    {
      label: "TESTlabel2",
      id: "TESTid2",
      type: "TESTtype2",
    },
    {
      label: "TESTlabel3",
      id: "TESTid3",
      type: "TESTtype3",
    },
  ];

  return (
    <div className="grow pl-2">
      <Autocomplete
        className="font-mono"
        id="free-solo-demo"
        freeSolo
        inputValue={currentSearchValue.label}
        value={currentSearchValue}
        options={tempValues}
        onChange={handleAutoCompleteSearch}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.label
        }
        filterOptions={(options, params) => {
          //TODO: Fix this when adding custom cities
          const filtered = filter(options, params);
          filtered.unshift({
            label: "Current Location",
            id: "getCurrentLocation",
            type: "getCurrentLocation",
          });

          return filtered;
        }}
        renderInput={(params) => {
          const myNewParams = {
            ...params,
            InputProps: {
              ...params.InputProps,
              className: "MuiAutocomplete-inputRoot RENDERINPUTTEST font-mono",
            },
            inputProps: {
              ...params.inputProps,
              className: "font-mono MuiAutocomplete-input MuiAutocomplete-inputFocused MuiAutocomplete-inputRoot RENDERINPUTTESTinput ",
            },
          };
          console.log(myNewParams);

          return (
            <TextField
              {...myNewParams}
              onChange={handleAutoCompleteSearchChange}
              placeholder="Zip, Address, City"
              className="TEXTFIELDTEST"
            />
          );
        }}
        clearText="Search"
        clearIcon={
          <SearchIcon className="cursor-pointer font-mono SEARCHICONTEST" />
        }
        slotProps={{
          clearIndicator: {
            className:
              "bg-white hover:text-green-200 font-mono CLEARINDICATORTEST",
          },
          paper: {
            className: "bg-white font-mono PAPERTEST",
          },
          popper: {
            className: "bg-white font-mono POPPERTEST",
          },
          popupIndicator: {
            className: "bg-white font-mono POPPERINDICATORTEST",
          },
        }}
      />
    </div>
  );
};

export default LandingPageSearchBar;
