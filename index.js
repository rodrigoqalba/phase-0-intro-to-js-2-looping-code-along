// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
 
}

const gifts = ["teddy bear","drone","doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);
*/

function writeCards(names, eventName){
    let writtenLetters = [];
    for (let c = 0; c < names.length; c++){
       writtenLetters.push(`Thank you, ${names[c]}, for the wonderful ${eventName} gift!`);
    }
    return writtenLetters;
};
 
function countDown(startingNumber){
    let userNumber = startingNumber;
    while (0 <= startingNumber ){
        console.log(startingNumber --);
    } 
}

countDown(10);