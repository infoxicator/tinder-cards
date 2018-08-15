const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  actors: store.collection('actors'),
  users: store.collection('users')
};
