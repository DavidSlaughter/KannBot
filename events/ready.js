module.exports = {
    "name": "ready",
    "once": true,
    execute(client) {
      console.log(`${client.user.id} successfully logged in!`);
    }
  }