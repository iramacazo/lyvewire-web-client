import Grey from "@material-ui/core/colors/grey";
import { StyleRules, Theme } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";

export default (theme: Theme): StyleRules => ({
    sidebar: {
        width: "100%",
        height: "100%",
        zIndex: 2,
        background: darken(Grey["800"], 0.6),
        color: "white",
    },
    sidebarGridItem: {
        width: "100%",
    },
});
