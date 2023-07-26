import chalk from "chalk";

import dedent from "dedent";

const printError = (error) => {
  console.log(chalk.bgRed("Error") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgBlue("Success") + " " + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyanBright("  HELP  ")}
    Без параметров - вывод погоды
    -s [CITY] для установки Города
    -h для вывода помощи
    -token [API_KEY] для сохранения токена
    `
  );
};

export { printError, printSuccess, printHelp };
