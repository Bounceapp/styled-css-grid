"use strict";

const sh = require("shelljs");
const join = require("path").join;
sh.config.fatal = true;
sh.cd(join(__dirname, ".."));

sh.echo("cleaning...");
sh.rm("-rf", "./dist");
sh.mkdir("-p", "./dist");

sh.echo("bundling dist...");
sh.exec("rollup -c ./scripts/rollup.config.js");

sh.echo("copying typescript definitions to dist...");
sh.cp("./index.d.ts", "./dist");