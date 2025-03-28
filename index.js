const { Client, Events, GatewayIntentBits } = require('discord.js');
const fetch = require("node-fetch");



const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers] });

client.on("messageCreate", async (message)=>{
    if(message.author.bot){
        return;
    }

    if(message.content.startsWith("create")){
        const url=message.content.split("create")[1].trim();
        if(!url){
            return message.reply({
                content:"Please provide a url"
            })
        }
        
        try {
            const response = await fetch("http://localhost:2000/output", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ url:url })
            });

            const data = await response.json();
            return message.reply({ content: `Here is your shorturl: http://localhost:2000/output/${data.id}` });
        } catch (error) {
            console.error("Error:", error);
            return message.reply({ content: "Failed to reach the API." });
        }

    }


    message.reply({
        content:"Hi from bot"
    });
})

client.on("interactionCreate", (interaction)=>{
    interaction.reply({
        content:"pong!!!"
    })
})


client.login("MTM0NzA5NDE2NzA0NTY3MzAyMg.GqXCfu.wbcINk5NwqWqL8BYb1uMaLqHJ23NXsSv9bLT5s");