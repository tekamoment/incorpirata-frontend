import React from "react";
import { Box, Heading } from "rebass";
import { Label, Radio } from "@rebass/forms";

import { useDispatch, useSelector } from "react-redux";

function AllocationKnowledgeDetails() {
  const knowsHowToAllocate = useSelector(
    state => state.knowsHowToAllocateShares
  );
  console.log(knowsHowToAllocate);

  const dispatch = useDispatch();

  const changeCallback = e => {
    dispatch({
      type: "SET_ALLOCATION_KNOWLEDGE",
      value: e.target.value
    });
  };

  return (
    <Box variant="styles.root">
      <Heading variant="questionHeading">
        How do you want to allocate your company's shares?
      </Heading>
      <Label>
        <Radio
          name="allocationKnow"
          id="false"
          value="false"
          checked={knowsHowToAllocate === "false"}
          onClick={changeCallback}
        />
        Automatically allocate equally
      </Label>
      <Label>
        <Radio
          name="allocationKnow"
          id="true"
          value="true"
          checked={knowsHowToAllocate === "true"}
          onClick={changeCallback}
        />
        Allocate manually
      </Label>
    </Box>
  );
}

export default AllocationKnowledgeDetails;
