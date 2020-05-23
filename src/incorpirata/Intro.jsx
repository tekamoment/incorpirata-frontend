import React, { Component } from "react";

import { Box, Heading, Text } from "rebass";

class Intro extends Component {
  render() {
    return (
      <Box variant="styles.root" width={[1, 2 / 3, 1 / 2]}>
        <Heading
          as="h1"
          mb={1}
          sx={{
            fontSize: [6, 7],
            lineHeight: ["50px", "75px"]
          }}
        >
          Aye!
        </Heading>
        <Heading as="h1" mb={4}>
          Welcome to Incorpirata!
        </Heading>
        <Text mb={4}>
          Our pirates will help you navigate your ship to find the lost
          treasure. Don't fret if you ever get intimidated by the unchartered
          waters of the business world, our pirates will guide you throughout
          each step of the way.
        </Text>
        <Text mb={4}>
          Instead of making you fill out a long-form filled with dense legalese,
          we'll be asking you straightforward questions about the information
          you need to register your company.
        </Text>
        <Text mb={4}>
          Once you finish creating your account, you'll be able to stop and come
          back to this application as you wish.
        </Text>
      </Box>
    );
  }
}

export default Intro;
