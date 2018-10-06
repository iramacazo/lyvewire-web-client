import authentication, { AuthenticationState } from "./authentication";

interface IRootStore {
    authentication: AuthenticationState;
}

const rootStore: IRootStore = {
    authentication,
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
