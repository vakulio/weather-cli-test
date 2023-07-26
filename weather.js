#!/usr/bin/env node

import { printHelp } from "./services/log.service.js";
import { program } from "commander";

const initCLI = () => {
  program
    .option("-s, --town <char>")
    .option("-h, --help")
    .option("-token, --token <char>");
  program.parse();
  const options = program.opts();
  if (options.help) printHelp();

  if (options.town) console.log(`Save ${options.town}`);

  if (options.token) console.log(`Save ${options.token}`);
};
initCLI();
