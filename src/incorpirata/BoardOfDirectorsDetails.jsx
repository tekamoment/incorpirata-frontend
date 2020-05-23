import React, { useState } from "react";
import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";
import { Label, Input, Checkbox } from "@rebass/forms";

import { useSelector, useDispatch } from "react-redux";

function BoardOfDirectors(props) {
  const relatedPersons = useSelector(state => state.relatedPersons);
  const boardPersonIds = useSelector(state => state.board.members);
  const [selectedPersons, setSelectedPersons] = useState(boardPersonIds);
  const dispatch = useDispatch();

  const boardMembers = () => {
    return relatedPersons.map(person => {
      return {
        id: person.id,
        name: `${person.name.lastName}, ${person.name.firstName}`
      };
    });
  };

  const processChange = e => {
    const targetId = e.target.id;
    let currentSelectedPersons = selectedPersons.filter(
      person => person !== targetId
    );
    if (e.target.checked) {
      currentSelectedPersons = [...currentSelectedPersons, targetId];
    }

    setSelectedPersons(currentSelectedPersons);

    dispatch({
      type: "SET_BOARD_MEMBERS",
      value: currentSelectedPersons
    });
  };

  const createCheckboxes = (persons, memberIDs) => {
    const checkboxSize = [30];
    return persons.map(member => {
      return (
        <Box>
          <Flex alignItems="center">
            <Label fontSize={3} mb={2}>
              <Checkbox
                key={member.id}
                id={member.id}
                name={member.id}
                height={checkboxSize}
                width={checkboxSize}
                defaultChecked={memberIDs.includes(member.id)}
                onChange={processChange}
                sx={{
                  flex: "none"
                }}
              />
              {member.name}
            </Label>
          </Flex>
        </Box>
      );
    });
  };

  return (
    <Box variant="styles.root">
      <Heading variant="questionHeading">
        Who will compose the Board of Directors?
      </Heading>
      {createCheckboxes(boardMembers(), boardPersonIds)}
    </Box>
  );
}

export default BoardOfDirectors;
