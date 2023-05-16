import * as React from "react";
import { renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";
import App from "./App";

router.get("/", (req, res) => {
  
  const data = {}

  res.agnosticRender(renderToString(<App {...data} />), data);
});
