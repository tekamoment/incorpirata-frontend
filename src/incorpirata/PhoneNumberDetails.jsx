import React from "react";

import { Box, Heading } from "rebass";
import { FormTextField, FormLabel } from "./custom-components/FormComponents";

import { useDispatch, useSelector } from "react-redux";

function PhoneNumberDetails(props) {
  const phone = useSelector(state => state.contactNumbers[props.phoneType]);
  const dispatch = useDispatch();

  const changeCallback = e => {
    console.log(e.target.value);
    dispatch({
      type: "SET_PHONE_NUMBER",
      phoneType: props.phoneType,
      value: e.target.value
    });
  };

  return (
    <Box variant="styles.root">
      <Heading variant="questionHeading">{props.heading}</Heading>
      <FormLabel>{props.phoneType.toUpperCase()}</FormLabel>
      <FormTextField
        id={props.phoneType}
        name={props.phoneType}
        value={phone}
        onChange={changeCallback}
        type="tel"
      />
    </Box>
  );
}

export default PhoneNumberDetails;
