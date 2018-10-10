import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    card: {
        height: "100%"
    },
    image: {
        height: 140,
        objectFit: "cover",
    },
});
