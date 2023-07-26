import chalk from "chalk";

import dedent from "dedent";

const printError = (error) => {
  console.log(chalk.bgRed("  Error  ") + " " + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgBlue("  Success  ") + " " + message);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyanBright("  HELP  ")}
    No parameters - weather output
    -s [CITY] to set City
    -h to display help
    -token [API_KEY] save the token
    -w how to setup
    `
  );
};

const printInfo = () => {
  console.log(
    dedent`${chalk.bgYellow("  INFO  ")}
    The file was previously damaged,
    then removed and a new one created.`
  );
};

const printSetup = () => {
  console.log(
    dedent`${chalk.bgGray("       SETUP       ")}
    You must obtain a token from the ${chalk.blue("openweathermap.org")} 
    service and pass it to the command line, with command
    ${chalk.yellowBright("-token [API_KEY]")}. Then you get access to the functionality. 
    ${chalk.bgGray("  Have a nice day   ")}
    `
  );
};

export { printError, printSuccess, printHelp, printInfo, printSetup };
