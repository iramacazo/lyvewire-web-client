import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import IStyleClasses from "../../../../interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    title: string;
    classes: IStyleClasses;
}

/**
 * FUTURE PROPS:
 * image
 * description
 */

class StreamThumbnailItem extends React.Component<IPropsType> {
    public render() {
        const { title, classes } = this.props;
        return (
            <Grid item>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image="https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/05/2017GettyImages-the-beatles-radio-station-920x584.jpg"
                            className={classes.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline">
                                {title}
                            </Typography>
                            <Typography>
                                Description, something long, you know, something
                                that catches the attention the first time.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(StreamThumbnailItem);
