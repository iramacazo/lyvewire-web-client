import { withStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/StarBorder";
import * as React from "react";
import IStyleClasses from "src/app/interfaces/style_classes";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
}

class ChannelHeader extends React.Component<IPropsType> {
    constructor(props: IPropsType) {
        super(props);
    }

    public render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.header}>
                    <img
                        src="https://www.dlsu.edu.ph/wp-content/uploads/2018/07/dlsu-dusk.jpg"
                        className={classes.headerImage}
                    />
                </div>
                <div className={classes.headerInformation}>
                    <Avatar
                        className={classes.channelImage}
                        src="https://s3-ap-southeast-1.amazonaws.com/jobayan/upload/3860359b475e1164327c35d3f69cafb5.png"
                    />
                    <h2>De La Salle University</h2>
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        className={classes.subscribeButton}
                    >
                        <StarIcon />
                        Subscribe
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(ChannelHeader);
