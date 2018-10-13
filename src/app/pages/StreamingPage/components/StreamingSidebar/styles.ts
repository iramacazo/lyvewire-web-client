import Grey from "@material-ui/core/colors/grey";
import { StyleRules } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";

export default {
    root: {
        height: "100%",
        borderLeft: "1px solid",
        borderColor: Grey["800"],
        background: darken(Grey["900"], 0.3),
    },
    tabBarContainer: {
        background: Grey["900"],
    },
} as StyleRules;
