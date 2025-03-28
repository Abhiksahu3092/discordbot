const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'create',
    description: 'creates a short url',
  },
];

// new changes
const TOKEN = 'MTM0NzA5NDE2NzA0NTY3MzAyMg.GqXCfu.wbcINk5NwqWqL8BYb1uMaLqHJ23NXsSv9bLT5s'; 
const CLIENT_ID = '1347094167045673022';

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
