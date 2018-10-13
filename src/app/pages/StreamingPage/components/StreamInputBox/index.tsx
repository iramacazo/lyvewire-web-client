import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import * as React from "react";
import IStyleClasses from "../../../../interfaces/style_classes";
import styles from "./styles";

// This is a form, so what's missing is the form from the store or whatever and its onChange

interface IPropsType {
    inputType: string;
    classes: IStyleClasses;
    question?: boolean; // for the future, if ever
}

class StreamInputBox extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Divider />
                <Grid
                    container
                    spacing={8}
                    className={classes.chatBoxContainer}
                    alignItems="flex-end"
                >
                    <Grid item xs>
                        <TextField
                            rows={3}
                            rowsMax={10}
                            placeholder="Say something..."
                            fullWidth
                            multiline
                            margin="none"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <Button color="primary" size="small" variant="raised">
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(StreamInputBox);
