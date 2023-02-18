require('dotenv').config({path:__dirname+'/.env'})

var getCleanError = require("./utility/getCleanError.js");

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

(async () => {
    try {
        const response = await openai.cancelFineTune("ft-xxxxxx");
        console.log(response.data);
        
    } catch (err) {
        console.log("ERROR");
        console.log(getCleanError.clean(err));
    }
})();
