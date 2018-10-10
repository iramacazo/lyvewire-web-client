import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";

export default class StreamWithUs extends React.Component {
    public render() {
        return (
            <Grid
                container
                alignItems="stretch"
                justify="center"
                direction="column"
                spacing={16}
            >
                <Grid item>
                    <Divider />
                </Grid>
                <Grid item container direction="row" wrap="nowrap">
                    <Grid item xs>
                        <Typography variant="headline">
                            We're lyve for the first time!
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs
                        container
                        direction="row"
                        spacing={16}
                        justify="flex-end"
                    >
                        <Grid item>
                            <Button variant="outlined">Join our team</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined">
                                Go Lyve with Lyve Pro®
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Divider />
                </Grid>
            </Grid>
        );
    }
}
