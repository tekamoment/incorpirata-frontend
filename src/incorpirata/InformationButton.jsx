import React from "react";

import { Box } from "rebass";

function InformationButton(props) {
  const onMarkClick = event => {
    event.preventDefault();
    props.onClick(props.id);
  };

  return (
    <Box
      variant="styles.root"
      sx={{
        display: "inline-block",
        color: "black",
        bg: "rgba(0,0,0,0)",
        borderWidth: 2,
        borderColor: "black",
        borderStyle: "solid",
        width: 25,
        height: 25,
        borderRadius: 9999,
        textAlign: "center",
        fontWeight: 600
      }}
      my={-0}
      mx={2}
      onClick={onMarkClick}
    >
      ?
    </Box>
  );
}

export default InformationButton;
