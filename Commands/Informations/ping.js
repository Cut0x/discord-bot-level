const { CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Envoie la latence du bot.",
    permissions : [],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const embed = new MessageEmbed()
            .setColor("BLURPLE")
            .setDescription(`:ping_pong: J'ai actuellement **${client.ws.ping} ms**.`)
        interaction.reply({ embeds: [ embed ] });
    },
};