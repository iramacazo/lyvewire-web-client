import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    page: {
        padding: theme.spacing.unit * 4,
        width: "90%",
        margin: "auto",
    },
});
