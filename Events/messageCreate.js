const client = require("../main");
const { CreateUser } = require("../Data/Users");

client.on("messageCreate", async message => {
    if (message.author.bot) return;

    if (client.db.get(`user_${message.author.id}`) === null) {
        CreateUser(message.author, message.createdTimestamp);

        const channelLogs = client.guilds.cache.get("966010255597248632").channels.cache.find(channel => channel.id === "967987800060342312");

        message.react("✅");

        channelLogs.send({
            content: `:white_check_mark: Utilisateur \`${message.author.username}\` créé dans la **bdd**.`
        });
    } else {
        if (client.db.get(`user_${message.author.id}.xp`) >= client.db.get(`user_${message.author.id}.xp_limite`)) {
            const xp = Math.floor((Math.random() * 100)) + 1;

            client.db.add(`user_${message.author.id}.xp_limite`, 500)
            client.db.add(`user_${message.author.id}.level`, 1)

            const channelLogs = client.guilds.cache.get("966010255597248632").channels.cache.find(channel => channel.id === "967987800060342312");

            channelLogs.send({
                content: `<:1787raidenshrug:967886613222928445> ${message.author} passe au **niveau ${client.db.get(`user_${message.author.id}.level`)}** !`
            });
        } else {
            const xp = Math.floor((Math.random() * 100)) + 1;

            client.db.add(`user_${message.author.id}.xp`, xp)
        }
    }
});