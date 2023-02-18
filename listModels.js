require('dotenv').config({path:__dirname+'/.env'})
var getCleanError = require("./utility/getCleanError.js");

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

(async () => {
    try {
        const response = await openai.listModels();

        console.log(response.data.data);
        process.exit(0);
    } catch (err) {
        console.log(getCleanError.clean(err))
        process.exit(1);
    }
})();

// Best Curry curie:ft-personal-2023-02-12-14-25-56