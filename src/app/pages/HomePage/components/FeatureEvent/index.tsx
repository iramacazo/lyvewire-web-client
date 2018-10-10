import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../../../interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class FeatureEvent extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={classes.image}
                        image="https://i.ytimg.com/vi/fGDA-WDIdkk/maxresdefault.jpg"
                    />
                </CardActionArea>
            </Card>
        );
    }
}

export default withStyles(styles)(FeatureEvent);
