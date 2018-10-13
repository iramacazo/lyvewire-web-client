import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import * as React from "react";
import LyveAppBar from "./components/universal/LyveAppBar";
import SidebarDrawer from "./components/universal/SidebarDrawer";
import IStyleClasses from "./interfaces/style_classes";
import HomePage from "./pages/HomePage";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class App extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid container direction="column" className={classes.root}>
                <Grid item>
                    <LyveAppBar />
                </Grid>
                <Grid item container xs className={classes.content}>
                    <Grid item xs={2} className={classes.sidebar}>
                        <SidebarDrawer />
                    </Grid>
                    <Grid item xs={10} className={classes.page}>
                        <HomePage />
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
export default withStyles(styles)(App);
