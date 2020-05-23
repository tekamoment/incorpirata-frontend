import React from "react";
import { Box, Heading } from "rebass";
import { Label, Radio } from "@rebass/forms";

function CSSNeedDetails(props) {
  return (
    <Box variant="styles.root">
      <Heading variant="questionHeading">
        Do you want us to support your corporate secretary in preparing the
        minutes?
      </Heading>
      <Label>
        <Radio name="cssNeed" id="true" value="true" />
        Yes
      </Label>
      <Label>
        <Radio name="cssNeed" id="false" value="false" />
        No
      </Label>
    </Box>
  );
}

export default CSSNeedDetails;
