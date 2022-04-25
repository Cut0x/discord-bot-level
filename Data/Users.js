const client = require("../main");

async function CreateUser(author, date) {
    client.db.set(`user_${author.id}`, {
        level: 1,
        xp: 0,
        xp_limite: 1500,
        createDb: date
    })
    console.log(`Utilisateur "${author.username}" bien ajouté à la BDD.`)
};

module.exports = {
    CreateUser
};