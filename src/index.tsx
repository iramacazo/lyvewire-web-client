import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "mobx-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";

const app = (
    <CssBaseline>
        <Provider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </CssBaseline>
);

ReactDOM.render(app, document.getElementById("root") as HTMLElement);
registerServiceWorker();
