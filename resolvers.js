const db = require('./db')

const Query = {
    actors: () => db.actors.list()
};

module.exports = { Query }