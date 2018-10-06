import { observable } from "mobx";

export default class User {
    id: number;

    @observable
    name: string;

    @observable
    birthDate: string;

    @observable
    email: string;
}
