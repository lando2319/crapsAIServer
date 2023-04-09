require('dotenv').config({path:__dirname+'/.env'})
var getCleanError = require("./utility/getCleanError.js");

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

var myStory = "Why I Quit Being So Accommodating Yesterday was the fifth anniversary of my retirement from the business of being a Good Fellow. I use the word “business” advisedly. Until five years ago, if the city directory had told the truth, it would have listed after my name, as my real occupation, something like, “General Attender to Things,” or “Pinch Hitter,” or “Fine Old Scout.” I hope I am entitled in some measure to these designations even to-day. But I have quit being an accommodator and nothing else.  Five years ago yesterday it was, at two o’clock in the morning; I am not likely to forget the place or the hour."

var highlights = "Accomdating, Good Fellow, self-examination, Pinch Hitter";
var next = "gentleman walking down the street in the rain, noir, crime ridden city";
var next2 = "'Death of a salesman' stencil person sitting at a desk";

(async () => {
    try {

        const response = await openai.createImage({
            prompt: myStory,
            n: 1,
            size: "1024x1024",
        });
        var image_url = response.data.data[0].url;
        
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

