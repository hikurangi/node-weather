# node-weather
A command-line based Node.js weather app from the Codeburst.io tutorial found [here](https://codeburst.io/build-a-simple-weather-app-with-node-js-in-just-16-lines-of-code-32261690901d).

## To use:
You'll need Node.js installed and NPM (packaged with Node) *or* Yarn, depending on your favourite flavour of package manager.

1. Enter `git clone https://github.com/hikurangi/node-weather.git && cd node-weather`.
2. Then `npm i` or `yarn` to install dependencies.
3. Get an API key from [https://openweathermap.org/](openweathermap.org).
4. Create a `.env` file in the node-weather folder and add the following line with your API key where it belongs, as in: `OWM_KEY=your key here`.
5. Check the weather in your city by running `node index.js` with the flag `-c` followed by the name of your city: `node index.js -c Eketahuna` and so on.
6. Enjoy!
