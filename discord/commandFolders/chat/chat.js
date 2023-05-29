const { SlashCommandBuilder } = require("discord.js");
const { Configuration, OpenAIApi } = require("openai");
const { apiKey } = require("./config.json");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Say this is a test",
  temperature: 0,
  max_tokens: 7,
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("chat")
    .setDescription("Have a quick chat with GLaDOS."),
  async execute(interaction) {
    //here is where the commands code goes
    await interaction.reply("Cake.");
  },
};
