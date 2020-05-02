import * as path from "path";
import * as fs from "fs";
import readPkgUp from "read-pkg-up";

const { pkg, path: pkgPath } = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd())
});

export { pkg };
export const appDirectory = path.dirname(pkgPath);
export const fromAppRoot = (...p): string => path.join(appDirectory, ...p);
