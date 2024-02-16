// Function to generate a random username with variations
function generateRandomUsername() {
  const adjectives = [
    "Happy",
    "Sunny",
    "Lucky",
    "Cheerful",
    "Gentle",
    "Brave",
    "Vivid",
    "Fierce",
    "Clever",
    "Radiant",
    "Wise",
    "Glorious",
    "Daring",
    "Majestic",
    "Dynamic",
    "Energetic",
    "Spirited",
    "Enchanting",
    "Adventurous",
    "Magical",
    "Fantastic",
    "Whimsical",
    "Playful",
    "Vibrant",
    "Zesty",
    "Jovial",
    "Bubbly",
    "Dazzling",
  ];
  const nouns = [
    "Cat",
    "Dog",
    "Bird",
    "Tiger",
    "Lion",
    "Bear",
    "Elephant",
    "Fox",
    "Dragon",
    "Panda",
    "Eagle",
    "Wolf",
    "Rabbit",
    "Unicorn",
    "Phoenix",
    "Koala",
    "Giraffe",
    "Penguin",
    "Dolphin",
    "Squirrel",
    "Leopard",
    "Owl",
    "Kangaroo",
    "Hawk",
    "Zebra",
    "Octopus",
    "Seagull",
    "PolarBear",
    "Butterfly",
  ];
  const words = [
    "Rainbow",
    "Star",
    "Moon",
    "Sunshine",
    "Ocean",
    "Mountain",
    "Forest",
    "River",
    "Breeze",
    "Flower",
    "Raindrop",
    "Snowflake",
    "Cloud",
    "Dream",
    "Magic",
    "Adventure",
    "Journey",
    "Wonder",
    "Whisper",
    "Giggles",
    "Laughter",
    "Smiles",
    "Hope",
    "Peace",
    "Harmony",
    "Joy",
    "Love",
    "Friendship",
    "Happiness",
    "Dreamer",
  ];
  const numbers = Math.floor(Math.random() * 1000); // Generate a random 3-digit number
  const useSpace = Math.random() < 0.5; // Randomly decide whether to include a space
  const useUnderscore = Math.random() < 0.3; // Randomly decide whether to use underscore
  const arrays = [adjectives, nouns, words]; // Array of arrays

  const usernameParts = [];
  for (let i = 0; i < 2; i++) {
    const randomArrayIndex = Math.floor(Math.random() * arrays.length);
    const array = arrays[randomArrayIndex];
    const randomIndex = Math.floor(Math.random() * array.length);
    usernameParts.push(array[randomIndex]);
  }

  const username = usernameParts.join(
    useSpace ? " " : useUnderscore ? "_" : ""
  );

  return username;
}

module.exports = generateRandomUsername;
