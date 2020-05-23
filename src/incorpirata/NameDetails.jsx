import React from "react";

import { Box, Heading } from "rebass";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import onKeyDown from "./FormKeyDownHandler";
import { FormTextField, FormLabel } from "./custom-components/FormComponents";

function NameDetails() {
  const name = useSelector(state => state.name);
  const dispatch = useDispatch();

  function changeCallback(e) {
    // console.log(name);
    // console.log(e.target.name);
    // console.log(e.target.value);
    const key = e.target.name;
    let value = {
      ...name
    };
    value[key] = e.target.value;
    // console.log(value);

    dispatch({
      type: "SET_NAME",
      value: value
    });
  }

  const { register, handleSubmit, errors } = useForm({
    mode: "onChange"
  });

  return (
    <Box variant="styles.root" onKeyDown={e => onKeyDown(e)}>
      <Heading as="h1" mb={1} variant="questionHeading">
        To start, what is your legal name?
      </Heading>
      <NameDetailComponent
        nameDetails={name}
        handleChange={changeCallback}
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        // changeHandler={changeCallback}
      />
    </Box>
  );
}

function NameDetailComponent(props) {
  const [nameDetails, setNameDetails] = React.useState(props.nameDetails);
  const register = props.register;
  const errors = props.errors;
  const handleSubmit = props.handleSubmit;

  return (
    <Box>
      <FormLabel htmlFor="lastName">Last Name</FormLabel>
      <FormTextField
        id="lastName"
        name="lastName"
        type="text"
        placeholder="Dela Cruz"
        defaultValue={nameDetails.lastName}
        onChange={props.handleChange}
        mb={3}
        // ref={register({ required: true })}
      />
      {errors.lastName && <p>This is required</p>}
      <FormLabel htmlFor="firstName" variant="formLabel">
        First Name
      </FormLabel>
      <FormTextField
        id="firstName"
        name="firstName"
        type="text"
        placeholder="Juan"
        defaultValue={nameDetails.firstName}
        onChange={props.handleChange}
        mb={3}
        // ref={register({ required: true })}
      />
      {errors.firstName && <p>This is required</p>}
      <FormLabel htmlFor="middleName">Middle Name</FormLabel>
      <FormTextField
        id="middleName"
        name="middleName"
        type="text"
        placeholder="Milagros"
        defaultValue={nameDetails.middleName}
        onChange={props.handleChange}
        mb={3}
        // ref={register({ required: true })}
      />
      {errors.middleName && <p>This is required</p>}
      <FormLabel htmlFor="suffix">Suffix</FormLabel>
      <FormTextField
        id="suffix"
        name="suffix"
        type="text"
        placeholder="Jr."
        defaultValue={nameDetails.suffix}
        onChange={props.handleChange}
        // ref={register({ required: false })}
      />
    </Box>
  );
}

export default NameDetails;
