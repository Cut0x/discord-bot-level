const { CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "rank",
    description: "Donne les niveaux d'un membre.",
    options: [
        {
            name: "user",
            description: "Choisi un utilisateur pour voir son avancement.",
            type: 6,
            required: false
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const member = interaction.options.getUser("user") ?? interaction.user;

        const embed = new MessageEmbed()

        if (client.db.get(`user_${member.id}`) === null) {
            embed.setColor("RED")
            embed.setDescription(":warning: L'utilisateur <@" + member + "> n'est pas enregistré dans ma **bdd**.")

            interaction.reply({
                embeds: [
                    embed
                ],
                ephemeral: true
            })
        } else {
            let xp = client.db.get(`user_${member.id}.xp`) ?? 0;
            let xp_limite = client.db.get(`user_${member.id}.xp_limite`) ?? 0;

            embed.setColor("BLURPLE")
            embed.setTitle(`Rank de ${member.username} :`)
            embed.setDescription(`Niveau **${client.db.get(`user_${member.id}.level`) ?? 0}**.\nUn total de **${xp}/${xp_limite} xp**.\nLui manque **${xp_limite - xp} xp** pour levelup.`)

            interaction.reply({
                embeds: [
                    embed
                ]
            })
        }
    },
};