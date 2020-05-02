import fs from "fs";
import { fromAppRoot } from "./fromAppRoot";

export const hasFile = (...p): boolean => fs.existsSync(fromAppRoot(...p));
