import authentication, { AuthenticationState } from "./authentication";
import stream, { StreamState } from "./stream";

interface IRootStore {
    authentication: AuthenticationState;
    stream: StreamState;
}

const rootStore: IRootStore = {
    authentication,
    stream,
};

// Put rootStore as window variable when debugging
if (
    process &&
    process.env &&
    process.env.NODE_ENV &&
    process.env.NODE_ENV === "development"
) {
    // tslint:disable-next-line
    window["store"] = rootStore;
}

export default rootStore;
