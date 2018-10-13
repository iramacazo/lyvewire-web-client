import SidebarSection from "../models/enums/sidebar_section";
import rootStore from "../store";

const { stream } = rootStore;

export default class StreamSidebarController {
    public static setActiveTab(tab: SidebarSection) {
        stream.activeSidebarTab = tab;
    }
}
