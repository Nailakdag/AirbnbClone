import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bgColor: "white",
        color: "#222222",
        fontFamily:
          "Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif",
        fontSize: "14px",
        lineHeight: "1.43",
        margin: "0",
        lineBreak: "strict,",
      },
    },
  },
});

export default theme;
