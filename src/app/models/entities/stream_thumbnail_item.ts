import { observable } from "mobx";
import Entity from "../../interfaces/entity";

export default class StreamThumbnailItem extends Entity {
    public id: number;

    @observable
    public title: string;

    @observable
    public description: string;

    @observable
    public imageUrl: string;
}
