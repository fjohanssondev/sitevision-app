import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import type { InitialProps } from "../types/types";

export default (initialState: InitialProps, el: HTMLElement) => {
  ReactDOM.hydrate(
    <App {...initialState} />,
    el
  );
};
