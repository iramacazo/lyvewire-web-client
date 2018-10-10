import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import { streamThumbnailItems } from "../../../../services/home_page";
import StreamThumbnailItem from "../StreamThumbnailItem";

export default class StreamThumbnails extends React.Component {
    public render() {
        return (
            <Grid container direction="column" spacing={16}>
                <Grid item>
                    <Typography variant="headline">
                        Events We Love Right Now
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="row"
                    spacing={8}
                    alignItems="stretch"
                    justify="space-between"
                    wrap="nowrap"
                >
                    {streamThumbnailItems.map(sti => (
                        <Grid item key={sti.id} xs>
                            <StreamThumbnailItem
                                title={sti.title}
                                description={sti.description}
                                imageUrl={sti.imageUrl}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        );
    }
}
