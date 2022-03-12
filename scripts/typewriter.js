/*
 *          Ferit Yigit BALABAN <fyb@duck.com>, 2022
 */
let createdElements = 0;
const speed = 25; /* Duration between each printed character */
const banner =
    ' ,,                   ,,           ,,                             \n' +
    '*MM                 `7MM          *MM                             \n' +
    ' MM                   MM           MM                             \n' +
    ' MM,dMMb.   ,6"Yb.    MM   ,6"Yb.  MM,dMMb.   ,6"Yb.  `7MMpMMMb.  \n' +
    ' MM    `Mb 8)   MM    MM  8)   MM  MM    `Mb 8)   MM    MM    MM  \n' +
    ' MM     M8  ,pm9MM    MM   ,pm9MM  MM     M8  ,pm9MM    MM    MM  \n' +
    ' MM.   ,M9 8M   MM    MM  8M   MM  MM.   ,M9 8M   MM    MM    MM  \n' +
    ' P^YbmdP\'  `Moo9^Yo..JMML.`Moo9^Yo.P^YbmdP\'  `Moo9^Yo..JMML  JMML.'

window.onload = async function orchestrate() {
    let texts = [
        "Initializing boot...",
        "Loading BALABAN OS on x86_64 host...",
        "31 GiB of RAM detected...",
        "Launching interface...",
    ]
    await type(texts, true, 0.01);
    await sleep(1500);
    document.getElementById("content").innerHTML = '';
    texts = [
        banner,
        "# Looks like you've lost your way.",
        "# Here, take this. *hands you a magic window*"
    ]
    await type(texts);
    await ask("Go to homepage");
}

async function type(texts, useTimestamp, startingPoint) {
    let counter = startingPoint;
    for (let i = 0; i < texts.length; i++) {
        let text = texts[i];
        if (useTimestamp){
            text = `[${counter}] ${text}`;
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
        document.getElementById(aName).innerHTML += question[iterator];
        await sleep(speed);
        iterator++;
    }
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function removeLastChar(fromThis){
    return fromThis.substring(0, fromThis.length - 1);
}