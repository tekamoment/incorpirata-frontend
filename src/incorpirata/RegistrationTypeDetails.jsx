import React, { Component, useState } from "react";

import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";
import { Label, Input, Textarea, Radio } from "@rebass/forms";
import InformationButton from "./InformationButton";

import useForm from "./useForm";

import { useSelector, useDispatch } from "react-redux";
import InformationBox from "./InformationBox";

function RegistrationTypeDetails(props) {
  const registrationType = useSelector(state => state.registrationType);
  const dispatch = useDispatch();

  const [openInformationBoxes, setOpenInformationBoxes] = useState({
    soleProprietorship: false,
    onePersonCorporation: false,
    corporation: false
  });

  function changeCallback(e) {
    console.log(e.target.value);
    dispatch({
      type: "SET_REGISTRATION_TYPE",
      value: e.target.value
    });
  }

  function submitCallback() {
    console.log(values);
  }

  const { values, handleChange, handleSubmit } = useForm(
    props.handleChange,
    submitCallback
  );

  const informationButtonClick = registrationType => {
    let newState = { ...openInformationBoxes };
    newState[registrationType] = !newState[registrationType];
    setOpenInformationBoxes(newState);
  };

  const registrationTypes = [
    {
      value: "soleProprietorship",
      label: "Sole Proprietorship",
      infoBoxHeading: "Sole proprietorship",
      infoBoxBody:
        "A sole proprietorship is applied through the Department of Trade and Industry (DTI) and would need less requirements compared to a corporation. The sole proprietor however, has unlimited responsibility (to the extent of personal assets) to cover all liabilities that the business will have."
    },
    {
      value: "onePersonCorporation",
      label: "One Person Corporation",
      infoBoxHeading: "One person corporation",
      infoBoxBody:
        "As of late, the minimum number of incorporators has been reduced to one person, hence, the name. This however, comes with a bit more requirements than your regular stock corporation."
    },
    {
      value: "corporation",
      label: "Corporation",
      infoBoxHeading: "Stock corporation",
      infoBoxBody:
        "Registered with the Securities and Exchange Commission (SEC), a corporation generally has a limited liability only up until the assets of the company. This is usually what we recommend to our entrepreneurs."
    }
  ];

  return (
    <Box variant="styles.root">
      <Heading variant="questionHeading">What kind of registration?</Heading>
      <Text mb={20}>*if you are unsure, contact a pirate today!</Text>
      {registrationTypes.map(regType => {
        return (
          <div key={regType.value}>
            <Label>
              <Radio
                name="registrationType"
                id={regType.value}
                value={regType.value}
                onChange={changeCallback}
                checked={registrationType === regType.value}
              />
              {regType.label}
              <InformationButton
                id={`${regType.value}button`}
                onClick={() => informationButtonClick(regType.value)}
              />
            </Label>
            {openInformationBoxes[regType.value] === true ? (
              <InformationBox
                heading={regType.infoBoxHeading}
                body={regType.infoBoxBody}
              />
            ) : null}
          </div>
        );
      })}
      {/* <Label>
        <Radio
          name="registrationType"
          id="soleProprietorship"
          value="soleProprietorship"
          onChange={changeCallback}
          checked={registrationType === "soleProprietorship"}
        />
        Sole Proprietorship
        <InformationButton
          id="button"
          onClick={informationButtonClick("soleProprietorship")}
        />
        {openInformationBoxes.soleProprietorship ? (
          <InformationBox heading={"Sole proprietorship"} />
        ) : null}
      </Label>
      <Label>
        <Radio
          name="registrationType"
          id="onePersonCorporation"
          value="onePersonCorporation"
          onChange={changeCallback}
          checked={registrationType === "onePersonCorporation"}
        />
        One Person Corporation
        <InformationButton
          id="button"
          onClick={informationButtonClick("opc")}
        />
      </Label>
      <Label>
        <Radio
          name="registrationType"
          id="corporation"
          value="corporation"
          onChange={changeCallback}
          checked={registrationType === "corporation"}
        />
        Corporation
        <InformationButton
          id="button"
          onClick={informationButtonClick("corp")}
        />
      </Label> */}
    </Box>
  );
}

export default RegistrationTypeDetails;
