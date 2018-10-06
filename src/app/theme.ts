import deepPurple from "@material-ui/core/colors/deepPurple";
import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: deepPurple["500"],
        },
        secondary: deepPurple,
    },
    typography: {
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
});
