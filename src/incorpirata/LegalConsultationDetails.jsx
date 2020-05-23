import React, { useState } from "react";
import { Box, Heading, Text, Flex } from "rebass";
import { Label, Radio } from "@rebass/forms";
import {
  FormLabel,
  FormTextArea,
  FormTextField
} from "./custom-components/FormComponents";

function LegalConsultationDetails(props) {
  const [consultationNeed, setConsultationNeed] = useState(false);

  const onConsultationNeedChange = e => {
    setConsultationNeed(e);
  };

  return (
    <Box variant="styles.root">
      <Heading variant="questionHeader">
        Would you want to consult our legal pirates on this matter?
      </Heading>
      <Text mb={20}>
        For multiple sources of revenue, it is best to have a broad business
        purpose as to avoid any issues with SEC, a consultation with our legal
        pirate will be most appropriate. Without consulting with our legal
        pirate, standard purposes will be applied. (*additional fees apply)
      </Text>

      <Label>
        <Radio
          name="consultNeed"
          id="true"
          value="true"
          checked={consultationNeed === true}
          onChange={() => onConsultationNeedChange(true)}
        />
        Yes, I want to consult
      </Label>
      <Label>
        <Radio
          name="consultNeed"
          id="false"
          value="false"
          checked={consultationNeed === false}
          onChange={() => onConsultationNeedChange(false)}
        />
        No, I don't need to consult
      </Label>
      {consultationNeed ? <SetAMeetingBox /> : null}
    </Box>
  );
}

function SetAMeetingBox(props) {
  return (
    <Box width={[1, 3 / 4, 2 / 3]}>
      <Heading variant="questionHeading">Set a meeting</Heading>
      <Box mb={20}>
        <FormLabel>Date Available</FormLabel>
        <Flex>
          <FormTextField placeholder="MM" />
          <FormTextField placeholder="DD" />
          <FormTextField placeholder="YYYY" />
        </Flex>
      </Box>
      <Box mb={20}>
        <FormLabel>Time Available</FormLabel>
        <Flex>
          <FormTextField placeholder="00:00" />
          <Text mx={10}>to</Text>
          <FormTextField placeholder="00:00" />
        </Flex>
      </Box>
      <Box mb={20}>
        <FormLabel>Concern</FormLabel>
        <FormTextArea />
      </Box>
    </Box>
  );
}

export default LegalConsultationDetails;
