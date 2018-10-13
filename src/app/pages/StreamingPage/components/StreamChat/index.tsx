import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../../../interfaces/style_classes";
import StreamInputBox from "../StreamInputBox";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class StreamChat extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                className={classes.root}
                direction="column"
                alignItems="stretch"
                wrap="nowrap"
            >
                <Grid item xs className={classes.content}>
                    <List>chat item map goes here</List>
                </Grid>
                <Grid item className={classes.box}>
                    <StreamInputBox inputType="Chat" />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(StreamChat);
