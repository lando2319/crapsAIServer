
require('dotenv').config({path:__dirname+'/.env'})

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

(async () => {
    try {
        const response = await openai.createCompletion({
            model: "davinci:ft-personal-2023-02-18-11-24-07",
            prompt: "what does a $4 Horn Bet pay?",
            max_tokens: 30,
            temperature: 0,
        });

        console.log(response.data);
        process.exit(0);
    } catch (err) {
        console.log("Error");
        console.log(err.data);
        process.exit(1);
    }
})();
