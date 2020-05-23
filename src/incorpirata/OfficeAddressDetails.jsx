import React, { Fragment } from "react";

import { Box, Heading, Text } from "rebass";
import { Label, Radio, Select } from "@rebass/forms";
import AddressDetailComponent from "./AddressDetailComponent";
import InformationBox from "./InformationBox";
import InformationButton from "./InformationButton";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FormLabel, FormSelect } from "./custom-components/FormComponents";

import "./App.css";
import FileUploadButton from "./FileUploadButton";

function OfficeAddressDetails() {
  const officeLocation = useSelector(state => state.officeLocation);
  console.log(officeLocation);

  const [addressNeeded, setAddressNeeded] = useState(
    !officeLocation.hasOwnAddress
  );
  // const [boxVisible, setBoxVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  const addressNeedSelected = e => {
    console.log(e.target.value);
    setAddressNeeded(JSON.parse(e.target.value));
  };

  const informationButtonClick = buttonId => {
    setButtonVisible(!buttonVisible);
  };

  const addressTypes = [
    {
      key: "homeAddress",
      label: "Home"
    },
    {
      key: "officeAddress",
      label: "Office"
    },
    {
      key: "virtualAddress",
      label: "Virtual"
    }
  ];

  const virtualOfficeLocations = [
    {
      key: "legazpi",
      label: "Legazpi"
    },
    {
      key: "rockwell",
      label: "Rockwell"
    },
    {
      key: "salcedo",
      label: "Salcedo"
    }
  ];

  const supplementaryComponentToShow = () => {
    if (addressNeeded === true) {
      return (
        <ChooseVirtualAddressSubQuestion
          locations={virtualOfficeLocations}
          selected=""
          onChange={e => {
            console.log(e.target.value);
          }}
        />
      );
    } else if (addressNeeded === false) {
      return (
        <Fragment>
          <br />
          <AddressSubQuestion
            addressTypes={addressTypes}
            addressType={officeLocation.addressType}
          />
          <br />
          <OfficeAddressDetailEntry
            addressDefaultValues={officeLocation.officeAddress}
          />
        </Fragment>
      );
    } else {
      return null;
    }
  };

  // setAddressNeeded(officeLocation.hasOwnAddress);

  return (
    <Box variant="styles.root">
      <Box mb={20}>
        <Heading as="h1" mb={1}>
          Do you need an address?
        </Heading>
        <FormLabel>
          <Radio
            name="addressNeed"
            id="false"
            value="false"
            onClick={addressNeedSelected}
            checked={addressNeeded === false}
          />
          I have my own address
        </FormLabel>
        <FormLabel>
          <Radio
            name="addressNeed"
            id="true"
            value="true"
            onClick={addressNeedSelected}
            checked={addressNeeded === true}
          />
          Add-on: I need a virtual address
          <InformationButton id="button" onClick={informationButtonClick} />
        </FormLabel>
      </Box>
      {buttonVisible ? (
        <InformationBox
          heading={"What's a virtual address?"}
          body={
            " If you're still in the middle of deciding where to hold office or would be moving around a lot, having a virtual office might be the most cost-efficient (to avoid any changes/amendment to your registration) This allows you to operate already like a corporation without having the need to invest in the monthly rent of a commercial lease."
          }
          onClose={() => {
            setButtonVisible(false);
          }}
        />
      ) : null}

      {supplementaryComponentToShow()}
    </Box>
  );
}

function AddressSubQuestion(props) {
  return (
    <Box>
      <FormLabel htmlFor="addressType">Address Type</FormLabel>
      <FormSelect
        id="addressType"
        name="addressType"
        defaultValue={props.addressType}
      >
        {Object.entries(props.addressTypes).map(([key, entry]) => (
          <option key={key}>{entry.label}</option>
        ))}
      </FormSelect>
    </Box>
  );
}

function OfficeAddressDetailEntry({ addressDefaultValues }) {
  return (
    <Box>
      <Heading as="h1" mb={1}>
        Address information
      </Heading>
      <Text>Please enter your address information.</Text>
      <AddressDetailComponent defaultValues={addressDefaultValues} />
      <Text>
        To help prove your office location, please upload your lease contract.
      </Text>

      <FileUploadButton buttonId="uploadLease" buttonLabel="Upload Lease" />
    </Box>
  );
}

function ChooseVirtualAddressSubQuestion(props) {
  return (
    <Box variant="styles.root">
      <Heading as="h1" mb={1}>
        Virtual Address
      </Heading>
      <Text>
        Our pirates have partnered up with Acceler8 by UNIONSpace, these are our
        preferential rates for fellow pirates.
      </Text>
      {props.locations.map(location => {
        return (
          <FormLabel key={location.key}>
            <Radio
              name={location.key}
              id={location.key}
              value={location.key}
              onChange={props.onChange}
              checked={props.selected === location.key}
            />
            {location.label}
          </FormLabel>
        );
      })}
    </Box>
  );
}

export default OfficeAddressDetails;
