import React, { Fragment } from "react";
import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";

function CapitalStructureDetails() {
  const definitions = [
    {
      heading: "Authorized Capital",
      body: "Total number of shares in peso value"
    },
    {
      heading: "Value per Share (par value)",
      body: "Peso value for each share"
    },
    {
      heading: "Number of authorized shares",
      body: `Default if left blank is 1,000,000 shares
      In general, authorized capital divided by value per share`
    },
    {
      heading: "Subscribed Shares",
      body: `This will be the initial number of shares that shareholders promise to buy.
      The logic behind this is that you need not to use up all your shares at the start of the life of your business as this gives you the flexibility to acquire more shares in the future (for investors and the like)`
    },
    {
      heading: "Paid-Up Capital",
      body: `This is the Initial amount of money that the business can officially use to operate with.`
    }
  ];

  return (
    <Box variant="styles.root" width={[1, 2 / 3, 1 / 2]}>
      <Heading as="h1" mb={4}>
        Here are a couple of terms that you would need to familiarize yourself
        with!
      </Heading>
      {definitions.map(def => (
        <Fragment>
          <TermDefinition heading={def.heading} body={def.body} />
        </Fragment>
      ))}
      <Text mb={4}>
        To answer this section, we suggest the bottom-top approach, starting
        with your paid-up capital
      </Text>

      <Text mb={4}>
        A conservative estimation of the company's first 3-6 months of
        operational expenses as the paid-up capital that is driven by two major
        factors, monthly rental and payroll expenses.{" "}
      </Text>
    </Box>
  );
}

function TermDefinition(props) {
  return (
    <Box mb={4}>
      <Heading as="h2">{props.heading}</Heading>
      <Text>
        {props.body.split("\n").map((line, i, lines) => {
          return (
            <Fragment key={i}>
              {`- ${line}`}
              {i !== lines.length - 1 && <br />}
            </Fragment>
          );
        })}
      </Text>
    </Box>
  );
}

export default CapitalStructureDetails;
