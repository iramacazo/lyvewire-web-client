import { StyleRules, Theme } from "@material-ui/core/styles";

export default (theme: Theme): StyleRules => ({
    header: {
        backgroundImage:
            "url(www.dlsu.edu.ph/wp-content/uploads/2018/07/dlsu-dusk.jpg)",
        width: "100vw",
        height: "200px",
        overflow: "hidden",
    },
    headerImage: {
        width: "100vw",
        opacity: 0.5,
    },
    headerInformation: {
        width: "100vw",
        height: "50px",
        padding: "0 150px 0 150px",
        backgroundColor: "#161616",
        display: "flex",
    },
    channelImage: {
        top: "-85px",
        width: "175px",
        height: "175px",
        border: "8px solid #161616",
    },
    channelTabs: {
        height: "50px",
    },
    subscribeButton: {
        margin: "9px 0 9px 115px",
        padding: "0 15px"
    },
});
