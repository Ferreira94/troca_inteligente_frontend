import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  breakpoints: {
    lg: "73em",
    md: "60em",
    ml: "50em",
  },

  colors: {
    pGray: {
      "050": "#F3F2F2",
      "100": "#E7E8FC",
      "200": "#9CA9B6",
      "300": "#BDBDBD",
      "400": "#9B9892",
      "500": "#85817A",
      "600": "#6A6762",
      "700": "#504E49",
      "800": "#353431",
      "900": "#1B1A18",
    },

    green: {
      "300": "#77E543",
      "500": "#00C31F",
    },

    blue: {
      "300": "#57EBAD",
      "500": "#0099C5",
    },
  },

  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
  components: {
    Text: {
      baseStyle: {
        fontSize: "md",
        fontWeight: "normal",
      },
    },
    Button: {
      defaultProps: {
        colorScheme: "green",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "rgba(189, 189, 189, 0.1)",
        color: "pGray.800",
      },
    },
  },
});
