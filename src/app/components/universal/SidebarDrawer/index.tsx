import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { withStyles } from "@material-ui/core/styles";
import StarBorder from "@material-ui/icons/StarBorder";
import * as React from "react";
import IStyleClasses from "src/app/interfaces/style_classes";
import SidebarAbout from "./components/SidebarAbout";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class SidebarDrawer extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                className={classes.sidebar}
                direction="column"
                alignItems="stretch"
                wrap="nowrap"
            >
                <Grid item xs>
                    <List
                        dense
                        component="nav"
                        subheader={
                            <ListSubheader component="div">
                                Channels
                            </ListSubheader>
                        }
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText
                                inset
                                primary="La Salle Computer Society"
                            />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText
                                inset
                                primary="Business Management Society"
                            />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText inset primary="Digicon" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText inset primary="Startcon" />
                        </ListItem>
                    </List>
                </Grid>
                <Divider />
                <Grid item>
                    <SidebarAbout />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(SidebarDrawer);
