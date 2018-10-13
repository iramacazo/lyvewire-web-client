import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as React from "react";
import Event from "../../../../models/entities/event";
import FeaturedEventItem from "../FeaturedEventItem";

export const dummyData = [
    {
        id: 1,
        title: "Sleep Well Beast Tour 2018",
        description:
            "The National is an American rock band from Cincinnati, Ohio, formed in 1999. The band consists of Matt Berninger, Aaron Dessner, Bryce Dessner, Scott Devendorf and Bryan Devendorf.",
        image:
            "https://www.telegraph.co.uk/content/dam/music/2017/09/26/TELEMMGLPICT000141748604_trans_NvBQzQNjv4BqTpQNkEsZM9dtjYvDPpd1c7_E-p5K6IxFuscdlk0yspA.jpeg",
        channel: {
            title: "SWB Tour 2018",
        },
    },
    {
        id: 2,
        title: "Mistaken For Strangers Screening",
        description:
            "Filmmaker Tom Berninger follows members of The National as they embark on an international tour.",
        image:
            "https://media.pitchfork.com/photos/5a7e2594d218d80cf45aedaa/2:1/w_790/The-National-band.jpg",
        channel: {
            title: "Berninger Productions",
        },
    },
    {
        id: 3,
        title: "Trouble Will Find Me Tour",
        description:
            "Trouble Will Find Me is the sixth studio album by American indie rock band The National, released on May 17, 2013 on 4AD.",
        image:
            "https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/12/GettyImages-800600974_the_national_matt_berninger_interview_1000-920x584.jpg",
        channel: {
            title: "L.A. Women",
        },
    },
].map(e => new Event(e));

export default class FeaturedEvents extends React.Component {
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
                    {dummyData.map(e => (
                        <Grid item key={e.id} xs>
                            <FeaturedEventItem event={e} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        );
    }
}
