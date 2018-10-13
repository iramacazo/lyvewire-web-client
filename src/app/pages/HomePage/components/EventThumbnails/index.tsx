import Grid from "@material-ui/core/Grid";
import * as React from "react";
import EventItem from "../../../../components/reusable/EventItem";
import Event from "../../../../models/entities/event";

const dummyData = [
    {
        id: 1,
        title: "How To Be A Human Being",
        image:
            "http://thegreekberkeley.com/wp-content/uploads/2017/06/glassanimals_updated1024-1024x576.jpg",
        description: "Glass Animals is an English indie rock band from Oxford",
        channel: {
            title: "Glass Animals",
        },
    },
    {
        id: 2,
        title: "Google I/O 2018",
        image:
            "https://i.kinja-img.com/gawker-media/image/upload/s--KGYxdxO0--/c_scale,f_auto,fl_progressive,q_80,w_800/b687jzjnpobnt1mchksv.jpg",
        description: "Glass Animals is an English indie rock band from Oxford",
        channel: {
            title: "Google",
        },
    },
    {
        id: 3,
        title: "State of the Union 2018",
        image:
            "https://cdn.images.express.co.uk/img/dynamic/78/590x/Donald-Trump-State-of-the-Union-address-912302.jpg",
        description:
            "The State of the Union Address is an annual message presented by the President of the United States to a joint session of the United States Congress,",
        channel: {
            title: "The United States of America",
        },
    },
    {
        id: 4,
        title: "Sleep Well Beast",
        image:
            "https://cdn1-www.musicfeeds.com.au/assets/uploads/The-National-671x377.jpg",
        description:
            " I survived the dinner, and the air went thinner. I retired to the briars, by the pool, it gets so loud",
        channel: {
            title: "The National",
        },
    },
].map(e => new Event(e));

export default class EventThumbnails extends React.Component {
    public render() {
        return (
            <Grid container spacing={8} alignItems="stretch">
                {dummyData.map(e => (
                    <Grid item key={e.id}>
                        <EventItem event={e} />
                    </Grid>
                ))}
            </Grid>
        );
    }
}
