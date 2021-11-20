const {MessageEmbed} = require("discord.js");
const r = require("rethinkdb")
const wait = require('util').promisify(setTimeout);
const cooldown = new Set;
module.exports = {
    name: "interactionCreate",
    once: true,

    async execute (client, interaction) {
        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);
        if (!command) return;
        try {
            await command.execute(client, interaction);
        } catch (error) {
            if (error) console.error(error);
            await interaction.reply({ content: 'Wystąpił błąd podczas uruchamiania komendy! Informacja została wysłana do programistów.'});
        }
    }
}