/*
 *          Ferit Yigit BALABAN <fyb@duck.com>, 2022
 */
let createdElements = 0;
let blinking_cursor = false;
const speed = 10; /* Duration between each printed character */
const banner =
    ' ,,                   ,,           ,,                             \n' +
    '*MM                 `7MM          *MM                             \n' +
    ' MM                   MM           MM                             \n' +
    ' MM,dMMb.   ,6"Yb.    MM   ,6"Yb.  MM,dMMb.   ,6"Yb.  `7MMpMMMb.  \n' +
    ' MM    `Mb 8)   MM    MM  8)   MM  MM    `Mb 8)   MM    MM    MM  \n' +
    ' MM     M8  ,pm9MM    MM   ,pm9MM  MM     M8  ,pm9MM    MM    MM  \n' +
    ' MM.   ,M9 8M   MM    MM  8M   MM  MM.   ,M9 8M   MM    MM    MM  \n' +
    ' P^YbmdP\'  `Moo9^Yo..JMML.`Moo9^Yo.P^YbmdP\'  `Moo9^Yo..JMML  JMML.'

const banner2 =
    ' .o8                 oooo             .o8                                                    \n' +
    '"888                 `888            "888                                                    \n' +
    ' 888oooo.   .oooo.    888   .oooo.    888oooo.   .oooo.   ooo. .oo.        .ooooo.   .oooo.o \n' +
    ' d88\' `88b `P  )88b   888  `P  )88b   d88\' `88b `P  )88b  `888P"Y88b      d88\' `88b d88(  "8 \n' +
    ' 888   888  .oP"888   888   .oP"888   888   888  .oP"888   888   888      888   888 `"Y88b.  \n' +
    ' 888   888 d8(  888   888  d8(  888   888   888 d8(  888   888   888  .o. 888   888 o.  )88b \n' +
    ' `Y8bod8P\' `Y888""8o o888o `Y888""8o  `Y8bod8P\' `Y888""8o o888o o888o Y8P `Y8bod8P\' 8""888P\' '

window.onload = async function orchestrate() {
    let texts = [
        "Initializing boot...",
        "AND Myzen 9 6800Q with Madeon Graphics (16) 6.9 GHz detected...",
        "31 GiB of RAM detected...",
        "Status: tty1 is online, waiting input",
        "Loading BALABAN OS on x86_64 host...",
        "Launching terminal user interface...",
        "Welcome back to BALABAN OS!",
    ]
    await type(texts, true, 0.01);
    await sleep(1500);
    document.getElementById("content").innerHTML = '';
    texts = [
        banner2,
        " ",
        "# Looks like you've lost your way.",
        "# Here, take this. *hands you a magic window*"
    ]
    await type(texts);
    await ask("> Go to homepage");
    document.getElementById("content").innerHTML += `<span id="blinking_cursor">|</span>`;
    await blink(500);
}

async function type(texts, useTimestamp, startingPoint) {
    let counter = startingPoint;
    for (let i = 0; i < texts.length; i++) {
        let text = texts[i];
        if (useTimestamp){
            text = `[${counter.toString().substring(0, 4)}] ${text}`;
        }

        let paragraphName = "pg" + createdElements;
        document.getElementById("content").innerHTML += `<p id='${paragraphName}'></p>`;
        createdElements++;

        let iterator = 0;
        // This while loop prints given sentence character by character
        while (iterator < text.length) {
            // Removes last character, if this is the first run it won't have effect, otherwise it'll remove the |
            document.getElementById(paragraphName).innerHTML = removeLastChar(document.getElementById(paragraphName).innerHTML);

            // If next character is space, append non-breaking space instead. innerHTML and innerText doesn't accept multiple spaces
            if (text[iterator] === ' ') {
                document.getElementById(paragraphName).innerHTML += '&nbsp;|'
                // Don't sleep after printing a space character, this will speed things up and look better
            }
            else {
                document.getElementById(paragraphName).innerHTML += text[iterator] + '|';
                await sleep(speed);
            }
            iterator++;
        }
        // Removes last character (which is the long thing |)
        document.getElementById(paragraphName).innerHTML = removeLastChar(document.getElementById(paragraphName).innerHTML);
        counter += speed * 0.01;
    }
}

async function ask(question) {
    let aName = 'a' + createdElements;
    document.getElementById("content").innerHTML += `<a href="https://balaban.software/" id="${aName}"></a>`
    createdElements++;

    let iterator = 0;
    while (iterator < question.length){
        // Removes last character, if this is the first run it won't have effect, otherwise it'll remove the |
        document.getElementById(aName).innerHTML = removeLastChar(document.getElementById(aName).innerHTML);
        document.getElementById(aName).innerHTML += `${question[iterator]}|`;
        await sleep(speed);
        iterator++;
    }
    document.getElementById(aName).innerHTML = removeLastChar(document.getElementById(aName).innerHTML);
}

async function blink(milliseconds) {
    setInterval(() => {
        if(blinking_cursor) {
            document.getElementById('blinking_cursor').style.opacity = 0;
            blinking_cursor = false;
        }
        else {
            document.getElementById('blinking_cursor').style.opacity = 1;
            blinking_cursor = true;
        }
    }, milliseconds);
}

async function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function removeLastChar(fromThis){
    return fromThis.substring(0, fromThis.length - 1);
}