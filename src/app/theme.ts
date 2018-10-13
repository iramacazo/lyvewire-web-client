import DeepPurple from "@material-ui/core/colors/deepPurple";
import Grey from "@material-ui/core/colors/grey";
import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: DeepPurple["500"],
        },
        secondary: {
            main: DeepPurple["300"],
        },
        background: {
            paper: Grey["900"],
        },
    },
    typography: {
        useNextVariants: true,
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
