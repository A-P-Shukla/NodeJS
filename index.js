// Import functions from postController.js
import getPosts, { getPostsLength} from "./postController.js";

// Log the posts and the number of posts
console.log(getPosts());
console.log(`Posts Length: ${getPostsLength()}`);

// The code below is commented out, but it shows how to import and use functions from utils.js
//const {generaterandomNumber, celciusToFahrenheit} = require('./utils');

//console.log(`Random Number: ${generaterandomNumber()}`);

//console.log(`Celcius to  fahrenheit: ${celciusToFahrenheit(0)}`);