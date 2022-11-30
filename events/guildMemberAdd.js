const { getRandomQuote } = require("../quotes");

module.exports = {
  "name": "guildMemberAdd",
  "once": false,
  execute(member) {
    console.log(`\n${member.displayName} joined the server!`);
    const randomQuote = getRandomQuote();
    const startMessage = "♙\n";
    const greeting = `Welcome to Kann-like-Karpov, <@${member.id}>!   🙂`;
    const introMessage = "Enjoy 1v1s and practice from the matchmaking channel, Caro-themed tournaments, chess help, general discussion, and more!";
    member.guild.systemChannel.send(`${startMessage}${greeting}\n\n${introMessage}\n\n♔      ${randomQuote}      ♔\n`);
  }
}