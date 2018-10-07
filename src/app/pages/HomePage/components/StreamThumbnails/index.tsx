import Grid from "@material-ui/core/Grid";
import * as React from "react";
import StreamThumbnailItem from "../StreamThumbnailItem";
import StreamThumbnailSection from "../StreamThumbnailSection";

export default class StreamThumbnails extends React.Component {
    public render() {
        return (
            <Grid container direction="column" spacing={40}>
                <Grid item>
                    <StreamThumbnailSection title="Lyve right now">
                        <StreamThumbnailItem title="Something" />
                        <StreamThumbnailItem title="Something" />
                        <StreamThumbnailItem title="Something" />
                    </StreamThumbnailSection>
                </Grid>
            </Grid>
        );
    }
}
