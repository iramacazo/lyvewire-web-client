import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

export default class Sidebar extends React.Component {
    public render() {
        return (
            <List>
                <ListItem button>
                    <Typography variant="body2">
                        Partner with Lyvewire
                    </Typography>
                </ListItem>
                <ListItem button>
                    <Typography variant="body2">
                        Join the Lyvewire team
                    </Typography>
                </ListItem>
                <ListItem button>
                    <Typography variant="body2">
                        Submit feedback
                    </Typography>
                </ListItem>
            </List>
        );
    }
}
