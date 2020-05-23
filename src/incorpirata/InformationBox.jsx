import React, { Component } from "react";

import { Box, Heading, Text, Card, Button } from "rebass";
import { Close } from "./custom-components/FormIcons";

class InformationBox extends Component {
  render() {
    const heading = this.props.heading;
    const body = this.props.body;
    const onClose = this.props.onClose;
    return (
      <Box
        sx={{
          position: "fixed",
          background: "rgba(246, 225, 205, 0.9)",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10
        }}
        onClick={e => {
          e.preventDefault();
          if (onClose instanceof Function) {
            onClose();
          }
        }}
      >
        <Card
          variant="styles.root"
          width={[3 / 4, 2 / 3, 1 / 2]}
          sx={{
            p: 1,
            position: "fixed",
            borderRadius: 16,
            background: "#FFEDE2",
            boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
            height: "auto",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 5
          }}
          my={2}
          p={30}
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Button
            variant="close"
            onClick={e => {
              e.preventDefault();
              if (onClose instanceof Function) {
                onClose();
              }
            }}
            my={-15}
            mx={-15}
            sx={{
              float: "right"
            }}
          >
            <Close strokeColor="#C48939" />
          </Button>
          <Heading as="h1" mb={2}>
            {heading}
          </Heading>
          <Text>{body}</Text>
        </Card>
      </Box>
    );
  }
}

export default InformationBox;
