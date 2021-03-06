import Grey from "@material-ui/core/colors/grey";
import { StyleRules, Theme } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";

export default (theme: Theme): StyleRules => ({
    root: {
        height: "100%",
    },
    content: {
        background: darken(Grey["900"], 0.5),
    },
    page: {
        overflow: "scroll",
    },
    sidebar: {
        overflow: "scroll",
    },
});
