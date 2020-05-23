import React, { useState, Fragment, useEffect } from "react";
import { Edit, Plus } from "./custom-components/FormIcons";
import { Box, Heading, Button, Flex } from "rebass";
// import { Label, Select, Input, Textarea } from "@rebass/forms";
import {
  FormLabel,
  FormTextField,
  FormSelect
} from "./custom-components/FormComponents";
// import AddressDetailComponent from "./AddressDetailComponent";
import IncorporatorAddressDetails from "./custom-components/IncorporatorAddressDetails";

function IncorporatorList(props) {
  const [activePersonId, setActivePersonId] = useState("");

  const selectedPersonChange = e => {
    setActivePersonId(e);
  };

  return (
    <Fragment>
      <PersonList
        persons={props.persons}
        activePersonId={activePersonId}
        onClick={selectedPersonChange}
      />
      <Flex>
        <Button mr={20} height="60px" width="60px" bg="black">
          <Plus strokeColor={"#FFDD9A"} />
        </Button>
        {activePersonId === "" ? (
          <Button mr={20} height="60px" width="60px" bg="#C4C4C4">
            <Edit strokeColor={"#E5E5E5"} />
          </Button>
        ) : (
          <Button
            mr={20}
            height="60px"
            width="60px"
            bg="black"
            onClick={() => props.editClicked(activePersonId)}
          >
            <Edit strokeColor={"#FFDD9A"} />
          </Button>
        )}
      </Flex>
    </Fragment>
  );
}

function IncorporatorDetails(props) {
  const [activePersonId, setActivePersonId] = useState(props.persons[0].id);
  const [activePerson, setActivePerson] = useState(props.persons[0]);
  const [showEditFields, setShowEditFields] = useState(false);

  const onEditPersonClicked = id => {
    console.log({ clicked: id });
    setActivePersonId(id);
    setActivePerson(props.persons.filter(person => person.id === id)[0]);
    setShowEditFields(true);
  };

  return (
    <Fragment>
      {showEditFields ? (
        <PersonInformationForm person={activePerson} />
      ) : (
        <IncorporatorList
          persons={props.persons}
          editClicked={onEditPersonClicked}
        />
      )}
    </Fragment>
  );
}

function PersonList({ persons, activePersonId, onClick }) {
  const constructName = name => {
    return `${name.lastName}, ${name.firstName}`;
  };

  return (
    <Box>
      {persons.map(person => {
        return (
          <Box
            mb="20px"
            variant={
              person.id === activePersonId ? "activePerson" : "defaultPerson"
            }
            key={person.id}
            value={person.id}
            onClick={() => onClick(person.id)}
          >
            <FormLabel mt="18px" mb="14px" ml="15px">
              {constructName(person.name)}
            </FormLabel>
          </Box>
        );
      })}
    </Box>
  );
}

function PersonInformationForm({ person }) {
  // console.log({ setPerson: person });
  const [personDetails, setPersonDetails] = useState(person);
  // setPersonDetails(person);
  useEffect(() => {
    setPersonDetails(person);
  }, [person]);

  const genderOptions = [
    {
      key: "male",
      label: "Male"
    },
    {
      key: "female",
      label: "Female"
    }
  ];

  return (
    <Box key={personDetails.id}>
      <Heading variant="questionHeading">Basic Information</Heading>
      <FormLabel htmlFor="fullName">Name</FormLabel>
      <FormLabel htmlFor="birthday">Birthday</FormLabel>
      <FormTextField
        type="text"
        name="birthday"
        placeholder="YYYY-MM-DD"
        required
        pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
        title="Enter a date in this format YYYY-MM-DD"
        defaultValue={personDetails.birthdate}
      />
      <FormLabel htmlFor="nationality">Nationality</FormLabel>
      <FormSelect
        id="nationality"
        name="nationality"
        defaultValue={personDetails.nationality}
      >
        {[
          { key: "Filipino", label: "Filipino" },
          { key: "Non-Filipino", label: "Non-Filipino" }
        ].map(option => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </FormSelect>
      <FormLabel htmlFor="gender">Gender</FormLabel>
      <FormSelect id="gender" name="gender" defaultValue={personDetails.gender}>
        {genderOptions.map(option => (
          <option key={option.key} value={option.key}>
            {option.label}
          </option>
        ))}
      </FormSelect>
      <FormLabel htmlFor="tin">Taxpayer Idenfitication Number</FormLabel>
      <FormTextField
        type="text"
        name="tin"
        placeholder="xxx-xxx-xxx-xxxx"
        required
        pattern="(?:19|20)\[0-9\]{2}-(?:(?:0\[1-9\]|1\[0-2\])-(?:0\[1-9\]|1\[0-9\]|2\[0-9\])|(?:(?!02)(?:0\[1-9\]|1\[0-2\])-(?:30))|(?:(?:0\[13578\]|1\[02\])-31))"
        title="Enter a TIN in this format xxx-xxx-xxx-xxxx"
        defaultValue={personDetails.tin}
      />

      <Box mt={25}>
        <Heading mb={15}>Address</Heading>
        {/* <AddressDetailComponent defaultValues={personDetails.address} /> */}
        <IncorporatorAddressDetails defaultValues={personDetails.address} />
      </Box>
    </Box>
  );
}

export default IncorporatorDetails;
