
require('dotenv').config({path:__dirname+'/.env'})

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

(async () => {
    try {
        const response = await openai.createCompletion({
            // model: "davinci:ft-personal-2023-02-26-12-50-08",
            model: 'davinci:ft-personal-2023-03-26-13-07-18',
            // model: "babbage",
            // model: "ada",
            // prompt: "what's 4 plus another 8",
            prompt: "what does a $4 Horn Bet pay?",
            // prompt: "what does a $5 place bet on Nine pay?",
            max_tokens: 80,
            temperature: 0.2,
            // n:3,
            // best_of:3 // Expensive
        });

        console.log(response.data);
        process.exit(0);
    } catch (err) {
        console.log("Error");
        console.log(err);
        process.exit(1);
    }
})();

