import React from "react";

import { Box } from "rebass";
import { FormTextField, FormLabel } from "./FormComponents";

function IncorporatorAddressDetails({ defaultValues }) {
  return (
    <Box
      variant="styles.root"
      sx={{
        display: "grid",
        gridGap: "10px",
        // gridTemplateColumns: "repeat(2, 0.5fr)"
        gridRemplateColumns: "repeat(auto-fill, minmax(200px, 1fr) )"
      }}
    >
      <Box>
        <FormLabel htmlFor="houseNo">Lot/Block/Phase/House No.</FormLabel>
        <FormTextField id="houseNo" defaultValue={defaultValues.houseNo} />
      </Box>
      <Box>
        <FormLabel htmlFor="buildingNo">Unit/Room/Floor/Building No.</FormLabel>
        <FormTextField
          id="buildingNo"
          defaultValue={defaultValues.buildingNo}
        />
      </Box>
      <Box>
        <FormLabel htmlFor="buildingName">Building Name</FormLabel>
        <FormTextField
          id="buildingName"
          defaultValue={defaultValues.buildingName}
        />
      </Box>
      <Box>
        <FormLabel htmlFor="street">Street</FormLabel>
        <FormTextField id="street" defaultValue={defaultValues.street} />
      </Box>
      <Box>
        <FormLabel htmlFor="subdivisionVillage">Subdivision/Village</FormLabel>
        <FormTextField
          id="subdivisionVillage"
          defaultValue={defaultValues.subdivisionVillage}
        />
      </Box>
      <Box>
        <FormLabel htmlFor="barangay">Barangay</FormLabel>
        <FormTextField id="barangay" defaultValue={defaultValues.barangay} />
      </Box>
      <Box>
        <FormLabel htmlFor="townDistrict">Town/District</FormLabel>
        <FormTextField
          id="townDistrict"
          defaultValue={defaultValues.townDistrict}
        />
      </Box>
      <Box>
        <FormLabel htmlFor="city">City</FormLabel>
        <FormTextField id="city" defaultValue={defaultValues.city} />
      </Box>
      <Box>
        <FormLabel htmlFor="zipCode">Zip Code</FormLabel>
        <FormTextField id="zipCode" defaultValue={defaultValues.zipCode} />
      </Box>
    </Box>
  );
}

export default IncorporatorAddressDetails;
