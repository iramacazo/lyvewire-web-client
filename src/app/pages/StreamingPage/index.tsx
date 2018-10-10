import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../interfaces/style_classes";
import StreamingSidebar from "./components/StreamingSidebar";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class StreamingPage extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.root} alignItems="stretch">
                <Grid item xs />
                <Grid item xs={4} md={3} xl={2}>
                    <StreamingSidebar />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(StreamingPage);
