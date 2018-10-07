import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../interfaces/style_classes";
import FeatureEvent from "./components/FeatureEvent";
import Sidebar from "./components/Sidebar";
import StreamThumbnails from "./components/StreamThumbnails";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class HomePage extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid container direction="column" className={classes.page}>
                <Grid item className={classes.section}>
                    <FeatureEvent />
                </Grid>
                <Grid item className={classes.section}>
                    <Grid container direction="row" spacing={16}>
                        <Grid item xs className={classes.thumbnails}>
                            <StreamThumbnails />
                        </Grid>
                        <Grid item className={classes.sidebar}>
                            <Sidebar />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(HomePage);
