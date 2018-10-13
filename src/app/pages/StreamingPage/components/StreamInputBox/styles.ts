import Grey from "@material-ui/core/colors/grey";
import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        width: "100%",
        background: Grey["900"],
    },
    chatBoxContainer: {
        padding: theme.spacing.unit,
    },
});
