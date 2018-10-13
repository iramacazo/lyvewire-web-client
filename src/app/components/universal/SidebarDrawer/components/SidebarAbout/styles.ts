import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        paddingBottom: theme.spacing.unit * 3,
    },
    lyveLogo: {
        padding: theme.spacing.unit * 3,
    },
});
