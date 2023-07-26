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
    ${chalk.yellowBright(
      "-token [API_KEY]"
    )}. Then you get access to the functionality. 
    ${chalk.bgGray("  Have a nice day   ")}
    `
  );
};

const printWeather = (res, icon) => {
  console.log(dedent`${chalk.bgBlueBright("  WEATHER  ")} 
  Weather in the city ${chalk.bold.blue(res.name)}
  Sunrise: ${chalk.bold.green(
    new Date(res.sys.sunrise * 1000).toLocaleString()
  )}
  Sunset: ${chalk.bold.green(new Date(res.sys.sunset * 1000).toLocaleString())}
  ${icon} ${chalk.bold.green(res.weather[0].description)}
  🌡️   Temperature: ${chalk.bold.green(
    res.main.temp
  )} (feels like ${chalk.bold.green(res.main.feels_like)})
  🌊  Humidity: ${chalk.bold.green(res.main.humidity)}
  🎱  Pressure: ${chalk.bold.green(res.main.pressure)}
  🎐  Wind: 
        - Speed ${chalk.bold.green(res.wind.speed)}
        - Direction ${chalk.bold.green(res.wind.deg)}
        - Gust: ${chalk.bold.green(res.wind.gust)}
  👁️  Visibility: ${chalk.bold.green(res.visibility)} meters
  ☁️  Clouds: ${chalk.bold.green(res.clouds.all)}
  ⏲️  Time: ${chalk.bold.green(new Date(res.dt * 1000).toLocaleString())}
`);
};

export {
  printError,
  printSuccess,
  printHelp,
  printInfo,
  printSetup,
  printWeather,
};
