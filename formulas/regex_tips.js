// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.
// Here's an example:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
// Here the first match would return ["Hello"] and the second would return ["expressions"].



let testStr = "Repeat, Repeat, Repeat";
let ourrRegex = /Repeat/;
testStr.match(ourrRegex);
// Here match would return ["Repeat"].
// To search or extract a pattern more than once, you can use the global search flag: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
// And here match returns the value ["Repeat", "Repeat", "Repeat"]
// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
// NoteYou can have multiple flags on your regex like /search/gi




// The wildcard character . will match any one character. The wildcard is also called dot and period. 
// You can use the wildcard character just like any other character in the regex. For example,
//  if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
// Both of these test calls would return true.
// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun.
//  Your regex should use the wildcard character.