import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    root: {
        height: "100%",
    },
    page: {
        overflow: "hidden",
        background: theme.palette.background.paper,
    },
});
