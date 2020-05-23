import React, { Component, useState } from "react";

import { Box, Heading, Text } from "rebass";
import { Input } from "@rebass/forms";
import { FormLabel, FormSelect } from "./custom-components/FormComponents";
import InformationBox from "./InformationBox";
import InformationButton from "./InformationButton";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

function CorpNameDetails() {
  const registrationType = useSelector(state => state.registrationType);
  const nameSuggestions = useSelector(
    state => state.companyInformation.nameSuggestions
  );

  const [informationButtonClicked, setInformationButtonClicked] = useState(
    false
  );
  const dispatch = useDispatch();

  const changeCallback = event => {
    dispatch({
      type: "SET_CORPORATION_NAME"
    });
  };

  const suggestionsRequired = 3;
  const nameSuffixes = {
    onePersonCorporation: [
      {
        key: "OPC",
        label: "OPC"
      }
    ],
    corporation: [
      {
        key: "corporation",
        label: "Corporation"
      },
      {
        key: "corp",
        label: "Corp."
      },
      {
        key: "incorporated",
        label: "Incorporated"
      },
      {
        key: "inc",
        label: "Inc."
      },
      {
        key: "CORPORATION",
        label: "CORPORATION"
      },
      {
        key: "CORP",
        label: "CORP."
      },
      {
        key: "INCORPORATED",
        label: "INCORPORATED"
      },
      {
        key: "INC",
        label: "INC."
      }
    ]
  };

  const informationButtonClick = () => {
    setInformationButtonClicked(!informationButtonClicked);
  };

  const generateSuggestions = numberOfSuggestions => {
    let suggestions = [];
    console.log({ registrationType: registrationType });
    let suffixes = nameSuffixes[registrationType];
    console.log({ suffixes: suffixes });
    for (let i = 0; i < numberOfSuggestions; i++) {
      suggestions.push(
        <CorpNameSuggestion
          key={i}
          ordinal={i + 1}
          corporationName={nameSuggestions[i].name}
          suffix={nameSuggestions[i].suffix}
          suffixChoices={suffixes}
          my={20}
        />
      );
    }
    return suggestions;
  };

  return (
    <Box variant="styles.root" width={[1, 3 / 4, 1 / 2]}>
      <Heading variant="questionHeading">
        What do you want to call your corporation?
      </Heading>
      <Text>
        You must fill out three suggestions.{" "}
        <InformationButton id="button" onClick={informationButtonClick} />
      </Text>
      {informationButtonClicked ? (
        <InformationBox
          heading="Why three?"
          body="This is to ensure that there your company name is unique. Our pirates will be on the look out for any similar names and will alert you the soonest."
        />
      ) : null}
      {generateSuggestions(suggestionsRequired)}
    </Box>
  );
}

class CorpNameSuggestion extends Component {
  render() {
    let suffixDropdown = null;
    if (
      this.props.suffixChoices !== null &&
      this.props.suffixChoices !== undefined
    ) {
      suffixDropdown = (
        <Box>
          <FormLabel htmlFor="suffix">Suffix</FormLabel>
          <FormSelect
            id="suffix"
            name="suffix"
            defaultValue={this.props.suffix}
          >
            {Object.entries(this.props.suffixChoices).map(([key, entry]) => (
              <option key={key}>{entry.label}</option>
            ))}
          </FormSelect>
        </Box>
      );
    }

    return (
      <Box
        variant="styles.root"
        sx={{
          display: "grid",
          gridGap: 2,
          gridTemplateColumns: "48px repeat(auto-fit, minmax(128px, 1fr))"
        }}
        my={10}
        bg="clear"
      >
        <Box>
          <Heading>{this.props.ordinal}</Heading>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridGap: 2,
            gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))"
          }}
        >
          <Box>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              width={1}
              sx={{
                background: "#FFEDE2",
                border: "1px solid #000000",
                borderRadius: "0px 15px",
                color: "#C48939",
                "::placeholder": {
                  color: "#C48939"
                }
              }}
              defaultValue={this.props.corporationName}
            />
          </Box>
          {suffixDropdown}
        </Box>
      </Box>
    );
  }
}

export default CorpNameDetails;
