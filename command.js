const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'create',
    description: 'creates a short url',
  },
];

// new changes
const TOKEN = 'YOUR_BOT_TOKEN'; 
const CLIENT_ID = 'YOUR_CLIENT_ID';

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
