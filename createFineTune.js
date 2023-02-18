require('dotenv').config({path:__dirname+'/.env'})
var getCleanError = require("./utility/getCleanError.js");

var util = require('util');

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

(async () => {
    try {
        const response = await openai.createFineTune({
            training_file: "file-AdlXs0tjdUcmy9rGCEVmScap",
            model: "davinci",
            n_epochs: 8
        });

        console.log("SUCCESS");
        console.log(response.data);
        process.exit(0);
    } catch (err) {
        console.log("ERROR");
        console.log(getCleanError.clean(err));
        process.exit(1);
    }
})();