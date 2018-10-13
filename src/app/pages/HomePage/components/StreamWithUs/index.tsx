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
                wrap="nowrap"
                spacing={24}
            >
                <Grid item>
                    <Divider />
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    wrap="nowrap"
                    spacing={16}
                    alignItems="flex-start"
                >
                    <Grid item>
                        <Typography variant="h6">
                            We're lyve for the first time!
                        </Typography>
                    </Grid>
                    <Grid item container spacing={8}>
                        <Grid item>
                            <Button variant="outlined">Join our team</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined">Go Lyve</Button>
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
