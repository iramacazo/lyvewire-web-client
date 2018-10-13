import Grey from "@material-ui/core/colors/grey";
import { StyleRules } from "@material-ui/core/styles";
import { darken } from "@material-ui/core/styles/colorManipulator";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default (theme: Theme): StyleRules => ({
    toolbar: {
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    appBar: {
        background: darken(Grey["800"], 0.2),
        zIndex: theme.zIndex.appBar,
    },
});
