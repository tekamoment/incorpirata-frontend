import React from "react";

import { Box } from "rebass";
import { FormTextField, FormLabel } from "./custom-components/FormComponents";

function AddressDetailComponent({ defaultValues }) {
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
        <FormLabel htmlFor="region">Region</FormLabel>
        <FormTextField id="region" defaultValue={defaultValues.region} />
      </Box>
      <Box>
        <FormLabel htmlFor="province">Province</FormLabel>
        <FormTextField id="province" defaultValue={defaultValues.province} />
      </Box>
      <Box>
        <FormLabel htmlFor="townCity">Town / City</FormLabel>
        <FormTextField id="townCity" defaultValue={defaultValues.townCity} />
      </Box>
      <Box>
        <FormLabel htmlFor="barangay">Barangay</FormLabel>
        <FormTextField id="barangay" defaultValue={defaultValues.barangay} />
      </Box>
      <Box>
        <FormLabel htmlFor="street">Street</FormLabel>
        <FormTextField id="street" defaultValue={defaultValues.street} />
      </Box>
    </Box>
  );
}

export default AddressDetailComponent;
