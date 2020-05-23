import React, { useState } from "react";

import { Box } from "rebass";
import { Label, Input } from "@rebass/forms";

function CurrencyField(props) {
  const shouldShowPlaceholder = () => {
    return (
      !isEditing &&
      props.placeholder !== undefined &&
      (props.value === 0 || props.value === null)
    );
  };
  const [isEditing, setIsEditing] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(
    shouldShowPlaceholder()
  );

  const onChange = e => {
    props.onChange(e.target.value);
  };

  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP"
  });

  const toCurrency = number => {
    return currencyFormatter.format(number);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    if (showPlaceholder) {
      setShowPlaceholder(false);
    } else {
      setShowPlaceholder(shouldShowPlaceholder());
    }
  };

  return (
    <Box>
      <Label htmlFor={props.fieldId}>{props.fieldLabel}</Label>
      {showPlaceholder ? (
        <Input
          id={props.fieldId}
          placeholder={toCurrency(props.placeholder)}
          type="number"
          onFocus={toggleEditing}
          readOnly
        />
      ) : isEditing ? (
        <Input
          id={props.fieldId}
          value={props.value}
          type="number"
          onChange={onChange}
          onBlur={toggleEditing}
        />
      ) : (
        <Input
          id={props.fieldId}
          value={toCurrency(props.value)}
          type="text"
          onFocus={toggleEditing}
          readOnly
        />
      )}
    </Box>
  );
}

export default CurrencyField;
