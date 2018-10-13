import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    card: {
        height: "100%",
        minHeight: 240,
    },
    cardActionArea: {
        position: "relative",
        height: "100%",
        width: "100%",
    },
    image: {
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
    },
    cardDescription: {
        position: "absolute",
        bottom: 0,
        background: "linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,1))",
    },
    cardTitle: {
        lineHeight: 1,
    },
});
