const userName = `Devon`;

if (userName === ``) {
    console.log(`Hello!`)
} else {
    console.log(`Hello ${userName}!`)
}
const userQuestion = `Will civilization crumble before ${userName} gets a job as a Software Engineer?`
console.log(userQuestion)

var randomNumber = Math.floor(Math.random() * 8);
var eightBall;
if (randomNumber === 1) {
    eightBall = (`It will definitly happen`)
} else if (randomNumber === 2) {
    eightBall = (`It will most likely happen`)
} else if (randomNumber === 3) {
    eightBall = (`It will probably happen`)
} else if (randomNumber === 4) {
    eightBall = (`It may happen`)
} else if (randomNumber === 5) {
    eightBall = (`It may not happen`)
} else if (randomNumber === 6) {
    eightBall = (`It will probably not happen`)
} else if (randomNumber === 7) {
    eightBall = (`It will most likely not happen`)
} else if (randomNumber === 8) {
    eightBall = (`It will definitly not happen`)
} else if (randomNumber === 0) {
    eightBall = (`Oh my isn't someone feeling dramatic today`)
}
console.log(eightBall);
