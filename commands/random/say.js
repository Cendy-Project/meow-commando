const { Command} = require('discord.js-commando')

module.exports = class sayCommand extends Command{

    constructor(client) {

        super(client, {
            name: 'say',
            memberName: 'say',
            group: 'test',
            aliases: ['echo', 'repeat'],
            description: 'A command that repeats whatever you say.',
            details: "Make me repeat your wordsmaking it look like I'm a parrot",
            examples: ['==say Hello World', '==repeat Who Am I?'],
            clientPermissions: ["MANAGE_MESSAGES"],
            args: [{
                key: 'text',
                prompt: 'What do you wish for me to say?',
                type: 'string'
            }]
        })

    }

    run(msg, { text }) {
        msg.say(text)
        return msg.delete()
    }

}