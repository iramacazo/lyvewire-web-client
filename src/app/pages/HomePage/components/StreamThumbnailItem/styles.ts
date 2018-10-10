import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    card: {
        width: 290,
    },
    image: {
        height: 140,
        objectFit: "cover",
    },
});
