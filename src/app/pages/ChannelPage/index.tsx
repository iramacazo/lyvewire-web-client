import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../interfaces/style_classes";
import ChannelHeader from "./components/ChannelHeader";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class ChannelPage extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <div>
                <ChannelHeader />
                <Grid
                    container
                    direction="column"
                    alignItems="stretch"
                    justify="center"
                    spacing={24}
                    className={classes.page}
                >
                    weisheme
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(ChannelPage);
