# weather-display

## Description

Weather Display is a command-line weather app that allows you to retrieve weather information for a given city using the OpenWeatherMap API. The app provides current weather conditions, including temperature, humidity, wind speed, and more.

## Installation

To use the Weather Display app, you need Node.js installed on your system. If you don't have Node.js, you can download it from the official website: https://nodejs.org/

1. Clone the repository or download the source code.

2. Navigate to the project directory.

3. Install the required dependencies using npm:

```bash
npm install
```

## Usage

The Weather Display app is designed to be used as a command-line tool. Once installed, you can run it using the `weather` command.

### Command-Line Options

- To display weather information for the city you previously set, simply run the app without any parameters:

```bash
weather
```

- To set the city for which you want to get weather information, use the `-s` or `--town` option, followed by the city name:

```bash
weather -s New York
```

- To set your API token for accessing the OpenWeatherMap API, use the `-token` option, followed by your API key:

```bash
weather -token YOUR_API_KEY
```

- To see the setup instructions and how to obtain and set your API token, use the `-w` or `--setup` option:

```bash
weather -w
```

- To display the help message, use the `-h` or `--help` option:

```bash
weather -h
```

### Examples

1. Set the city to "London" and display weather information for London:

```bash
weather -s London
```

2. Set your API token:

```bash
weather -token YOUR_API_KEY
```

3. Display weather information for the city you previously set:

```bash
weather
```

4. See the setup instructions:

```bash
weather -w
```

## Data Storage

The Weather Display app uses a JSON file to store your API token and the city you set. The file is located at `weather-app-data.json` in your home directory.

## Troubleshooting

- If you encounter any errors, the app will provide relevant error messages to help you diagnose the issue.

- If you see the message "Invalid town," it means the city you provided is not valid or doesn't exist in the OpenWeatherMap database.

- If you see the message "Invalid token," it means the API token you provided is invalid.

## Acknowledgments

The Weather Display app uses the OpenWeatherMap API to fetch weather data. Special thanks to OpenWeatherMap for providing the weather data.
