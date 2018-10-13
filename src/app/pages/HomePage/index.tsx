import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../interfaces/style_classes";
import EventBillboard from "./components/EventBillboard";
import EventThumbnails from "./components/EventThumbnails";
import FeaturedEvents from "./components/FeaturedEvents";
import StreamWithUs from "./components/StreamWithUs";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class HomePage extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction="column"
                alignItems="stretch"
                justify="center"
                spacing={24}
                className={classes.page}
            >
                <Grid item className={classes.section}>
                    <EventBillboard />
                </Grid>
                <Grid item className={classes.section}>
                    <FeaturedEvents />
                </Grid>
                <Grid item>
                    <StreamWithUs />
                </Grid>
                <Grid item>
                    <EventThumbnails />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(HomePage);
