window.onload = function orchestrator() {
    loadHeader();
    loadFooter();
}

function loadHeader() {
    const pageLink = window.location.href;
    let pageInDirectory = pageLink.includes("projects") || pageLink.includes("posts");
    if (pageInDirectory) {
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
        document.getElementById("header").innerHTML = `
<!-- This header is suitable for pages on root -->
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
}

function loadFooter() {
    document.getElementById("footer").innerHTML = "";
    document.getElementById("footer").innerHTML = `
<h2>2022 🄯 Ferit Yiğit BALABAN</h2>
<hr>
<h4 class="monospaced">Created with <3 on <a href="https://www.jetbrains.com/webstorm/">JetBrains WebStorm</a> | Hosted with <3 on <a href="https://github.com/fybx/blog">GitHub</a></h4>`;
}