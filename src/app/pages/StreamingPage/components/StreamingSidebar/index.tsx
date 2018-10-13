import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { inject, observer } from "mobx-react";
import * as React from "react";
import StreamSidebarController from "src/app/controllers/stream_sidebar";
import IStyleClasses from "../../../../interfaces/style_classes";
import SidebarSection from "../../../../models/enums/sidebar_section";
import { StreamState } from "../../../../store/stream";
import StreamChat from "../StreamChat";
import StreamQuestions from "../StreamQuestions";
import styles from "./styles";

interface IPropsType {
    classes: IStyleClasses;
    stream?: StreamState;
}

@inject("stream")
@observer
class StreamingSidebar extends React.Component<IPropsType> {
    public onTabChange = (event: React.ChangeEvent, value: SidebarSection) =>
        StreamSidebarController.setActiveTab(value);

    public render() {
        const { classes, stream } = this.props;
        const { activeSidebarTab } = stream!;
        return (
            <Grid container className={classes.root} direction="column">
                <Grid item className={classes.tabBarContainer}>
                    <Tabs
                        value={activeSidebarTab}
                        fullWidth
                        onChange={this.onTabChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                    >
                        <Tab
                            label="Questions"
                            value={SidebarSection.Question}
                        />
                        <Tab label="Chat" value={SidebarSection.Chat} />
                    </Tabs>
                    <Divider />
                </Grid>
                <Grid item xs>
                    {activeSidebarTab === SidebarSection.Question && (
                        <StreamQuestions />
                    )}
                    {activeSidebarTab === SidebarSection.Chat && <StreamChat />}
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(StreamingSidebar);
