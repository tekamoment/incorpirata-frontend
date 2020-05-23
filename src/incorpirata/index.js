/* eslint no-unused-vars: 0 */
import Hook from "./custom-components/IncorpirataHook";
import React, { useState } from "react";
import preset from "@rebass/preset";
import { ThemeProvider } from "emotion-theming";
// import { FullPage, Slide } from "react-full-page";
import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";
import IncorpirataTheme from "./IncorpirataTheme";
// OR use 'rebass/styled-components'

import MainForm from "./MainForm";

import { createStore } from "redux";
import { Provider } from "react-redux";
import Background from "./img/grid-background.png";

import SteppedProgressBar from "./custom-components/SteppedProgressBar";

const initialState = {
  step: 0,
  name: {
    lastName: "Oppenheimer",
    firstName: "John",
    middleName: "Marcus",
    suffix: ""
  },
  contactNumbers: {
    mobile: "+639999999999",
    landline: "+639999999999"
  },
  registrationType: "onePersonCorporation",
  companyInformation: {
    nameSuggestions: [
      { name: "Trial Name", suffix: "Company" },
      { name: "Sample Name", suffix: "Incorporated" },
      { name: "Obvious Name", suffix: "Corporated" }
    ],
    tradeName: "Trial Trade Name",
    businessPurpose: "",
    requiresLegalConsultation: false
  },
  officeLocation: {
    hasOwnAddress: true,
    addressType: "",
    officeAddress: {
      region: "",
      province: "",
      townCity: "",
      barangay: "",
      street: "",
      postalCode: ""
    }
  },
  knowsHowToAllocateShares: "false",
  overallCapitalAndShares: {
    estimatedMonthlyRental: 0,
    estimatedMonthlyPayroll: 0,
    expectedInitialCashOutlay: 0,
    conservative3YearNetIncome: 0,
    paidUpCapital: 1000000,
    valuePerShare: 1,
    subscribedShares: 1000000,
    authorizedShares: 0
  },
  relatedPersons: [
    {
      id: "19s9f29",
      name: {
        lastName: "Maquiling",
        firstName: "Maria",
        middleName: "Marianara",
        suffix: ""
      },
      birthdate: "1990-01-15",
      nationality: "Filipino",
      tinNo: "1030303030",
      address: {
        region: "",
        province: "",
        townCity: "",
        barangay: "",
        street: "",
        postalCode: ""
      },
      incorporator: true
    },
    {
      id: "19s9f30",
      name: {
        lastName: "Dela Cruz",
        firstName: "Juan",
        middleName: "Rambolos",
        suffix: ""
      },
      birthdate: "1996-10-12",
      nationality: "Filipino",
      tinNo: "1030303030",
      address: {
        region: "",
        province: "",
        townCity: "",
        barangay: "",
        street: "",
        postalCode: ""
      },
      incorporator: true
    }
  ],
  allocations: [
    {
      id: "19s9f29",
      subscribedShares: 0,
      subscribedCapital: 0,
      paidUpAmount: 0,
      percentageOfOwnership: 0
    },
    {
      id: "19s9f30",
      subscribedShares: 0,
      subscribedCapital: 0,
      paidUpAmount: 0,
      percentageOfOwnership: 0
    }
  ],
  board: {
    members: ["19s9f30", "19s9f29"],
    meetingDate: "12-30",
    chairman: "19s9f30",
    treasurer: "19s9f29"
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.value
      };
    case "SET_PHONE_NUMBER":
      let contactNumbers = { ...state.contactNumbers };
      contactNumbers[action.phoneType] = action.value;
      return {
        ...state,
        contactNumbers: contactNumbers
      };
    case "SET_REGISTRATION_TYPE":
      // there should be something to flush out old suffix values
      return {
        ...state,
        registrationType: action.value
      };
    case "SET_CORPORATION_NAME":
      let compInfor = { ...state.companyInformation };
      compInfor.nameSuggestions = action.value;
      return {
        ...state,
        companyInformation: compInfor
      };
    case "SET_TRADE_NAME":
      let companyInformation = { ...state.companyInformation };
      companyInformation.tradeName = action.value;
      return {
        ...state,
        companyInformation: companyInformation
      };
    case "SET_BUSINESS_PURPOSE":
      let compInfo = { ...state.companyInformation };
      compInfo.businessPurpose = action.value;
      return {
        ...state,
        companyInformation: compInfo
      };
    case "SET_ALLOCATION_KNOWLEDGE":
      return {
        ...state,
        knowsHowToAllocateShares: action.value
      };
    case "SET_BOARD_MEMBERS":
      let board = { ...state.board };
      board.members = action.value;
      return {
        ...state,
        board: board
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = props => {
  const [isSectionHeader, setIsSectionHeader] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [progressBarSteps, setProgressBarSteps] = useState([
    {
      label: "Personal Information",
      isActive: true
    },
    {
      label: "Business Information",
      isActive: false
    },
    {
      label: "Office Location",
      isActive: false
    },
    {
      label: "Business Purpose",
      isActive: false
    },
    {
      label: "Capital Allocation",
      isActive: false
    },
    {
      label: "Corporate Shareholders",
      isActive: false
    },
    {
      label: "Corporate Information",
      isActive: false
    },
    {
      label: "Summary",
      isActive: false
    }
  ]);

  const pageChanged = (isSH, sectionIndex) => {
    if (isSectionHeader !== isSH || activeSection !== sectionIndex) {
      setProgressBarSteps(
        progressBarSteps.map((step, idx) => {
          return {
            ...step,
            isActive: idx === sectionIndex
          };
        })
      );
      setIsSectionHeader(isSH);
      setActiveSection(sectionIndex);
    }
  };

  return (
    <ThemeProvider theme={IncorpirataTheme}>
      <Provider store={store}>
        <Box
          px={40}
          py={50}
          sx={{
            background: isSectionHeader ? "#FFDD9A" : "#FFEDE2",
            position: "fixed",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: -2,
            "::after": {
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              content: '""',
              backgroundImage: `url(${Background})`,
              opacity: 0.3,
              zIndex: -1
            }
          }}
        >
          <Flex
            variant="styles.root"
            mx={-2}
            py={40}
            alignItems="center"
            sx={{
              overflow: "hidden",
              position: "fixed",
              top: 0,
              width: "100%",
              zIndex: 10
            }}
          >
            <Button mr={20}>
              <Hook fillColor={isSectionHeader ? "#FFDD9A" : "#FFEDE2"} />
            </Button>
            <SteppedProgressBar
              steps={progressBarSteps}
              backgroundColor={isSectionHeader ? "#FFDD9A" : "#FFEDE2"}
              lineColor={isSectionHeader ? "#EDB469" : "#FFDD9A"}
              labelIndex={activeSection}
            />
          </Flex>
          <MainForm onPageChange={pageChanged} />
        </Box>
      </Provider>
    </ThemeProvider>
  );
};

// render(<App />, root); // eslint-disable-line no-undef
export default App;
