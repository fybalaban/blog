/*
 *          Ferit Yigit BALABAN <fyb@duck.com>, 2022
 */
let createdElements = 0;
let blinking_cursor = false;
const speed = 10; /* Duration between each printed character */
const banner =
    "    ,...         ,,                           ,,                    \n" +
    "  .d' \"\"        *MM                         `7MM                    \n" +
    "  dM`            MM                           MM                    \n" +
    " mMMmm`7M'   `MF'MM,dMMb.`7M'   `MF'     ,M\"\"bMM  .gP\"Ya `7M'   `MF'\n" +
    "  MM    VA   ,V  MM    `Mb `VA ,V'     ,AP    MM ,M'   Yb  VA   ,V  \n" +
    "  MM     VA ,V   MM     M8   XMX       8MI    MM 8M\"\"\"\"\"\"   VA ,V   \n" +
    "  MM      VVV    MM.   ,M9 ,V' VA.  ,, `Mb    MM YM.    ,    VVV    \n" +
    ".JMML.    ,V     P^YbmdP'.AM.   .MA.db  `Wbmd\"MML.`Mbmmd'     W     \n" +
    "         ,V                                                         \n" +
    "      OOb\"                                                          "
/* Banner created at https://textkool.com/en/ascii-art-generator using font Georgia11 */

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
        banner,
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
    document.getElementById("content").innerHTML += `<a href="index.html" id="${aName}"></a>`
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