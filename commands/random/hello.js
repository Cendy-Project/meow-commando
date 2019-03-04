const { Command } = require('discord.js-commando')
module.exports = class helloCommand extends Command{
    constructor(client) {
    super(client, {
        name: 'hello',
        aliases: ['hi'],
        group: 'random',
        memberName: 'hello',
        description: 'Say hello!',
        examples: ['!hello']
    })
}
run(msg, { input }) {
msg.say('Hello!')
}
}