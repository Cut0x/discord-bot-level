const { MessageEmbed } = require("discord.js");
const client = require("../main");

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) {
        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd) return interaction.reply({
            embeds: [
                new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`:x: Une erreur est survenue.`)
            ],
            ephemeral: true
        });
    
        if (cmd) {
            if (!interaction.member.permissions.has(cmd.permissions || [])) {
                return interaction.reply({
                    embeds: [
                        new MessageEmbed()
                            .setColor("RED")
                            .setDescription(`:x: Il vous faut la permission \`${cmd.permissions}\`.`)
                    ],
                    ephemeral: true
                })
            }
            cmd.run(client, interaction);
        }
    }
})