import StreamThumbnailItem from "../models/entities/stream_thumbnail_item";

export const streamThumbnailItems = [
    {
        id: 1,
        title: "National 1",
        description: "Pretty cool right",
        imageUrl:
            "https://www.telegraph.co.uk/content/dam/music/2017/09/26/TELEMMGLPICT000141748604_trans_NvBQzQNjv4BqTpQNkEsZM9dtjYvDPpd1c7_E-p5K6IxFuscdlk0yspA.jpeg",
    },
    {
        id: 2,
        title: "National 2",
        description: "This is another one",
        imageUrl:
            "https://media.pitchfork.com/photos/5a7e2594d218d80cf45aedaa/2:1/w_790/The-National-band.jpg",
    },
    {
        id: 3,
        title: "National 3",
        description: "This is the last time",
        imageUrl:
            "https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/12/GettyImages-800600974_the_national_matt_berninger_interview_1000-920x584.jpg",
    },
];

export default class HomePageService {
    public static async get(): Promise<StreamThumbnailItem[]> {
        return streamThumbnailItems.map(item => new StreamThumbnailItem(item));
    }
}
