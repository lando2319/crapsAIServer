require('dotenv').config({path:__dirname+'/.env'})
const fs = require("fs");
var getCleanError = require("./utility/getCleanError.js");

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

(async () => {
    try {
        const response = await openai.createImageVariation(
            fs.createReadStream("/Users/mikeland/Downloads/salesmanFinal copy.png"),
            1,
            "1024x1024"
        );
        image_url = response.data.data[0].url;

        console.log("image_url");
        console.log(image_url);
        process.exit(0)
    } catch (err) {
        console.log("err")
        console.log(err)
        console.log(getCleanError.clean(err))
        process.exit(1)
        
    }
})();

