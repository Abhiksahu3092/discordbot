require('dotenv').config()
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { askGemini } = require('./gemini');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers] });

client.on("messageCreate",async (message)=>{
    if(message.author.bot){
        return;
    }

    //console.log(message.content);

    /*if(message.content.startsWith("create")){
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

    }*/


                

    const content = message.content.trim();

    if (content.startsWith("ask gemini ")) {
        const prompt = content.slice(11).trim();
        if (!prompt) {
            return message.reply("Please provide a question or prompt.");
        }

        try {
            const ans = await askGemini(prompt);
            return message.reply(ans);
        } catch (err) {
            console.error("Bot error:", err);
            return message.reply("There was an error talking to Gemini.");
        }
    }
    else{
        message.reply({
            content: `Hi from bot 👋
        
        1.To ask Gemini something, just type your question like:
        **Ask gemini "your prompt"**
        
        Gemini will respond with an answer to your query. Feel free to ask anything!`
        });
    }

})

client.on("interactionCreate", (interaction)=>{
    interaction.reply({
        content:"pong!!!"
    })
})


client.login(process.env.TOKEN);