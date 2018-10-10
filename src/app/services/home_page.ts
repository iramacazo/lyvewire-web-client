import StreamThumbnailItem from "../models/entities/stream_thumbnail_item";

export const streamThumbnailItems = [
    {
        id: 1,
        title: "Sleep Well Beast Tour 2018",
        description:
            "The National is an American rock band from Cincinnati, Ohio, formed in 1999. The band consists of Matt Berninger, Aaron Dessner, Bryce Dessner, Scott Devendorf and Bryan Devendorf.",
        imageUrl:
            "https://www.telegraph.co.uk/content/dam/music/2017/09/26/TELEMMGLPICT000141748604_trans_NvBQzQNjv4BqTpQNkEsZM9dtjYvDPpd1c7_E-p5K6IxFuscdlk0yspA.jpeg",
    },
    {
        id: 2,
        title: "Mistaken For Strangers Screening",
        description:
            "Filmmaker Tom Berninger follows members of The National as they embark on an international tour.",
        imageUrl:
            "https://media.pitchfork.com/photos/5a7e2594d218d80cf45aedaa/2:1/w_790/The-National-band.jpg",
    },
    {
        id: 3,
        title: "Trouble Will Find Me Tour",
        description:
            "Trouble Will Find Me is the sixth studio album by American indie rock band The National, released on May 17, 2013 on 4AD.",
        imageUrl:
            "https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/12/GettyImages-800600974_the_national_matt_berninger_interview_1000-920x584.jpg",
    },
];

export default class HomePageService {
    public static async get(): Promise<StreamThumbnailItem[]> {
        return streamThumbnailItems.map(item => new StreamThumbnailItem(item));
    }
}
