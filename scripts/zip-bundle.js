const fs = require("fs");
const distFolder = `${process.cwd()}/dist`;

// check dist folder
if (!fs.existsSync(distFolder)) {
  throw new Error("dist folder does not exist");
}

// zip dist folder with dist folder inside and move to bundle folder using archiver
const archiver = require("archiver");
const output = fs.createWriteStream(`${process.cwd()}/bundle.zip`);
const archive = archiver("zip", {
  zlib: { level: 9 }, // Sets the compression level.
});

output.on("close", function () {
  console.log(archive.pointer() + " total bytes");
  console.log(
    "archiver has been finalized and the output file descriptor has closed."
  );
});

archive.on("error", function (err) {
  throw err;
});

archive.pipe(output);
archive.directory(distFolder, false);
archive.finalize();
