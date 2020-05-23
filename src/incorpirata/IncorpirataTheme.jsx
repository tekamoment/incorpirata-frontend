import preset from "@rebass/preset";

const theme = {
  ...preset,
  colors: {
    ...preset.colors,
    lightBackground: "#FFEDE2",
    darkBackground: "#FFDD9A",
    placeholderText: "#C48939",
    fieldText: "#C48939"
  },
  fonts: {
    ...preset.fonts,
    body: "Source Sans Pro, sans-serif",
    heading: "Source Sans Pro, sans-serif"
  },
  fontWeights: {
    ...preset.fontWeights,
    heading: 700
  },
  variants: {
    sectionHeader: {
      bg: "darkBackground"
    },
    sectionBody: {
      bg: "lightBackground"
    },
    formLabel: {
      fontFamily: "Source Sans Pro, sans-serif",
      fontWeight: 700
    },
    textFieldVariant: {
      background: "#FFEDE2",
      border: "1px solid #000000",
      borderRadius: "0px 15px",
      color: "#C48939"
    },
    defaultPerson: {
      border: "1px solid #000000",
      boxSizing: "border-box",
      borderRadius: "15px"
    },
    activePerson: {
      background: "#000000",
      border: "1px solid #000000",
      boxSizing: "border-box",
      borderRadius: "15px",
      color: "#FFDD9A"
    },
    allocationCard: {
      background: "#EDB469",
      borderRadius: "20px"
    }
  },
  lineHeights: {
    ...preset.lineHeights,
    body: 1.25
  },
  buttons: {
    primary: {
      color: "#FFEDE2",
      bg: "#008B94",
      borderRadius: 12,
      fontFamily: "Source Sans Pro, sans-serif",
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      fontWeight: 600,
      fontSize: 12
    },
    close: {
      color: "#C48939",
      bg: "transparent"
    }
  },
  text: {
    formLabel: {
      fontFamily: "Source Sans Pro, sans-serif",
      fontWeight: 700
    },
    heading: {
      ...preset.text.heading,
      fontSize: "24px",
      lineHeight: "30px"
    },
    questionHeading: {
      ...preset.text.heading,
      fontSize: "24px",
      lineHeight: "30px",
      marginBottom: "20px"
    },
    progressBarLabel: {
      fontFamily: "Source Sans Pro, sans-serif",
      fontWeight: 600,
      color: "#C48939",
      letterSpacing: "1px",
      textTransform: "uppercase",
      fontSize: "12px",
      lineHeight: "15px"
    }
  }
};

export default theme;
