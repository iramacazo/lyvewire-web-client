import BlueGrey from "@material-ui/core/colors/blueGrey";
import { StyleRules } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

export default (theme: Theme): StyleRules => ({
    toolbar: {
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    appBar: {
        background: BlueGrey["800"],
    },
});
