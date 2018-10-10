import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../interfaces/style_classes";
import FeatureEvent from "./components/FeatureEvent";
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
                    <StreamThumbnails />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(HomePage);
