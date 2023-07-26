import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";
import { printError, printSuccess, printInfo } from "./log.service.js";

const filePath = join(homedir(), "weather-app-data.json");

const TOKEN_DICTIONARY = {
  token: "token",
  city: "city",
};

const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    try {
      const data = JSON.parse(file);
      return data[key];
    } catch (error) {
      console.log(error);
    }
  }

  return undefined;
};

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }
};

const saveToken = async (token) => {
  if (token.length < 32) {
    printError(`The token must be at least 32 characters, now ${token.length}`);
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token saved");
  } catch (error) {
    if (error instanceof SyntaxError) {
      promises.unlink(filePath);
      printInfo();
      saveToken(token);
    } else {
      console.log(error);
      printError(error.message);
    }
  }
};

const saveCity = async (city) => {
  if (city.length < 2 || city.length > 20) {
    printError(
      `The city must be at least 2 characters, and at most 20 characters, now ${city.length}`
    );
    return;
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("City saved");
  } catch (error) {
    if (error instanceof SyntaxError) {
      promises.unlink(filePath);
      printInfo();
      saveCity(city);
    } else {
      console.log(error);
      printError(error.message);
    }
  }
};

export { saveKeyValue, getKeyValue, saveToken, TOKEN_DICTIONARY, saveCity };
