import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "src/app/interfaces/style_classes";
import Event from "../../../models/entities/event";
import styles from "./styles";

interface IPropsType {
    event: Event;
    classes: IStyleClasses;
}

class EventItem extends React.Component<IPropsType> {
    public render() {
        const { event, classes } = this.props;
        return (
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        title={`${event.title} photo`}
                        image={event.image}
                    />
                    <CardContent>
                        <Typography variant="h6" className={classes.cardTitle}>
                            {event.title}
                        </Typography>
                        <Typography variant="overline">
                            {event.channel.title}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                            {event.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(EventItem);
