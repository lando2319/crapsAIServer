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
            training_file: "file-ZLoZVDfmO9Uur7UUUWa0GAKi",
            model: "davinci",
            n_epochs: 12
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

// Core file: file-bwQ2C8WUkpRz9qliejJFggM0
// OG File: file-peGiB9Vf7zniWF1qj0L4Y1IC

// OG Model: "davinci:ft-personal-2023-02-26-12-50-08",
// ADDED CORE
