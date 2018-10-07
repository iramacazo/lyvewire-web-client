import Card from "@material-ui/core/Card";
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
                <CardMedia
                    component="img"
                    className={classes.image}
                    image="https://blog.macsales.com/wp-content/uploads/2018/06/MacBookPro-2018r.jpg"
                />
            </Card>
        );
    }
}

export default withStyles(styles)(FeatureEvent);
