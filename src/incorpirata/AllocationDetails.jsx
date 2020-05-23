import React, { Fragment, useState } from "react";
import { Box, Flex, Heading, Text, Button, Link, Image, Card } from "rebass";
import { Label, Input, Textarea, Radio } from "@rebass/forms";

import { useDispatch, useSelector } from "react-redux";
import { FormLabel, FormTextField } from "./custom-components/FormComponents";

function OuterAllocationDetails() {
  const shouldUseManualAllocation = useSelector(
    state => state.knowsHowToAllocateShares
  );
  console.log({ shouldUseManualAllocation: shouldUseManualAllocation });
  const overallCapitalAndShares = useSelector(
    state => state.overallCapitalAndShares
  );
  const capitalAndShareDetails = {
    ...overallCapitalAndShares,
    paidUpAmount: overallCapitalAndShares.paidUpCapital,
    subscribedCapital:
      overallCapitalAndShares.subscribedShares *
      overallCapitalAndShares.valuePerShare
  };

  const allocations = useSelector(state => state.allocations);
  const incorporators = useSelector(state => state.relatedPersons);
  const combinedAllocationsIncorporators = allocations.map(all => {
    const selectedIncorporator = incorporators.filter(
      inc => inc.id === all.id
    )[0];
    return {
      ...all,
      name: { ...selectedIncorporator.name }
    };
  });

  console.log({
    combinedAllocationsIncorporators: combinedAllocationsIncorporators
  });

  return (
    <AllocationDetails
      manualAllocation={Boolean(shouldUseManualAllocation)}
      capitalAndShareDetails={capitalAndShareDetails}
      incorporators={combinedAllocationsIncorporators}
    />
  );
}

function AllocationDetails({
  manualAllocation,
  capitalAndShareDetails,
  incorporators
}) {
  // props.manualAllocation
  // props.capitalAndShareDetails
  // .subscribedShares
  // .subscribedCapital
  // .paidUpAmount
  // .valuePerShare
  // props.incorporators
  const numberFormatter = new Intl.NumberFormat("en-US", {
    // style: "currency",
    // currency: "USD", // CNY for Chinese Yen, EUR for Euro
    maximumFractionDigits: 2
    // currencyDisplay: "symbol"
  });

  const [amountsLeft, setAmountsLeft] = useState({
    shares: capitalAndShareDetails.subscribedShares,
    paidUpAmount: capitalAndShareDetails.paidUpAmount,
    percent: 100
  });

  const formattedIncorporators = incorporators.map(inc => {
    return {
      ...inc,
      name: `${inc.name.lastName}, ${inc.name.firstName}`
    };
  });

  const initialAllocations = incorporators.reduce((overall, incorporator) => {
    return {
      ...overall,
      [incorporator["id"]]: {
        name: `${incorporator.name.lastName}, ${incorporator.name.firstName}`,
        subscribedShares: incorporator.subscribedShares,
        subscribedCapital: incorporator.subscribedCapital,
        paidUpAmount: incorporator.paidUpAmount,
        percentageOfOwnership: incorporator.percentageOfOwnership
      }
    };
  }, {});

  const [allocations, setAllocations] = useState({
    ...initialAllocations
  });

  console.log({ allocations: allocations });

  const [totals, setTotals] = useState({
    subscribedShares: 0,
    subscribedCapital: 0,
    paidUpAmount: 0,
    percentageOfOwnership: 0
  });

  const calculateTotalsAndRemaining = () => {
    const newTotals = {
      subscribedShares: 0,
      subscribedCapital: 0,
      paidUpAmount: 0,
      percentageOfOwnership: 0
    };

    Object.keys(allocations).forEach(id => {
      const relevantAllocation = allocations[id];
      newTotals.subscribedShares += relevantAllocation.subscribedShares;
      newTotals.subscribedCapital += relevantAllocation.subscribedCapital;
      newTotals.paidUpAmount += relevantAllocation.paidUpAmount;
      newTotals.percentageOfOwnership +=
        relevantAllocation.percentageOfOwnership;
    });

    const newAmountsLeft = {
      shares:
        capitalAndShareDetails.subscribedShares - newTotals.subscribedShares,
      paidUpAmount:
        capitalAndShareDetails.paidUpAmount - newTotals.paidUpAmount,
      percent: 100 - newTotals.percentageOfOwnership
    };

    setTotals(newTotals);
    setAmountsLeft(newAmountsLeft);
  };

  const percentOwnershipChange = e => {
    const targetId = e.target.id.split("_")[0];
    const activeAllocation = allocations[targetId];
    const newPercentOwnership = Number(e.target.value);

    if (newPercentOwnership < 0 || newPercentOwnership > 100) {
      return;
    }

    activeAllocation.percentageOfOwnership = newPercentOwnership;
    activeAllocation.subscribedShares =
      (newPercentOwnership / 100) * capitalAndShareDetails.subscribedShares;
    activeAllocation.subscribedCapital =
      (newPercentOwnership / 100) * capitalAndShareDetails.subscribedCapital;
    activeAllocation.paidUpAmount =
      (newPercentOwnership / 100) * capitalAndShareDetails.paidUpAmount;
    const newAllocations = {
      ...allocations
    };
    newAllocations[targetId] = { ...activeAllocation };
    setAllocations(newAllocations);

    calculateTotalsAndRemaining();
  };

  const subscribedSharesChange = e => {
    const targetId = e.target.id.split("_")[0];
    const activeAllocation = allocations[targetId];
    const newSubscribedShares = Math.round(Number(e.target.value));
    if (
      newSubscribedShares < 0 ||
      newSubscribedShares > capitalAndShareDetails.subscribedShares
    ) {
      return;
    }

    activeAllocation.subscribedShares = newSubscribedShares;
    activeAllocation.subscribedCapital =
      newSubscribedShares * capitalAndShareDetails.valuePerShare;
    activeAllocation.percentageOfOwnership =
      (newSubscribedShares / capitalAndShareDetails.subscribedShares) * 100;
    const newAllocations = {
      ...allocations
    };
    newAllocations[targetId] = { ...activeAllocation };
    setAllocations(newAllocations);

    calculateTotalsAndRemaining();
  };

  const paidUpAmountChange = e => {
    const targetId = e.target.id.split("_")[0];
    const activeAllocation = allocations[targetId];
    const newPaidUpAmount = Math.round(Number(e.target.value));
    if (
      newPaidUpAmount < activeAllocation.subscribedCapital * 0.25 ||
      newPaidUpAmount > activeAllocation.subscribedCapital
    ) {
      return;
    }
    activeAllocation.paidUpAmount = newPaidUpAmount;
    const newAllocations = {
      ...allocations
    };
    newAllocations[targetId] = { ...activeAllocation };
    setAllocations(newAllocations);

    calculateTotalsAndRemaining();
  };

  return (
    <Box variant="styles.root">
      <table>
        <tr>
          <th scope="col">Incorporator</th>
          <Fragment>
            <th scope="col">Percentage ownership</th>
            <th scope="col">Subscribed shares</th>
            <th scope="col">Paid up amount</th>
          </Fragment>
        </tr>
        {formattedIncorporators.map(incorporator => {
          const relevantAllocation = allocations[incorporator.id];
          return (
            <tr key={incorporator.id}>
              <th scope="row">{incorporator.name}</th>
              {manualAllocation === true ? (
                <Fragment>
                  <td>
                    <FormTextField
                      id={`${incorporator.id}_percentageOfOwnership`}
                      type="number"
                      defaultValue={incorporator.percentageOfOwnership}
                      onChange={percentOwnershipChange}
                    />
                  </td>
                  <td>
                    <FormTextField
                      id={`${incorporator.id}_subscribedShares`}
                      type="number"
                      defaultValue={incorporator.subscribedShares}
                      onChange={subscribedSharesChange}
                    />
                  </td>
                  <td>
                    <FormTextField
                      id={`${incorporator.id}_paidUpAmount`}
                      type="number"
                      defaultValue={incorporator.paidUpAmount}
                      onChange={paidUpAmountChange}
                    />
                  </td>
                </Fragment>
              ) : (
                <Fragment>
                  <td>
                    <Label>
                      {numberFormatter.format(
                        relevantAllocation.percentageOfOwnership
                      )}
                      %
                    </Label>
                  </td>
                  <td>
                    <Label>
                      {numberFormatter.format(
                        relevantAllocation.subscribedShares
                      )}
                    </Label>
                  </td>
                  <td>
                    <Label>
                      {numberFormatter.format(relevantAllocation.paidUpAmount)}
                    </Label>
                  </td>
                </Fragment>
              )}
            </tr>
          );
        })}
      </table>

      {manualAllocation ? (
        <Box>
          <Heading>
            Shares Left: {numberFormatter.format(amountsLeft.shares)}
          </Heading>
          <Heading>
            Paid-Up Capital Left:
            {numberFormatter.format(amountsLeft.paidUpAmount)}
          </Heading>
        </Box>
      ) : (
        <Box>
          <Heading>
            Percentage Left:
            {numberFormatter.format(amountsLeft.percent)}%
          </Heading>
        </Box>
      )}
    </Box>
  );
}

////////////////

const AllocationCardBox = props => {
  return (
    <Box variant="allocationCard">
      <Box>
        <FormLabel>Percentage Ownership</FormLabel>
        {props.manualAllocation ? (
          <FormTextField />
        ) : (
          <Text>{props.percentageOfOwnership}</Text>
        )}
      </Box>
      <Box>
        <FormLabel>Subscribed Shares</FormLabel>
        {props.manualAllocation ? (
          <FormTextField />
        ) : (
          <Text>{props.subscribedShares}</Text>
        )}
      </Box>
      <Box>
        <FormLabel>Paid Up Amount</FormLabel>
        {props.manualAllocation ? (
          <FormTextField />
        ) : (
          <Text>{props.paidUpAmount}</Text>
        )}
      </Box>
    </Box>
  );
};

const AllocationCardDetail = ({ allocation, index, count }) => {
  return (
    <Box>
      <Box mb={20}>
        <Heading>
          {index} / {count}
        </Heading>
        <Heading>
          {allocation.name.lastName}, {allocation.name.firstName}
        </Heading>
      </Box>
      <AllocationCardBox
        manualAllocation={false}
        percentageOfOwnership={allocation.percentageOfOwnership}
        subscribedShares={allocation.subscribedShares}
        paidUpAmount={allocation.paidUpAmount}
      />
    </Box>
  );
};

const CardAllocationDetails = props => {};

export default OuterAllocationDetails;
