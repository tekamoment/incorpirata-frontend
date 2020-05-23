import React, { Component } from "react";
import { Box, Heading, Text, Image } from "rebass";

class SectionHeader extends Component {
  renderHeading() {
    if (this.props.headings) {
      return this.props.headings.map(heading => {
        return (
          <Heading textAlign="left" key={heading} my={2}>
            {heading}
          </Heading>
        );
      });
    } else {
      return <Heading textAlign="left">{this.props.heading}</Heading>;
    }
    // return this.props.headings.map()
  }

  render() {
    const hasText = this.props.text || null;
    const hasPhoto = this.props.photoURL || null;

    let textElement;
    if (hasText) {
      textElement = (
        <Text textAlign="left" my={2}>
          {this.props.text}
        </Text>
      );
    }

    let photoElement;
    if (hasPhoto) {
      photoElement = <Image src={this.props.photoURL} />;
    }

    return (
      <Box
        variant="styles.root"
        sx={{
          display: "grid",
          justifyItems: "left",
          alignItems: "left",
          gridGap: "10%",
          gridTemplateRows: "auto",
          gridAutoFlow: "row dense",
          top: 0,
          bottom: 0,
          minHeight: "100%"
        }}
      >
        {photoElement}
        <Box>
          {this.renderHeading()}
          {textElement}
        </Box>
      </Box>
    );
  }
}

export default SectionHeader;
