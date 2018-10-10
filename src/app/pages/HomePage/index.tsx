import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import * as React from "react";
import IStyleClasses from "../../interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class HomePage extends React.Component<IPropsType> {
    public render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.carousel}>
                <Grid item>
                    <Card>
                        <CardMedia
                            component="img"
                            image="https://cdn.cnn.com/cnnnext/dam/assets/181002133751-trump-remarks-10022018-exlarge-169.jpg"
                            title="Contemplative Reptile"
                        />
                    </Card>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(HomePage);
