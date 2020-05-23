import React, { useState } from "react";
import { Box, Heading, Text, Card } from "rebass";
import { Label, Radio } from "@rebass/forms";

function SelectableBox(props) {
  const processOnClick = event => {
    props.onBoxClick(props.id);
  };
  return (
    <Card
      onClick={e => processOnClick(e)}
      bg={props.selected ? "rgba(155,155,155,255)" : "white"}
      sx={{
        border: "5px solid black",
        borderRadius: 4
      }}
      mx="auto"
    >
      <Heading textAlign="center" fontSize={[3, 4]}>
        {props.label}
      </Heading>
    </Card>
  );
}

function KeyPositionHolderSelection(props) {
  const [members, setMembers] = useState(props.members);

  const onBoxClick = id => {
    // setMembers(
    //   members.map(member => {
    //     return {
    //       ...member,
    //       selected: id === member.id ? true : false
    //     };
    //   })
    // );
    let retVal = {};
    retVal[props.key] = id;
    props.onChange(retVal);
  };

  const boxesForMembers = members => {
    return members.map(member => {
      return (
        <SelectableBox
          id={member.id}
          key={member.id}
          label={member.name}
          selected={member.id === props.selectedId}
          onBoxClick={onBoxClick}
        />
      );
    });
  };

  const radioButtonsForMembers = members => {
    return members.map(member => {
      return (
        <Label>
          <Radio
            id={member.id}
            name={member.id}
            value={member.id}
            checked={member.id === props.selectedId}
          />
          {member.name}
        </Label>
      );
    });
  };

  return (
    <Box variant="styles.root">
      <Heading>Who will be the {props.positionName} of your company?</Heading>
      <Text>{props.body}</Text>
      <Box
        sx={{
          display: "grid",
          gridGap: 3,
          gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))"
        }}
      >
        {radioButtonsForMembers(props.members)}
      </Box>
    </Box>
  );
}

export default KeyPositionHolderSelection;
