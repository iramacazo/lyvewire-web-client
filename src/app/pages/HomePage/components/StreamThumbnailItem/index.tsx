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
    description: string;
    imageUrl: string;
    classes: IStyleClasses;
}

class StreamThumbnailItem extends React.Component<IPropsType> {
    public render() {
        const { title, description, imageUrl, classes } = this.props;
        return (
            <Grid item>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={imageUrl}
                            className={classes.image}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline">
                                {title}
                            </Typography>
                            <Typography>{description}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        );
    }
}

export default withStyles(styles)(StreamThumbnailItem);
