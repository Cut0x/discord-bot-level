const client = require("../main");

client.on("ready", () => {
    console.log("Je suis allumé !")

    client.user.setActivity("Minecraft 1.16.5")
});