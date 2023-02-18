require('dotenv').config({path:__dirname+'/.env'})

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

(async () => {
    try {
        const response = await openai.listFineTunes();

        console.log(response.data.data);
        process.exit(0);
    } catch (err) {
        console.log("Error");
        process.exit(1);
    }
})();