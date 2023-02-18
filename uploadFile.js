require('dotenv').config({path:__dirname+'/.env'})
const fs = require("fs");

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// console.log(process.env.OPENAI_API_KEY);
(async () => {
    try {
        const response = await openai.createFile(
            fs.createReadStream(`${__dirname}/trainingData/hornBet.jsonl`),
            "fine-tune"
        );

        console.log(response);
    } catch (err) {
        console.log("ERROR");
        console.log(err);
    }
})()
