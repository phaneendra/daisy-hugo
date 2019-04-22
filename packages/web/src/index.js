import { AppRegistry } from "react-native";

import App from "@devkit/components/src/App";

AppRegistry.registerComponent("devkit", () => App);
AppRegistry.runApplication("devkit", {
  rootTag: document.getElementById("root")
});
