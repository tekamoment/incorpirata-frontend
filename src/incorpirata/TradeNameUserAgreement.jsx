import React from "react";

import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";
import { useSelector } from "react-redux";

function TradeNameUserAgreement() {
  const tradeName = useSelector(state => state.companyInformation.tradeName);

  return (
    <Box>
      <Heading>User Agreement</Heading>
      <Text>
        When selecting a trade name, kindly ensure that the trade name will not
        have any similar-sounding names that is in the same industry as yours!{" "}
      </Text>
      <Text>
        You are confirming that your trade name, <b>{tradeName}</b>, is unique
        in your industry.
      </Text>
      <Text>
        Our pirates do not guarantee that the trade name will be safe from any
        copyright issued by other companies.{" "}
      </Text>
    </Box>
  );
}

export default TradeNameUserAgreement;
