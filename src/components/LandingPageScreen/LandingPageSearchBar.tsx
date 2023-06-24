import React from "react";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";

import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { AutocompleteChangeReason } from "@mui/material/Autocomplete";
import {
  AutocompleteHighlightChangeReason,
  AutocompleteCloseReason,
} from "@mui/base";
import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TriviaVenueService from "@/services/TriviaVenueService";

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

//todo - Do we really want to care about highlighting an option?

const LandingPageSearchBar = () => {
  //router containing the current search value
  const [currentSearchValue, setCurrentSearchValue] = useState<SearchValueData>(
    { label: "", id: "", type: "" }
  );

  const currentlyHighlightedOption = {
    selected: false,
    value: { label: "", id: "", type: "" },
  };

  const router = useRouter();

  //Handles clicking the search button + clicking the prepopulated options
  const handleAutoCompleteSearch = async (
    event: React.SyntheticEvent<Element, Event>,
    value: string | SearchValueData | null,
    reason: AutocompleteChangeReason
  ) => {
    console.log("handleAutoCompleteSearch");
    console.log("event", event);
    console.log("value:", value);
    console.log("Reason:", reason);
    //Handles Cases of when user selects current location and, in the future, when user selects a prepopulated city
    //TODO: Add Prepopulated cities
    //TODO: Fix this mess
    if (reason === "selectOption" ) {
      //will handle location permissions
      if (
        typeof value !== "string" &&
        value?.type === "currentLocationSearch"
      ) {
        //TODO, FIGURE THIS LOGIC OUT
        await navigator.permissions.query({ name: "geolocation" });
        const test = navigator.geolocation.getCurrentPosition((test) => {
          console.log("handleAutocmoeplteSEarch: getCurrentLocation");
          console.log("Location - Lat", test.coords.latitude);
          console.log("Location - Lat", test.coords.longitude);
        });
        handleSearchSubmit({
          label: value.label,
          id: value.id,
          type: value.type,
        });
        //toDo: handle this special case
        // const myResponse = await TriviaVenueService.getTriviaVenuesByLocation({
        //   searchParam: "",
        //   searchParamType: "currentLocationSearch",
        //   distanceLimit: 500,
        // });

        // console.log(myResponse);
      } else if (
        typeof value !== "string" &&
        value?.type === "cityStateSearch"
      ) {
        handleSearchSubmit({
          label: value.label,
          id: value.id,
          type: value.type,
        });
        // const myResponse = await TriviaVenueService.getTriviaVenuesByLocation({
        //   searchParam: value.label,
        //   searchParamType: value.type,
        //   distanceLimit: 500,
        // });
      }
    }

    //Handles clicking the search button with a custom entry
    else if (reason === "clear") {
      if (!currentlyHighlightedOption.selected) {
        handleSearchSubmit(currentSearchValue);
      } else {
        handleSearchSubmit(currentlyHighlightedOption.value);
      }
    }
  };

  //sets the current search value to the entered text if it was typed
  const handleTextBoxValueChange = async (event: any) => {
    event.preventDefault();
    setCurrentSearchValue({
      type: "customSearch",
      id: "customSearch",
      label: event.target.value,
    });
  };

  const handleOnClose = async (
    event: React.SyntheticEvent<Element, Event>,
    reason: AutocompleteCloseReason
  ) => {
    if (reason !== "selectOption") {
      currentlyHighlightedOption.selected = false;
    }
  };

  const handleHighlightChange = async (
    event: React.SyntheticEvent<Element, Event>,
    value: string | SearchValueData | null,
    reason: AutocompleteHighlightChangeReason
  ) => {
    if (value && typeof value !== "string") {
      currentlyHighlightedOption.selected = true;
      currentlyHighlightedOption.value = {
        label: value.label,
        id: value.id,
        type: value.type,
      };
    } else {
      currentlyHighlightedOption.selected = false;
    }
  };

  //TODO: Determine if search is based on

  const handleSearchSubmit = async (searchValue: SearchValueData) => {
    //For Zipcodes/cities we push the value to a query value in the url
    //do we generic-fy the city/zipcode value ie 300005=> johns creek or johns creek => 30005
    //Both require some sort of api
    //Do we allow them to set a mileage range?

    //for specific addresses, we will create/provide a link based on zip code/city, but in the state variables, we will (cont.)
    //store the specific address so users get the most accurate information without providing their address when sharing the link?
    //so we will need to have an override state variable and shit when using a specific address within the 'cache' instnace of the serach

    //TODO: Figure out if we should allow custom City, States ==> should these values show up in the AutoComplete?
    //TODO: Figure out this logic / Should it go on the back end??
    //ZipCode (use Regex)
    //City use (WORD(s)[Johns Creek], STATE_2_LETTER_CODE or WORD(s), WORD(s) SOUTH_DAKOTA) OR (Automatically provided cities based on IP Addresses)
    //Anything Else is Address (USE Google API????)
    console.log("handleCustomSearchSubmit:");
    console.log(searchValue.label);
    const zipCodeRegex = "^[0-9]{5}(?:-[0-9]{4})?$";
    const foundZipCode = searchValue.label.match(zipCodeRegex);

    //TODO - create a query parameter for city state and add this to the query data
    const searchType = foundZipCode ? "zipCodeSearch" : searchValue.type;

    //TODO: Implement this
    // const cityStateRegex = "/([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/";
    // const foundCityState = searchValue.label.match(cityStateRegex);
    // if (foundCityState) {
    //   console.log("found city State");
    // }

    //TODO - create a query parameter for city state and add this to the query data
    const myResponse = await TriviaVenueService.getTriviaVenuesByLocation({
      distanceLimit: 500,
      searchParam: searchValue.label,
      searchParamType: searchType,
    });

    console.log("myResponse", myResponse);
  };

  const tempValues = [
    {
      label: "TESTlabel1",
      id: "TESTid1",
      type: "cityStateSearch",
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
          className="font-mono"
          id="free-solo-demo"
          freeSolo
          openOnFocus
          includeInputInList
          blurOnSelect
          inputValue={currentSearchValue.label}
          value={currentSearchValue}
          options={tempValues}
          onChange={handleAutoCompleteSearch}
          onClose={handleOnClose}
          onHighlightChange={handleHighlightChange}
          getOptionLabel={(option) =>
            typeof option === "string" ? option : option.label
          }
          filterOptions={(options, params) => {
            //TODO: Fix this when adding custom cities
            const filtered = filter(options, params);
            filtered.unshift({
              label: "Current Location",
              id: "getCurrentLocation",
              type: "currentLocationSearch",
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
            console.log("renderInput:");
            console.log(myNewParams);

            return (
              <TextField
                {...myNewParams}
                onChange={handleTextBoxValueChange}
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
            if (
              !currentlyHighlightedOption.selected &&
              event?.key === "Enter"
            ) {
              handleSearchSubmit(currentSearchValue);
            }
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default LandingPageSearchBar;
