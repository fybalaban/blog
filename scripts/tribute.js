/*
 *          Ferit Yiğit BALABAN <fyb@duck.com>, 2022
 */

let currentTextLanguage = "turkish"
const uwuifyed_english = [
    "I'd juwst wike tuwu intewject fow a moment. Whawt uwu'we wefewing tuwu as Winyux, iws in fact, GNYU/Winyux, ow (・`ω´・) as I've wecentwy taken tuwu cawwing iwt, GNYU p-pwus Winyux. Winyux iws nyowt an opewating system unto itsewf, but wathew anyothew fwee componyent of a fuwwy functionying GNYU system made usefuw by the GNYU cowewibs, sheww utiwities awnd vitaw system componyents compwising a fuww os as definyed by POSIX.",
    "Many computew usews wun a modified vewsion of the GNYU system evewy day, without weawizing iwt. Thwough a p-pecuwiaw tuwn of events, the vewsion of GNYU which iws widewy used today iws often cawwed Winyux, awnd many of its usews awe nyowt awawe thawt iwt iws basicawwy the GNYU system, devewoped by the GNYU pwoject.",
    "Thewe weawwy iws a Winyux, awnd these peopwe awe u-using iwt, but iwt iws juwst a pawt of the system they use. Winyux iws the kewnew: the pwogwam in the system thawt awwocates the machinye's wesouwces tuwu the othew pwogwams thawt uwu wun. The kewnyew iws an essentiaw pawt of an opewating system, but usewess by itsewf; iwt c-cawn onwy function in the context of a compwete opewating system. Winyux iws nyowmawwy used in combinyation with the GNYU opewating system: the whowe system iws basicawwy GNYU with Winyux added, ow (・`ω´・) g-GNYU/Winyux. Aww the so-cawwed Winyux d-distwibutions awe weawwy d-distwibutions of GNYU/Winyux!!11"
];

const uwuifyed_turkish = [
    "Biw d-dakikawığınya (sohbetinyizi) böwmek istiyowum. Winyux diyewek bahsettiğinyiz şey, aswında, GNyU/Winyux veya son z-zamanwawda söywemeyi tewcih ettiğim gibi GNyU awtı Winyux'tuw. Winyux başwı başınya biw işwetim sistemi değiwdiw, (biw işwetim sisteminden) daha ziyade, POSIX tawafından t-tanımwanyan tam biw işwetim sisteminyi meydanya getiwen GNyU cowewib'wewi, kabuk pwogwamwawı ve hayati sistem pawçawawından owuşan GNyU sisteminyin biw başka özgüw pawçasıdıw.",
    "Günümüzde biwçok b-biwgisayaw kuwwanıcısı, fawkınya biwe vawmadan GNyU sisteminyin d-değiştiwiwmiş biw vewsiyonyunyu çawıştıwmaktadıw. Bekwenmedik yönde gewişen biwtakım o-o-owaywaw sonyucu şu an yaygınca kuwwanıwan GNyU vewsiyonyundan Winyux diye bahsediwmekte ve kuwwanıcıwawı da bu sistemin GNyU Pwojesi tawafından gewiştiwiwen GNyU sistemi owduğunyun biwincinde değiwwew.",
    "Winyux gewçek ve bu insanwaw onyu kuwwanıyowwaw ancak Winyux kuwwandıkwawı sistemin yawnızca biw pawçası. Winyux çekiwdektiw (kewnyew), yanyi çawıştıwdığınız pwogwamwawa makinye kaynyakwawını tahsis eden ve awawawında böwüştüwen biw başka pwogwamdıw. Çekiwdek işwetim sisteminyin en ö-önyemwi nyoktasıdıw ancak kendi başınya biw işe yawamaz; sadece tam biw işwetim sistemi içewisinde kuwwanışwı hawe gewebiwiw. Winyux nyowmawde GNyU işwetim sistemi iwe biwwikte kuwwanıwıw, dowayısıywa tüm sistem Winyux ekwenmiş biw GNyU sistemidiw. Tüm o sözde Winyux dağıtımwawı da, gewçekte, GNyU/Winyux dağıtımıdıw."
];

const english = [
    "I'd just like to interject for a moment. What you're refering to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.",
    "Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called Linux, and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.",
    "There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called Linux distributions are really distributions of GNU/Linux!"
];

const turkish = [
    "Bir dakikalığına (sohbetinizi) bölmek istiyorum. Linux diyerek bahsettiğiniz şey, aslında, GNU/Linux veya son zamanlarda söylemeyi tercih ettiğim gibi GNU artı Linux'tur. Linux başlı başına bir işletim sistemi değildir, (bir işletim sisteminden) daha ziyade, POSIX tarafından tanımlanan tam bir işletim sistemini meydana getiren GNU corelib'leri, kabuk programları ve hayati sistem parçalarından oluşan GNU sisteminin bir başka özgür parçasıdır.",
    "Günümüzde birçok bilgisayar kullanıcısı, farkına bile varmadan GNU sisteminin değiştirilmiş bir versiyonunu çalıştırmaktadır. Beklenmedik yönde gelişen birtakım olaylar sonucu şu an yaygınca kullanılan GNU versiyonundan Linux diye bahsedilmekte ve kullanıcıları da bu sistemin GNU Projesi tarafından geliştirilen GNU sistemi olduğunun bilincinde değiller.",
    "Linux gerçek ve bu insanlar onu kullanıyorlar ancak Linux kullandıkları sistemin yalnızca bir parçası. Linux çekirdektir (kernel), yani çalıştırdığınız programlara makine kaynaklarını tahsis eden ve aralarında bölüştüren bir başka programdır. Çekirdek işletim sisteminin en önemli noktasıdır ancak kendi başına bir işe yaramaz; sadece tam bir işletim sistemi içerisinde kullanışlı hale gelebilir. Linux normalde GNU işletim sistemi ile birlikte kullanılır, dolayısıyla tüm sistem Linux eklenmiş bir GNU sistemidir. Tüm o sözde Linux dağıtımları da, gerçekte, GNU/Linux dağıtımıdır."
];

function uwuify() {
    let source = [];
    if (currentTextLanguage == "english") {
        console.log("Switching text language to uwuifyed Turkish.")
        source = uwuifyed_english;
        currentTextLanguage = "uwuifyed_english";
    }
    else if (currentTextLanguage == "turkish") {
        console.log("Switching text language to uwuifyed English.")
        source = uwuifyed_turkish;
        currentTextLanguage = "uwuifyed_turkish";
    }
    else if (currentTextLanguage == "uwuifyed_english") {
        console.log("Switching text to normal English");
        source = english;
        currentTextLanguage = "english";
    }
    else if (currentTextLanguage == "uwuifyed_turkish") {
        console.log("Switching text to normal Turkish");
        source = turkish;
        currentTextLanguage = "turkish";
    }
    else {
        console.log("None of conditions matched at uwuify().")
    }

    document.getElementById("text_area").innerHTML = "";
    for (let iterator = 0; iterator < source.length; iterator++) {
        document.getElementById("text_area").innerHTML += `<p>${source[iterator]}</p>`;
    }
    checkStatus();
}

function toggleLanguage() {
    let source = [];
    if (currentTextLanguage == "turkish" || currentTextLanguage == "uwuifyed_turkish") {
        console.log("Switching text language to English at toggleLanguage().")
        source = english;
        currentTextLanguage = "english";
        document.getElementById("toggle_entr").innerHTML = "Türkçesini oku";
    }
    else if (currentTextLanguage == "english" || currentTextLanguage == "uwuifyed_english") {
        console.log("Switching text language to Turkish at toggleLanguage().")
        source = turkish;
        currentTextLanguage = "turkish";
        document.getElementById("toggle_entr").innerHTML = "Read in English";
    }
    else {
        console.log("None of conditions matched at toggleLanguage().")
    }

    document.getElementById("text_area").innerHTML = "";
    for (let iterator = 0; iterator < source.length; iterator++) {
        document.getElementById("text_area").innerHTML += `<p>${source[iterator]}</p>`;
    }
    checkStatus();
}

function checkStatus() {
    if (currentTextLanguage == "turkish" || currentTextLanguage == "english") {
        document.getElementById("uwuify").innerHTML = "Uwuify";
    }
    else {
        document.getElementById("uwuify").innerHTML = "Unuwuify";
    }
}