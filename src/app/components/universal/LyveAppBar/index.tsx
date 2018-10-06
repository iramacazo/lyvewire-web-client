import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import * as React from "react";
import IStyleClasses from "../../../interfaces/style_classes";
import AppBarTitle from "./components/AppBarTitle";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class LyveAppBar extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <AppBar position="relative">
                <Toolbar variant="dense" className={classes.toolbar}>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="center"
                        wrap="nowrap"
                    >
                        <Grid item>
                            <AppBarTitle />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(LyveAppBar);
