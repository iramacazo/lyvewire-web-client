import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    page: {
        padding: theme.spacing.unit * 3,
        paddingTop: 0,
        marginTop: -24,
        width: "100%",
        margin: "auto",
        maxWidth: 1600,
    },
});
