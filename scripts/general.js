/*
 *          Ferit Yiğit BALABAN <fyb@duck.com>, 2022
 */
let pageInDirectory;

window.onload = function orchestrator() {
    if (window.location.href.includes("index.html")) {
        titleBar();
    }
    loadHeader();
    loadFooter();
}

function loadHeader() {
    const pageLink = window.location.href;
    console.log("Current page: " + pageLink);
    pageInDirectory = pageLink.includes("/projects/") || pageLink.includes("/posts/") || pageLink.includes("/templates/");
    if (pageInDirectory) {
        console.log("Using header for subfolder content");
        document.getElementById("header").innerHTML = `
<!-- This header is suitable for pages in subfolders -->
<div class="static">
    <img class="profile_picture" src="../resources/imgs/photo.png" alt="A cute picture of me!">
    <div class="title">
        <h1>Ferit Yiğit BALABAN</h1>
        <h2>Bilgisayar Mühendisliği öğrencisi</h2>
    </div>
</div>
<nav class="navigation">
    <a href="../index.html">Ana sayfa</a>
    <a href="../projects.html">Projelerim</a>
    <a href="../resume.html">Online Resume</a>
    <a href="../blog.html">Blog</a>
</nav>`;
    }
    else {
        console.log("Using header for root level content");
        document.getElementById("header").innerHTML = `
<!-- This header is suitable for pages on root -->
<div class="static">
    <img class="profile_picture" src="resources/imgs/photo.png" alt="A cute picture of me!">
    <div class="title">
        <h1>Ferit Yiğit BALABAN</h1>
        <h2>Bilgisayar Mühendisliği öğrencisi</h2>
    </div>
</div>
<nav class="navigation">
    <a href="index.html">Ana sayfa</a>
    <a href="projects.html">Projelerim</a>
    <a href="resume.html">Online Resume</a>
    <a href="blog.html">Blog</a>
</nav>`;
    }
}

function loadFooter() {
    document.getElementById("footer").innerHTML = "";
    if (pageInDirectory) {
        document.getElementById("footer").innerHTML = `
<!-- This footer is suitable for pages in subfolders -->
<h2>2022 (<i>copyleft</i>) Ferit Yiğit BALABAN </h2>
<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" title="Creative Commons Attribution 4.0 International License">
    <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="Creative Commons">
    <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Attribution">
    <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="NonCommercial">
    <img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="ShareAlike">
</a>
<a href="https://yesterweb.org/no-to-web3/"><img src="https://yesterweb.org/no-to-web3/img/roly-saynotoweb3.gif" alt="Say No to Web3!"></a>
<a href="../privacy.html" title="Gizliliğiniz hakkında"><img src="../resources/imgs/nocookie.gif" alt="This website does not use cookies."></a>
<hr>
<h4 class="monospaced">Created with <3 on <a href="https://www.jetbrains.com/webstorm/">JetBrains WebStorm</a></h4>`;
    }
    else {
        document.getElementById("footer").innerHTML = `
<!-- This footer is suitable for pages on root -->
<h2>2022 (<i>copyleft</i>) Ferit Yiğit BALABAN </h2>
<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" title="Creative Commons Attribution 4.0 International License">
    <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="Creative Commons">
    <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="Attribution">
    <img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg" alt="NonCommercial">
    <img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" alt="ShareAlike">
</a>
<a href="https://yesterweb.org/no-to-web3/"><img src="https://yesterweb.org/no-to-web3/img/roly-saynotoweb3.gif" alt="Say No to Web3!"></a>
<a href="privacy.html" title="Gizliliğiniz hakkında"><img src="resources/imgs/nocookie.gif" alt="This website does not use cookies."></a>
<hr>
<h4 class="monospaced">Created with <3 on <a href="https://www.jetbrains.com/webstorm/">JetBrains WebStorm</a></h4>`;
    }
}

async function titleBar() {
    let hello = [ "Merhaba!", "Hello!", "Bonjour!", "您好!", "اسلا عليكم!", "Привет!", "こんにちは!" ];
    let iterator = 0;
    while (iterator < hello.length) {
        document.title = hello[iterator];
        await sleep(2000);
        if (iterator !== hello.length - 1) {
            iterator++;
        }
        else {
            iterator = 0;
        }
    }
}

async function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
