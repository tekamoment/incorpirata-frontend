import React from "react";
import { Box, Heading, Text } from "rebass";
import { Label } from "@rebass/forms";
import { FormTextArea } from "./custom-components/FormComponents";
import FileUploadButton from "./FileUploadButton";

import { useDispatch, useSelector } from "react-redux";

function BusinessKindDetails(props) {
  const companyInformation = useSelector(state => state.companyInformation);
  const dispatch = useDispatch();

  const changeCallback = e => {
    dispatch({
      type: "SET_BUSINESS_PURPOSE",
      value: e.target.value
    });
  };

  return (
    <Box variant="styles.root" width={[1, 3 / 4, 1 / 2]}>
      <Heading variant="questionHeading">
        What kind of business will {companyInformation.tradeName} be engaged in?
      </Heading>
      <Text my={20}>
        Explain in 2-3 sentences what the business will be doing and where the
        majority (At least 50%) of the business' revenues will be coming from.
        Our pirates will be needing as much information as possible to ensure
        that your business will be registered with the appropriate purpose of
        business so that the SEC will not raise any red flags.
      </Text>
      <FormTextArea
        defaultValue={companyInformation.businessPurpose}
        onChange={changeCallback}
      />
      <Label my={20}>
        Upload introductory deck/business plan if available!
      </Label>
      <FileUploadButton
        buttonId="uploadBusinessPlan"
        buttonLabel="Upload Business Plan"
      />
    </Box>
  );
}

export default BusinessKindDetails;
