import React, { useState } from "react";

import { Box, Heading, Text } from "rebass";
import { FormTextField } from "./custom-components/FormComponents";

import InformationBox from "./InformationBox";
import InformationButton from "./InformationButton";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

function TradeNameDetails() {
  const [boxVisible, setBoxVisible] = useState(false);
  const tradeName = useSelector(state => state.companyInformation.tradeName);
  const dispatch = useDispatch();

  const changeCallback = event => {
    dispatch({
      type: "SET_TRADE_NAME",
      value: event.target.value
    });
  };

  const informationButtonClick = () => {
    setBoxVisible(!boxVisible);
  };

  return (
    <Box variant="styles.root">
      <Heading as="h1" mb={1}>
        Trade name
      </Heading>
      <Text>
        By what name will your company be known by the public?{" "}
        <InformationButton id="button" onClick={informationButtonClick} />
      </Text>
      {boxVisible ? (
        <InformationBox
          heading={"What's a trade name?"}
          body={
            "For example, McDonaldâs is the trade name of the Golden Arches Development Corporation. Our partner company UpSmart, UpSmart Strategy Consulting, Inc. is the company name, and UpSmart is the trade name!"
          }
        />
      ) : null}
      <FormTextField defaultValue={tradeName} onChange={changeCallback} />
    </Box>
  );
}

export default TradeNameDetails;
