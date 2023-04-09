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
        // var sorted = response.data.data.sort((a, b) => (a.created > b.created) ? 1 : -1)
        // console.log(sorted);

        // THIS LON STRING
        // LON

        // LATEST
        // file-ZLoZVDfmO9Uur7UUUWa0GAKi
        // ft-qIZ4DVpoNOAi8ejemp6A7Vc0
        process.exit(0);
    } catch (err) {
        console.log("Error");
        process.exit(1);
    }
})();