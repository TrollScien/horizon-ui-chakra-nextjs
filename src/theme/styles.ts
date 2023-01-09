import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    brand: {
      100: "#f9a879",
      200: "#f89861",
      300: "#f78948",
      400: "#f67930",
      500: "#e95c0a",
      600: "rgba(199, 77, 6, 1)",
      700: "rgba(195, 76, 7, 1)",
      800: "rgba(177, 69, 7, 1)",
      900: "rgba(168, 68, 10, 1)",
    },
    brandScheme: {
      100: "#0763e3",
      200: "#0658ca",
      300: "#054db1",
      400: "#044399",
      500: "#032d67",
      600: "rgba(0, 48, 91, 1)",
      700: "rgba(0, 40, 71, 1)",
      800: "rgba(0, 35, 80, 1)",
      900: "rgba(0, 17, 35, 1)",
    },
    brandTabs: {
      100: "#0763e3",
      200: "#0658ca",
      300: "#054db1",
      400: "#044399",
      500: "#032d67",
      600: "rgba(0, 48, 91, 1)",
      700: "rgba(0, 40, 71, 1)",
      800: "rgba(0, 35, 80, 1)",
      900: "rgba(0, 17, 35, 1)",
    },
    secondaryGray: {
      100: "#E0E5F2",
      200: "#E1E9F8",
      300: "#F4F7FE",
      400: "#E9EDF7",
      500: "#8F9BBA",
      600: "#A3AED0",
      700: "#707EAE",
      800: "#707EAE",
      900: "#1B2559",
    },
    red: {
      100: "#FEEFEE",
      500: "#EE5D50",
      600: "#E31A1A",
    },
    blue: {
      50: "#EFF4FB",
      500: "#3965FF",
    },
    orange: {
      100: "#FFF6DA",
      500: "#FFB547",
    },
    green: {
      100: "#E6FAF5",
      500: "#01B574",
    },
    navy: {
      50: "#247df9",
      100: "#0763e3",
      200: "#0658ca",
      300: "#054db1",
      400: "#044399",
      500: "#032d67",
      600: "rgba(0, 48, 91, 1)",
      700: "rgba(0, 40, 71, 1)",
      800: "rgba(0, 35, 80, 1)",
      900: "rgba(0, 17, 35, 1)",
    },
    gray: {
      100: "#FAFCFE",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        overflowX: "hidden",
        bg: mode("secondaryGray.300", "navy.900")(props),
        fontFamily: "DM Sans",
        letterSpacing: "-0.5px",
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: "DM Sans",
      },
    }),
  },
};
