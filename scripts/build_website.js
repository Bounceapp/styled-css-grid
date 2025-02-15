"use strict";

const sh = require("shelljs");
const join = require("path").join;
sh.config.fatal = true;
sh.cd(join(__dirname, ".."));

sh.echo("cleaning...");
sh.rm("-rf", "./website/bin");
sh.mkdir("-p", "./website/bin");

sh.echo("bundling website...");
sh.exec("rollup -c ./scripts/rollup.website.config.js");

sh.echo("pre-rendering website...");
sh.exec("node scripts/prerender-website");
