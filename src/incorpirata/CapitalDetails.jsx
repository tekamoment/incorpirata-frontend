import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Box } from "rebass";
import { Label, Input } from "@rebass/forms";
// import ValueFieldSlider from "./ValueFieldSlider";
import CurrencyField from "./CurrencyField";
import { FormLabel, FormTextField } from "./custom-components/FormComponents";

function OldCapitalDetails() {
  const overallCapitalAndShares = useSelector(
    state => state.overallCapitalAndShares
  );

  const [estimatedMonthlyRental, setEstimatedMonthlyRental] = useState(
    overallCapitalAndShares.estimatedMonthlyRental
  );
  const [estimatedMonthlyPayroll, setEstimatedMonthlyPayroll] = useState(
    overallCapitalAndShares.estimatedMonthlyPayroll
  );
  const [expectedInitialCashOutlay, setExpectedInitialCashOutlay] = useState(
    overallCapitalAndShares.expectedInitialCashOutlay
  );

  const [conservative3YearNetIncome, setConservative3YearNetIncome] = useState(
    overallCapitalAndShares.conservative3YearNetIncome
  );
  const [paidUpCapital, setPaidUpCapital] = useState(
    overallCapitalAndShares.paidUpCapital
  );
  const [valuePerShare, setValuePerShare] = useState(
    overallCapitalAndShares.valuePerShare
  );
  const [subscribedShares, setSubscribedShares] = useState(
    overallCapitalAndShares.subscribedShares
  );
  const [authorizedShares, setAuthorizedShares] = useState(
    overallCapitalAndShares.authorizedShares
  );

  const [recommendedPaidUpCapital, setRecommendedPaidUpCapital] = useState(
    overallCapitalAndShares.estimatedMonthlyRental *
      6 *
      (overallCapitalAndShares.estimatedMonthlyPayroll * 6)
  );

  // Range setting
  const updateRecommendedPaidUpCapital = () => {
    setRecommendedPaidUpCapital(
      estimatedMonthlyRental * 6 * (estimatedMonthlyPayroll * 6) +
        expectedInitialCashOutlay
    );
  };

  // Field change handlers
  const processEstimatedMonthlyRentalChange = e => {
    setEstimatedMonthlyRental(Number(e));
    updateRecommendedPaidUpCapital();
  };

  const processEstimatedMonthlyPayrollChange = e => {
    setEstimatedMonthlyPayroll(Number(e));
    updateRecommendedPaidUpCapital();
  };

  const processCashOutlayChange = e => {
    setExpectedInitialCashOutlay(Number(e));
    updateRecommendedPaidUpCapital();
  };

  const processNetIncomeChange = e => {
    setConservative3YearNetIncome(Number(e));
  };

  const processPaidUpCapitalChange = e => {
    setPaidUpCapital(Number(e));
  };

  const processValuePerShareChange = e => {
    setValuePerShare(Number(e));
  };

  const processSubscribedSharesChange = e => {
    setSubscribedShares(Number(e));
  };

  const processAuthorizedSharesChange = e => {
    setAuthorizedShares(Number(e));
  };

  return (
    <Box variant="styles.root">
      {/* <CurrencyField
        fieldId="estimatedMonthlyRental"
        fieldLabel="Estimated Monthly Rental"
        value={estimatedMonthlyRental}
        placeholder={0}
        onChange={processEstimatedMonthlyRentalChange}
      /> */}
      {/* <CurrencyField
        fieldId="estimatedMonthlyPayroll"
        fieldLabel="Estimated Monthly Payroll"
        value={estimatedMonthlyPayroll}
        onChange={processEstimatedMonthlyPayrollChange}
      /> */}
      {/* <CurrencyField
        fieldId="expectedInitialCashOutlay"
        fieldLabel="Expected Initial Cash Outlay"
        value={expectedInitialCashOutlay}
        onChange={processCashOutlayChange}
      /> */}
      {/* <CurrencyField
        fieldId="conservative3YearNetIncome"
        fieldLabel="Conservative 3-Year Net Income"
        value={conservative3YearNetIncome}
        onChange={processNetIncomeChange}
      /> */}
      <CurrencyField
        fieldId="valuePerShare"
        fieldLabel="Par Value Per Share"
        value={valuePerShare}
        placeholder={1}
        onChange={processValuePerShareChange}
      />
      <CurrencyField
        fieldId="paidUpCapital"
        fieldLabel="Paid-Up Capital"
        value={paidUpCapital}
        placeholder={recommendedPaidUpCapital}
        onChange={processPaidUpCapitalChange}
      />

      <Label htmlFor="subscribedShares">Subscribed Shares</Label>
      <Input
        name="subscribedShares"
        id="subscribedShares"
        defaultValue={subscribedShares}
        onChange={e => processSubscribedSharesChange(e.target.value)}
      />

      <Label htmlFor="authorizedShares">Authorized Shares</Label>
      <Input
        name="authorizedShares"
        id="authorizedShares"
        defaultValue={authorizedShares}
        onChange={e => processAuthorizedSharesChange(e.target.value)}
      />
    </Box>
  );
}

function CapitalDetails() {
  const overallCapitalAndShares = useSelector(
    state => state.overallCapitalAndShares
  );

  return (
    <Box width={[1, 3 / 4, 2 / 3]}>
      <Box mb={20}>
        <FormLabel>Par Value Per Share</FormLabel>
        <FormTextField />
      </Box>

      <Box mb={20}>
        <FormLabel>Authorized Capital</FormLabel>
        <FormTextField />
      </Box>

      <Box mb={20}>
        <FormLabel>Paid-up Capital</FormLabel>
        <FormTextField />
      </Box>

      <Box mb={20}>
        <FormLabel>Subscribed Capital</FormLabel>
        <FormTextField />
      </Box>

      <FormLabel>Additional Paid-in Capital</FormLabel>
      <FormTextField />
    </Box>
  );
}

export default CapitalDetails;
// export default NewCapitalDetails;
