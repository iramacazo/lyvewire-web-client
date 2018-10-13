import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import store from "../src/app/store";
import App from "./app";
import theme from "./app/theme";
import registerServiceWorker from "./registerServiceWorker";

const app = (
    <CssBaseline>
        <MuiThemeProvider theme={theme}>
            <Provider {...store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        </MuiThemeProvider>
    </CssBaseline>
);

ReactDOM.render(app, document.getElementById("root") as HTMLElement);
registerServiceWorker();
