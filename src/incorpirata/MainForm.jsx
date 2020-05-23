import React, { Component } from "react";
import { Box, Flex, Button } from "rebass";

import { connect } from "react-redux";

import NameDetails from "./NameDetails";
import Intro from "./Intro";
import CorpNameDetails from "./CorpNames";
import RegistrationTypeDetails from "./RegistrationTypeDetails";
import TradeNameDetails from "./TradeNameDetails";
import OfficeAddressDetails from "./OfficeAddressDetails";
import CapitalDetails from "./CapitalDetails";
import PhoneNumberDetails from "./PhoneNumberDetails";
import BusinessKindDetails from "./BusinessKindDetails";
import BoardOfDirectors from "./BoardOfDirectorsDetails";
import KeyPositionHolderSelection from "./KeyPositionHolderSelection";
import SectionHeader from "./SectionHeader";
import CSSNeedDetails from "./CSSNeedDetails";
import AllocationKnowledgeDetails from "./AllocationKnowledgeDetails";
import TradeNameUserAgreement from "./TradeNameUserAgreement";
import ApplicationSummary from "./ApplicationSummary";
import CapitalStructureDetails from "./CapitalStructureDetails";
import IncorporatorDetails from "./IncorporatorDetails";
import LegalConsultationDetails from "./LegalConsultationDetails";
import AllocationDetails from "./AllocationDetails";
import BoardMeetingDate from "./BoardMeetingDate";

class MainForm extends Component {
  state = {
    step: 0,
    currentSection: 0,
    // name: "TEST NAME",
    contactNumbers: {
      mobile: "+639999999999",
      landline: "+639999999999"
    },
    registrationType: "onePersonCompany",
    companyInformation: {
      nameSuggestions: [
        { name: "Trial Name", suffix: "Company" },
        { name: "Sample Name", suffix: "Incorporated" },
        { name: "Obvious Name", suffix: "Corporated" }
      ],
      tradeName: "Trial Trade Name"
    },
    officeLocation: {
      hasOwnAddress: true
    },
    overallCapitalAndShares: {
      estimatedMonthlyRental: "",
      estimatedMonthlyPayroll: "",
      paidUpCapital: "",
      valuePerShare: "",
      subscribedShares: "",
      authorizedShares: ""
    }
  };

  relatedPersons = [
    {
      id: "19s9f29",
      name: {
        lastName: "Maquiling",
        firstName: "Maria",
        middleName: "Marianara",
        suffix: ""
      },
      gender: "female",
      birthdate: "1990-01-15",
      nationality: "Filipino",
      tinNo: "1030303030",
      address: {
        region: "NCR",
        province: "",
        townCity: "Quezon City",
        barangay: "Loyola Heights",
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
      gender: "male",
      birthdate: "1996-10-12",
      nationality: "Filipino",
      tinNo: "1030303030",
      address: {
        region: "Central Visayas",
        province: "Cebu",
        townCity: "Cebu City",
        barangay: "",
        street: "",
        postalCode: ""
      },
      incorporator: true
    }
  ];

  manualAllocation = true;
  sampleCapitalAndShareDetails = {
    subscribedShares: 1000000,
    subscribedCapital: 1000000,
    paidUpAmount: 1000000,
    valuePerShare: 1
  };

  allocations = [
    {
      id: "19s9f29",
      name: {
        lastName: "Maquiling",
        firstName: "Maria",
        middleName: "Marianara",
        suffix: ""
      },
      subscribedShares: 0,
      subscribedCapital: 0,
      paidUpAmount: 0,
      percentageOfOwnership: 0
    },
    {
      id: "19s9f30",
      name: {
        lastName: "Dela Cruz",
        firstName: "Juan",
        middleName: "Rambolos",
        suffix: ""
      },
      subscribedShares: 0,
      subscribedCapital: 0,
      paidUpAmount: 0,
      percentageOfOwnership: 0
    }
  ];

  handleModChange = input => event => {
    console.log("input: " + input);
    console.log("value: " + event.target.value);
    this.setState({ [input]: event.target.value });
  };

  handleOldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleChange = obj => {
    console.log(obj);
    this.setState({ ...obj });
    console.log(this.state);
  };

  firstName = () => {
    return `${this.props.name.firstName}`;
  };

  innerMembers = [
    {
      id: "28348x83j",
      name: "Maria Makiling",
      selected: false
    },
    {
      id: "3jdj3jxjx",
      name: "Juan Dela Cruz",
      selected: false
    }
  ];

  formElements = [
    <Intro />,
    <NameDetails />,
    <PhoneNumberDetails
      heading={`Nice to meet you, ${this.firstName()}! How can we contact you by mobile phone?`}
      phoneType="mobile"
      // phoneNumber={this.state.contactNumbers.mobile}
    />,
    <PhoneNumberDetails
      heading={`Thank you, ${this.firstName()}! How about by landline?`}
      phoneType="landline"
      // phoneNumber={this.state.contactNumbers.landline}
    />,
    <SectionHeader
      headings={[
        `Thank you very much, ${this.firstName()}!`,
        `Tell us about the corporation you're setting up.`
      ]}
    />,
    <RegistrationTypeDetails registrationType={this.state.registrationType} />,
    <CorpNameDetails />,
    <TradeNameDetails />,
    <TradeNameUserAgreement />,
    <SectionHeader heading="Office Location" />,
    <OfficeAddressDetails />,
    <SectionHeader
      heading="Business Purpose"
      text="The business purpose should be aligned to the regular operations of your business. For multiple sources of revenue, it is best to have a broad business purpose as to avoid any technicalities with the SEC."
    />,
    <BusinessKindDetails tradeName={this.state.tradeName} />,
    <LegalConsultationDetails />,
    // Remove entire capital structure section if OPC or sole prop
    <SectionHeader
      heading="Capital Structure"
      text="Who owns what and all other money matters"
    />,
    <CapitalStructureDetails />,
    <CapitalDetails />,
    <SectionHeader
      heading="Shareholders"
      text={`Thanks for telling us about ${
        this.state.tradeName
      }, ${this.firstName()}! Next, tell us about who will your incorporators to start the company. `}
    />,
    <IncorporatorDetails persons={this.relatedPersons} />,
    <AllocationKnowledgeDetails />,
    <AllocationDetails
      manualAllocation={this.manualAllocation}
      capitalAndShareDetails={this.sampleCapitalAndShareDetails}
      incorporators={this.allocations}
    />,
    <SectionHeader
      headings={[
        "Sounds like you have a great crew on board!",
        "Next, tell us about how you'll be structuring your company, and what official titles these people will have."
      ]}
    />,
    <BoardOfDirectors />,
    <BoardMeetingDate />,
    <KeyPositionHolderSelection
      positionName="Chairman"
      members={[...this.innerMembers]}
      selectedId=""
      key="Chairman"
      onChange=""
    />,
    <KeyPositionHolderSelection
      positionName="Treasurer"
      members={[...this.innerMembers]}
      selectedId=""
      key="Treasurer"
      onChange=""
    />,
    <KeyPositionHolderSelection
      positionName="Secretary"
      body="Having a Corporate Secretary is a legal requirement of the SEC. He/she is the official record keeper of the board of directors. Any decisions by the board must be officiated by the corporate secretary and approved only via a secretary's certificate."
      members={[...this.innerMembers]}
      key="Secretary"
    />,
    <CSSNeedDetails />,
    <SectionHeader heading="Please Confirm Information" />,
    <ApplicationSummary />
  ];

  nextStep = () => {
    const { step } = this.state;
    // this.setState({
    //   step: step < this.formElements.length - 1 ? step + 1 : step
    // });
    this.updateCurrentSection(
      step < this.formElements.length - 1 ? step + 1 : step
    );
  };

  prevStep = () => {
    const { step } = this.state;
    // this.setState({
    //   step: step !== 0 ? step - 1 : 0
    // });
    this.updateCurrentSection(step !== 0 ? step - 1 : 0);
  };

  updateCurrentSection = currentStepIndex => {
    const currentSection = this.state.currentSection;
    const currentStep = this.formElements[currentStepIndex] || <Intro />;

    const headerTypes = new Set([SectionHeader, Intro]);

    let newState = {
      step: currentStepIndex
    };

    if (headerTypes.has(currentStep.type)) {
      const headers = this.formElements
        .filter(el => headerTypes.has(el.type))
        .indexOf(currentStep);
      console.log({ currentSection: headers });
      if (currentSection !== headers) {
        newState = { ...newState, currentSection: headers };
      }
    }

    this.setState(newState, () => {
      this.props.onPageChange(
        headerTypes.has(currentStep.type),
        this.state.currentSection
      );
    });
  };

  displayFormElement() {
    const step = this.state.step;
    const currentStep = this.formElements[step] || <Intro />;

    return currentStep;
  }

  render() {
    return (
      <Box
        mt={50}
        variant="styles.root"
        sx={{ top: 0, bottom: 0, height: "100%" }}
      >
        <Box
          pb={50}
          sx={{
            overflow: "scroll"
          }}
        >
          {this.displayFormElement()}
        </Box>
        <Flex
          mx={-2}
          px={2}
          color="white"
          bg="transparent"
          alignItems="center"
          sx={{
            overflow: "hidden",
            position: "fixed",
            bottom: 40,
            width: "100%",
            zIndex: 7
          }}
        >
          <Button
            variant="primary"
            px={30}
            marginRight={20}
            onClick={e => {
              e.preventDefault();
              this.prevStep();
            }}
          >
            Back
          </Button>
          <Button
            variant="primary"
            px={30}
            onClick={e => {
              e.preventDefault();
              this.nextStep();
            }}
          >
            Next
          </Button>
        </Flex>
      </Box>
    );
  }
}

// export default MainForm;
export default connect(state => state)(MainForm);
