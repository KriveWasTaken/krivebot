const Discord = require('discord.js');
const figlet = require('figlet');

exports.run = async (client, message, args) => {
    let text = args.join('\n');
    if (!text) return client.error(message, 'Nie podałeś textu do przerobienia!');

    figlet(text, function(err, data) {
        if (err) {
            return client.error(message, `\`\`\`${err}\`\`\``);
        }

        let embed = new Discord.MessageEmbed()
            .setTitle('Wygenerowano')
            .setDescription(`\`\`\`${data}\`\`\``)
            .setFooter(client.footer)
            .setColor('GREEN')

        message.channel.send(embed);
    })
};

exports.help = {
    name: "ascii",
    description: "Generuje tekst ascii",
    category: "fun"
}