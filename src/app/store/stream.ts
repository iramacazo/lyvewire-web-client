import { observable } from "mobx";
import SidebarSection from "../models/enums/sidebar_section";

export class StreamState {
    @observable
    public activeSidebarTab: SidebarSection = SidebarSection.Question;
}

export default new StreamState();
