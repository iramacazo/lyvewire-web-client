import Entity from "src/app/interfaces/entity";
import Channel from "./channel";

export default class Event extends Entity {
    public title: string;
    public description: string;
    public image: string;
    public channel: Channel;

    constructor(e: any) {
        super(e);
        this.channel = new Channel(e.channel);
    }
}
