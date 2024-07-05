// index.js

// Function to generate thank you messages
function writeCards(namesArray) {
  let thankYouMessages = [];
  for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful surprise gift!`); // Adjusted message
  }
  return thankYouMessages;
}

module.exports = {
  writeCards: writeCards
};
// index.js

// Function to countdown from a number and log each number
function countDown(startingNumber) {
  for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
  }
}

module.exports = {
  countDown: countDown // Export the countDown function
};
