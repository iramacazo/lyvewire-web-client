import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "src/app/interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class SidebarAbout extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.lyveLogo}>
                    <Typography variant="button">
                        Lyve Corporation
                    </Typography>
                </div>
                <List disablePadding>
                    <ListItem button>
                        <ListItemText>Stream with us</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>About</ListItemText>
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(SidebarAbout);
