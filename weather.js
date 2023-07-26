#!/usr/bin/env node

import {
  printHelp,
  printSetup,
  printError,
  printWeather,
} from "./services/log.service.js";
import { program } from "commander";
import {
  saveToken,
  saveCity,
  getKeyValue,
  TOKEN_DICTIONARY,
} from "./services/storage.service.js";
import { getWeather, getIcon } from "./services/api.service.js";

const getForcast = async () => {
  try {
    const city = await getKeyValue(TOKEN_DICTIONARY.city);
    if (!city) {
      throw new Error("Please setup city first");
    }
    const weather = await getWeather(city);
    printWeather(weather, getIcon(weather.weather[0].icon));
  } catch (error) {
    if (error?.response?.status === 404) {
      console.log("Invalid town");
    } else if (error?.response?.status === 401) {
      console.log("Invalid token");
    } else {
      printError(error);
    }
  }
};

const initCLI = () => {
  program
    .option("-s, --town <char>")
    .option("-h, --help")
    .option("-token, --token <char>")
    .option("-w, --setup");
  program.parse();
  const options = program.opts();
  if (options.help) return printHelp();

  if (options.town) return saveCity(options.town);

  if (options.token) return saveToken(options.token);

  if (options.setup) return printSetup();
  getForcast();
};
initCLI();
