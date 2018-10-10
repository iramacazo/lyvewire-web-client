import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as React from "react";
import IStyleClasses from "../../../../interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class StreamingSidebar extends React.Component<IPropsType> {
    public state = {
        expanded: "chat",
    };

    public handleChange = (panel: string) => () => {
        this.setState({
            expanded: panel,
        });
    };

    public render() {
        const { expanded } = this.state;
        const { classes } = this.props;

        return (
            <Grid container className={classes.root} direction="column">
                <Grid
                    item
                    className={classes.section}
                    xs={expanded === "questions"}
                    onClick={this.handleChange("questions")}
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="title">Questions</Typography>
                    </ExpansionPanelSummary>
                    <h1>Questions content</h1>
                </Grid>
                <Grid
                    item
                    className={classes.section}
                    xs={expanded === "chat"}
                    onClick={this.handleChange("chat")}
                >
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="title">Chat</Typography>
                    </ExpansionPanelSummary>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(StreamingSidebar);
