const { getRandomQuote } = require("../quotes");

module.exports = {
    "name": "messageCreate",
    "once": false,
    execute(message) {
      // If message is sent from bot itself, ignore it. To avoid infinite loops.
      if (message.member.id === message.client.user.id) { return }
  
      // Harry Potter easter egg.
      if (message.content.toLowerCase().includes('harry')) {
        message.channel.send("You're a wizard, Harry.");
      }

      // If I sent the message
      if (message.member.id === "298634742541189122"){

        // Send random chess quote
          if (message.content === "!quote"){
              const quote = getRandomQuote();
              message.channel.send(`♔     ${quote}     ♔`);
          }

        // Hammy quote
          if (message.content === "!quote hammy" || message.content === "!quote Hammy"){
              message.channel.send("♔     Sometimes I think tactics is as much about preventing tactics as much as it is about finding them. - Hammy     ♔");
          }
      }
  
    }
  }