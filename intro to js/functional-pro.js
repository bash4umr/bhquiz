/* Task 1:
 Build a function-based
console log message generator */

function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`

    console.log(message, style);
}
//Invoke consoleStyler function
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');


/* Task 2:
Build another 
console log message generator */

function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px;"
    if(reason == "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if(reason == "Champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else{
        console.log('reason', fontStyle);
    }
}
//Invoke celebrateStyler function
celebrateStyler('birthday');

/* Task 3:
Insert a congratulatory
and custom message */

function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);
    celebrateStyler(reason);
}
//Call the styleAndCelebrate funtion
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
