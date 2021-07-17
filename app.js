// Load module readline using const
const readline = require('readline');

// Load module Twitter
const Twitter = require('twitter');

// Load module dotenv
const dotenv = require('dotenv');

// run config
dotenv.config();

// Create a new Twitter client
const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

// Function that posts a tweet using the client
function postTweet(tweet) {
  client.post('statuses/update', { status: tweet }, function(err, data, response) {
    if (err) {
      console.log('Error: ', err);
    } else {
      console.log('Success: ', data);
    }
  });
}

// Create a new readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user "What's on your mind" with newline then close the interface
rl.question('What\'s on your mind?\n', (answer) => {
  // Post the tweet
  postTweet(answer);
  // Close the interface
  rl.close();
}
);