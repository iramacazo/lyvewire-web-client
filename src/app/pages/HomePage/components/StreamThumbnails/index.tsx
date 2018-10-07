import Grid from "@material-ui/core/Grid";
import * as React from "react";
import { streamThumbnailItems } from "../../../../services/home_page";
import StreamThumbnailItem from "../StreamThumbnailItem";
import StreamThumbnailSection from "../StreamThumbnailSection";

export default class StreamThumbnails extends React.Component {
    public render() {
        return (
            <Grid container direction="column" spacing={40}>
                <Grid item>
                    <StreamThumbnailSection title="Lyve right now">
                        {streamThumbnailItems.map(sti => {
                            return (
                                <StreamThumbnailItem
                                    key={sti.id}
                                    title={sti.title}
                                    description={sti.description}
                                    imageUrl={sti.imageUrl}
                                />
                            );
                        })}
                    </StreamThumbnailSection>
                </Grid>
            </Grid>
        );
    }
}
