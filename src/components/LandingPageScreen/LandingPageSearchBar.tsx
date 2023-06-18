import React from "react";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { AutocompleteChangeReason } from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export interface SearchValueData {
  id: string;
  label: string;
  type: string;
}

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
          color: "rgba(250, 250, 249, 0.863)",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(250, 250, 249, 0.863)",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
          backgroundColor: "rgba(250, 250, 249, 0.863)",
        },
        inputRoot: {
          fieldset: {
            borderColor: "rgba(250, 250, 249, 0.863)",
          },
          "&:hover fieldset": {
            borderColor: "rgba(250, 250, 249, 0.863)",
          },
          "&.Mui-focused fieldset": {
            borderColor: "rgba(250, 250, 249, 0.863)",
          },
        },
      },
    },
  },
});

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
    console.log('handleAutoCompleteSearch')

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
          console.log('handleAutocmoeplteSEarch: getCurrentLocation')
          console.log("Location - Lat", test.coords.latitude);
          console.log("Location - Lat", test.coords.longitude);
        });
      }
    }

    //Handles clicking the search button with a custom entry
    else if (reason === "clear") {
      //TODO: Call Custom Search Function
      handleCustomSearchSubmit(currentSearchValue);
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

    //TODO: Determine if search is based on
    const handleCustomSearchSubmit = (searchValue: SearchValueData) => {
      //TODO: Figure out if we should allow custom City, States ==> should these values show up in the AutoComplete?
      //TODO: Figure out this logic / Should it go on the back end??
      //ZipCode (use Regex)
      //City use (WORD(s)[Johns Creek], STATE_2_LETTER_CODE or WORD(s), WORD(s) SOUTH_DAKOTA) OR (Automatically provided cities based on IP Addresses)
      //Anything Else is Address (USE Google API????)
      console.log('handleCustomSearchSubmit:')
      console.log(searchValue.label);
      const zipCodeRegex = "^[0-9]{5}(?:-[0-9]{4})?$";
      const foundZipCode = searchValue.label.match(zipCodeRegex)
      
      if (foundZipCode){
        console.log('found zipcode')
        //TODO: Return here???
      }
      const cityStateRegex = "/([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/";
      const foundCityState = searchValue.label.match(cityStateRegex);
      if(foundCityState){
        console.log('hheheheh')
      }
      
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
      <ThemeProvider theme={theme}>
        <Autocomplete
          autoSelect
          className="font-mono"
          id="free-solo-demo"
          freeSolo
          openOnFocus
          selectOnFocus
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
                className: "MuiAutocomplete-inputRoot RENDERINPUTTEST",
              },
              inputProps: {
                ...params.inputProps,
                className:
                  "MuiAutocomplete-input MuiAutocomplete-inputFocused MuiAutocomplete-inputRoot hover:border-green-200 RENDERINPUTTESTinput ",
              },
            };
            console.log('renderInput:')
            console.log(myNewParams);

            return (
              <TextField
                {...myNewParams}
                onChange={handleAutoCompleteSearchChange}
                placeholder="Zip, Address, City"
                className="TEXTFIELDTEST text-fuchsia-900"
                variant="outlined"
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
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              // Prevent's default 'Enter' behavior.
              event.preventDefault();
              //TODO: Call Custom Search Function
              handleCustomSearchSubmit(currentSearchValue);
              // your handler code
            }
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default LandingPageSearchBar;
