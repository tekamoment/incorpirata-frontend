import React from "react";

import { Box, Heading, Text, Button } from "rebass";
import { useSelector } from "react-redux";

function ApplicationSummary() {
  const completedApplication = useSelector(state => state);

  const concatenateAddress = addressObject => {
    return `${addressObject.street}, ${addressObject.barangay}, ${
      addressObject.townCity
    }, ${addressObject.province}, ${addressObject.region}, ${
      addressObject.postalCode
    }`;
  };

  const constructName = nameObject => {
    return `${nameObject.lastName}, ${nameObject.firstName}`;
  };

  const constructBoardOfDirectors = () => {
    const boardIds = completedApplication.board.members;
    const boardMembers = completedApplication.relatedPersons.filter(person => {
      return boardIds.includes(person.id);
    });
    return boardMembers.map(person => constructName(person.name)).join("\n");
  };

  return (
    <Box>
      <Box>
        <Heading>Name</Heading>
        <Text>{constructName(completedApplication.name)}</Text>
      </Box>
      <Box>
        <Heading>Landline</Heading>
        <Text>{completedApplication.contactNumbers.landline}</Text>
        <Heading>Mobile</Heading>
        <Text>{completedApplication.contactNumbers.mobile}</Text>
      </Box>
      <hr />
      <Box>
        <Heading>Registration Type</Heading>
        <Text>{completedApplication.registrationType}</Text>
      </Box>
      <Box>
        <Heading>Company Name</Heading>
        <Text>{completedApplication.registrationType}</Text>
      </Box>
      <Box>
        <Heading>Trade Name</Heading>
        <Text>{completedApplication.companyInformation.tradeName}</Text>
      </Box>
      <Box>
        <Heading>Office Location</Heading>
        <Text>
          {concatenateAddress(
            completedApplication.officeLocation.officeAddress
          )}
        </Text>
      </Box>
      <Box>
        <Heading>BUSINESS DESCRIPTION</Heading>
        <Text>{completedApplication.companyInformation.businessPurpose}</Text>
      </Box>
      <Box>
        <Heading>LEGAL CONSULTATION?</Heading>
        <Text>
          {completedApplication.companyInformation.requiresLegalConsultation
            ? "YES"
            : "NO"}
        </Text>
      </Box>
      <hr />
      <Box>
        <Heading>ESTIMATED MONTHLY RENTAL</Heading>
        <Text>
          {completedApplication.overallCapitalAndShares.estimatedMonthlyRental}
        </Text>
      </Box>
      <Box>
        <Heading>ESTIMATED MONTHLY PAYROLL</Heading>
        <Text>
          {completedApplication.overallCapitalAndShares.estimatedMonthlyPayroll}
        </Text>
      </Box>
      <Box>
        <Heading>PAID-UP CAPITAL</Heading>
        <Text>
          {completedApplication.overallCapitalAndShares.paidUpCapital}
        </Text>
      </Box>
      <Box>
        <Heading>VALUE PER SHARE</Heading>
        <Text>
          {completedApplication.overallCapitalAndShares.valuePerShare}
        </Text>
      </Box>
      <Box>
        <Heading>SUBSCRIBED SHARES</Heading>
        <Text>
          {completedApplication.overallCapitalAndShares.subscribedShares}
        </Text>
      </Box>
      <Box>
        <Heading>AUTHORIZED SHARES</Heading>
        <Text>
          {completedApplication.overallCapitalAndShares.authorizedShares}
        </Text>
      </Box>
      <Box>
        <Heading>AUTHORIZED CAPITAL</Heading>
        <Text>
          {completedApplication.overallCapitalAndShares.authorizedCapital}
        </Text>
      </Box>
      <hr />
      <Box>
        <Heading>BOARD OF DIRECTORS</Heading>
        <Text>{constructBoardOfDirectors()}</Text>
      </Box>
      <Box>
        <Heading>ANNUAL BOARD MEETING</Heading>
        <Text>{completedApplication.board.meetingDate}</Text>
      </Box>
      <hr />
      <Heading>DISCLAIMER:</Heading>
      <Heading>
        THERE CAN BE POTENTIAL CHANGES DEPENDING ON THE REVIEW OF DESIGNATED SEC
        PROCESSOR
      </Heading>
    </Box>
  );
}

export default ApplicationSummary;
