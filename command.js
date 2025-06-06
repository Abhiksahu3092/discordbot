const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'create',
    description: 'creates a short url',
  },
];

// new changes

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () =>{
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();
