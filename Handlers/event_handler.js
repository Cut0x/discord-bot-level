const { Client } = require('discord.js');
const fs = require('fs');

/**
   *
   * @param {Client} client
   */

module.exports = (client) => {
    try {
        fs.readdirSync("./Events/").forEach((file) => {
            const events = fs.readdirSync("./Events/").filter((file) =>
              file.endsWith(".js")
            );
            for (let file of events) {
              let pull = require(`../Events/${file}`);
              if (pull.name) {
                client.events.set(pull.name, pull);
              }
            }
          });
    } catch (e) {
        console.log(e.message);
    }
};