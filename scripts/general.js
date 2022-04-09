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
<table class="float_left">
  <tr>
    <td rowspan="2"><img id="logo_photo" src="../images/photo.png" alt="A cute picture of me"></td>
    <td><a id="logo" class="navbar_item">Ferit Yiğit BALABAN</a></td>
  </tr>
  <tr>
    <td><h5 id="logo_bottom">Bilgisayar Mühendisliği öğrencisi</h5></td>
  </tr>
</table>
<ul class="navbar_list float_right">
  <li><a class="navbar_item" href="../index.html">Ana sayfa</a></li>
  <li><a class="navbar_item" href="../projects.html">Projelerim</a></li>
  <li><a class="navbar_item" href="../resume.html">Online Resume</a></li>
  <li><a class="navbar_item" href="../blog.html">Blog</a></li>
</ul>`;
    }
    else {
        console.log("Using header for root level content");
        document.getElementById("header").innerHTML = `
<!-- This header is suitable for pages on root -->
<table class="float_left">
    <tr>
    <td rowspan="2"><img id="logo_photo" src="images/photo.png" alt="A cute picture of me"></td>
<td><a id="logo" class="navbar_item">Ferit Yiğit BALABAN</a></td>
</tr>
<tr>
    <td><h5 id="logo_bottom">Bilgisayar Mühendisliği öğrencisi</h5></td>
</tr>
</table>
<ul class="navbar_list float_right">
    <li><a class="navbar_item" href="index.html">Ana sayfa</a></li>
    <li><a class="navbar_item" href="projects.html">Projelerim</a></li>
    <li><a class="navbar_item" href="resume.html">Online Resume</a></li>
    <li><a class="navbar_item" href="blog.html">Blog</a></li>
</ul>`;
    }
}

function loadFooter() {
    document.getElementById("footer").innerHTML = "";
    if (pageInDirectory) {
        document.getElementById("footer").innerHTML = `
<!-- This footer is suitable for pages in subfolders -->
<h2>2022 (<i>copyleft</i>) Ferit Yiğit BALABAN </h2>
<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
<img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg">
<img src="https://mirrors.creativecommons.org/presskit/icons/by.svg">
<img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg">
<img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg">
</a>
<a href="https://yesterweb.org/no-to-web3/">
<img src="https://yesterweb.org/no-to-web3/img/roly-saynotoweb3.gif">
</a>
<img src="../images/miku.gif">
<img src="../images/nft.gif">
<img src="../images/nocookie.gif">
<hr>
<h4 class="monospaced">Created with <3 on <a href="https://www.jetbrains.com/webstorm/">JetBrains WebStorm</a> | Hosted with <3 on <a href="https://github.com/fybx/blog">GitHub</a></h4>`;
    }
    else {
        document.getElementById("footer").innerHTML = `
<!-- This footer is suitable for pages on root -->
<h2>2022 (<i>copyleft</i>) Ferit Yiğit BALABAN </h2>
<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
<img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg">
<img src="https://mirrors.creativecommons.org/presskit/icons/by.svg">
<img src="https://mirrors.creativecommons.org/presskit/icons/nc.svg">
<img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg">
</a>
<a href="https://yesterweb.org/no-to-web3/">
<img src="https://yesterweb.org/no-to-web3/img/roly-saynotoweb3.gif">
</a>
<img src="images/miku.gif">
<img src="images/nft.gif">
<img src="images/nocookie.gif">
<hr>
<h4 class="monospaced">Created with <3 on <a href="https://www.jetbrains.com/webstorm/">JetBrains WebStorm</a> | Hosted with <3 on <a href="https://github.com/fybx/blog">GitHub</a></h4>`;
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