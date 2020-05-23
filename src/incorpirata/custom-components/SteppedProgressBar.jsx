import React from "react";
import { Box, Text, Flex } from "rebass";

// pass in background color
const ProgressBarDot = ({ isHighlighted, backgroundColor }) => {
  const commonColor = "#C48939";
  return (
    <Box
      sx={{
        display: "inline-block",
        borderColor: isHighlighted ? backgroundColor : commonColor,
        borderStyle: "solid",
        bg: isHighlighted ? commonColor : backgroundColor,
        borderRadius: 9999,
        width: isHighlighted ? 12 : 15,
        height: isHighlighted ? 12 : 15,
        borderWidth: isHighlighted ? 1 : 1,
        boxSizing: "border-box"
      }}
    />
  );
};

const SteppedProgressBar = ({
  steps,
  backgroundColor,
  lineColor,
  labelIndex
}) => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          marginBottom: "5px",
          ":before": {
            content: '""',
            position: "absolute",
            borderTop: `1px solid ${lineColor}`,
            width: "100%",
            transform: "translateY(800%)",
            zIndex: -1
          },
          width: "225px"
        }}
      >
        <Flex
          alignItems="center"
          flexDirection="row"
          justifyContent="space-between"
          position="relative"
        >
          {steps.map(step => {
            return (
              <ProgressBarDot
                isHighlighted={step.isActive}
                backgroundColor={backgroundColor}
              />
            );
          })}
        </Flex>
      </Box>
      <Text variant="progressBarLabel">{steps[labelIndex].label}</Text>
    </Box>
  );
};

export default SteppedProgressBar;
