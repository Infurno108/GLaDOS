//command to ask the bot for a hint for a specific chamber. Each time the command is used chatGPT will be called to generate a response based on my detailed explanation on how the puzzle should be solved.
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("GLaDOS wil give you a hint for a specific chamber."),
  async execute(interaction) {
    //here is where the commands code goes
    await interaction.reply("Cake.");
  },
};
