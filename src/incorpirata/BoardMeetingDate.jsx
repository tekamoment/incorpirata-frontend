import React, { useState } from "react";
import { Box, Heading } from "rebass";
// import { Label, Input, Textarea } from "@rebass/forms";
// import { Select } from "@rebass/forms";
import { Flex } from "rebass";
import { FormLabel, FormSelect } from "./custom-components/FormComponents";

function BoardMeetingDate(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ].map((month, idx) => {
    return {
      key: idx + 1,
      label: month
    };
  });

  const daysForMonth = month => {
    let dayArray = [];
    switch (month) {
      case 4:
      case 6:
      case 9:
      case 11:
        dayArray = [...Array(30).keys()];
        break;
      case 2:
        dayArray = [...Array(28).keys()];
        break;
      default:
        dayArray = [...Array(31).keys()];
        break;
    }
    return dayArray.map(day => day + 1);
  };

  const onMonthSelect = month => {
    setDaysAvailable(daysForMonth(month));
  };

  const [daysAvailable, setDaysAvailable] = useState(
    daysForMonth(props.month ?? 6)
  );
  // const months = [...Array(12).keys()].map(month => month + 1);

  return (
    <Box variant="styles.root">
      <Heading variant="questionHeading">
        When is your annual board meeting date?
      </Heading>
      <Box width={1 / 2}>
        <FormLabel htmlFor="month">Month</FormLabel>
        <FormSelect
          id="month"
          name="month"
          onChange={e => onMonthSelect(e.key)}
          defaultValue={props.month ?? 6}
        >
          {months.map(({ key, label }) => (
            <option key={key}>{label}</option>
          ))}
        </FormSelect>
      </Box>
      <Box width={1 / 2}>
        <FormLabel htmlFor="day">Day</FormLabel>
        <FormSelect
          id="day"
          name="day"
          placeholder="DD"
          defaultValue={props.day ?? 30}
        >
          {daysAvailable.length > 0
            ? daysAvailable.map(day => <option key={day}>{day}</option>)
            : null}
        </FormSelect>
      </Box>
      {/* </Flex> */}
    </Box>
  );
}

export default BoardMeetingDate;
