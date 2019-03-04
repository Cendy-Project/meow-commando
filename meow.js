const Commando = require('discord.js-commando');
const path = require('path');
const config = require('./config.json')
//client setup
const client = new Commando.Client({
    commandPrefix: config.prefix,
    owner: config.ownerID,
    disableEveryone: true,
    unknownCommandResponse: false
})
//register commands
client.registry
.registerDefaultTypes()
.registerGroups([
    ['random', 'random:']
])
.registerDefaultGroups()
.registerDefaultCommands()
.registerCommandsIn(path.join(__dirname, 'commands'))
//events
client.on('ready', () => {
console.log('Logged in')
})
//login to client
client.login(config.token)