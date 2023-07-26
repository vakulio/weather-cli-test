#!/usr/bin/env node

import { printHelp, printSetup } from "./services/log.service.js";
import { program } from "commander";
import { saveToken } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";




const initCLI = () => {
  program
    .option("-s, --town <char>")
    .option("-h, --help")
    .option("-token, --token <char>")
    .option("-w, --setup");
  program.parse();
  const options = program.opts();
  if (options.help) return printHelp();

  if (options.town) return console.log(`Save ${options.town}`);

  if (options.token) return saveToken(options.token);

  if (options.setup) return printSetup();

   getWeather('brest')
  
};
initCLI();
