
const { Client, Events, GatewayIntentBits } = require('discord.js');


//dotev
const dotenv = require ('dontenv')  
dotenv.config()
const { TOKEN, CLIENT_ID, GUILD_ID } = process.dontenv 


const client = new Client({ intents: [GatewayIntentBits.Guilds] })

 
client.once(Events.ClientReady, c => {
	console.log(`finalmente! Login realizado como ${c.user.tag}`)
});

client.login(token) 