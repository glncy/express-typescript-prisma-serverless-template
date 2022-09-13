const fsExtra = require("fs-extra");
const fs = require("fs");

const distFolder = `${process.cwd()}/dist`;
const viewsFolder = `${distFolder}/src/views`;
const publicFolder = `${distFolder}/src/public`;

// check if dist folder exists
if (!fs.existsSync(distFolder)) {
  throw new Error("dist folder does not exist");
}

// check if folders exist
if (!fs.existsSync(viewsFolder)) {
  fs.mkdirSync(viewsFolder);
}
if (!fs.existsSync(publicFolder)) {
  fs.mkdirSync(publicFolder);
}

// copy folders
fsExtra.copySync(`${process.cwd()}/src/views`, viewsFolder);
fsExtra.copySync(`${process.cwd()}/src/public`, publicFolder);
