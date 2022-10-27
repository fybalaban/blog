let gallery = [
    'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)',
    'linear-gradient(300deg, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)',
    'linear-gradient(300deg, #5b807e 0%, #fed6e3 100%)',
    'linear-gradient(300deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(to top, #ff0844 0%, #ffb199 100%)'
];
let gradient = 0;
let $main = document.getElementsByTagName('main')[0];

document.addEventListener('keydown', (e) => {
    if (!e.ctrlKey)
        return;

    const keyName = e.key;
    if (keyName === 'ArrowRight') {
        gradient = gradient !== gallery.length - 1 ? gradient + 1 : 0;
    } else if (keyName === 'ArrowLeft') {
        gradient = gradient !== 0 ? gradient - 1 : gallery.length - 1;
    } else {
        return;
    }

    $main.style['backgroundImage'] = gallery[gradient];
});