// let string = "Hello, World!";

// console.log(string.toUpperCase());
let string = "Hello";

function shout(string){
    return string.toUpperCase();
}
function whisper(string){
    return string.toLowerCase();
}
function logShout(string){
    console.log(shout("Hello"));
}
function logWhisper(string){
    console.log(whisper("Hello"));
}
function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        return "I can\'t hear you!";
    }
    else if (string === string.toUpperCase()){
        return "YES INDEED!";
    }
    else if (string === 'Let\'s have dinner together!'){
        return "I would love to!";
    }
}


