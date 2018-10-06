import { observable } from "mobx";

export default class User {
    public id: number;

    @observable
    public name: string;

    @observable
    public birthDate: string;

    @observable
    public email: string;
}
