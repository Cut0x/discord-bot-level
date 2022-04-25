const { Client, Intents, Collection } = require("discord.js");
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ],
    partials: [
        "CHANNEL",
        "MESSAGE"
    ]
});

module.exports = client;

client.config = require("./Data/Bot");

client.aliases = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();

client.db = require("quick.db");

["H-Events", "H-Slash"].forEach((handler) => {
    require(`./Handlers/${handler}`)(client)
});

client.login(client.config.token);
