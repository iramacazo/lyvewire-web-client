import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    page: {
        padding: theme.spacing.unit * 2,
    },
    section: {
        marginBottom: theme.spacing.unit * 4,
        marginLeft: theme.spacing.unit * 16,
        marginRight: theme.spacing.unit * 16,
    },
    sidebar: {
        width: 250,
    },
});
