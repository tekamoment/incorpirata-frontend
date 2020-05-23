import { Label, Input, Textarea, Select } from "@rebass/forms";
import React from "react";

const FormLabel = props => (
  <Label
    {...props}
    sx={{
      fontWeight: 700
    }}
  />
);

const FormTextField = props => (
  <Input
    {...props}
    // width={[1, 1 / 2, 1 / 3]}
    sx={{
      background: "#FFEDE2",
      border: "1px solid #000000",
      borderRadius: "0px 15px",
      color: "#C48939",
      "::placeholder": {
        color: "#C48939"
      }
    }}
  />
);

const FormTextArea = props => (
  <Textarea
    {...props}
    sx={{
      borderRadius: "0px 15px"
    }}
  />
);

const FormSelect = props => (
  <Select
    {...props}
    sx={{
      background: "#FFEDE2",
      border: "1px solid #000000",
      borderRadius: "0px 15px",
      color: "#C48939",
      "::placeholder": {
        color: "#C48939"
      }
    }}
  />
);

export { FormTextField, FormLabel, FormTextArea, FormSelect };
