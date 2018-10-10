import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    card: {
        height: "320px",
    },
    image: {
        objectFit: "cover",
    },
});
