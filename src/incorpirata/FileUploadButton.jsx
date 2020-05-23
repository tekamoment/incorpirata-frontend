import React, { Fragment } from "react";

import { Box, Heading, Text, Button } from "rebass";
import { Label, Radio, Select } from "@rebass/forms";

import "./App.css";

function FileUploadButton(props) {
  return (
    <Fragment>
      <Button variant="outline" mr={2}>
        <label htmlFor={props.buttonId}>{props.buttonLabel}</label>
      </Button>
      <input
        type="file"
        name={props.buttonId}
        id={props.buttonId}
        className="inputfile"
      />
    </Fragment>
  );
}

export default FileUploadButton;
