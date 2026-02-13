const btnOui = document.getElementById('btn-oui');
const btnNon = document.getElementById('btn-non');
const question = document.getElementById('question');
const mainGif = document.getElementById('main-gif');

const messages = [
    "Sure ?", "Vraiment sûre ?", "Réfléchis encore...",
    "Ayy Kiech ?", "Bch N8afsekk!...", "Tu me brises le cœur 💔"
];
let messageIndex = 0;
let size = 1.2;

btnNon.addEventListener('click', () => {
    // Changer le texte du bouton Non
    btnNon.innerText = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Faire grossir le bouton Oui
    size += 0.5;
    btnOui.style.fontSize = `${size}rem`;
    btnOui.style.padding = `${size * 10}px ${size * 20}px`;
});

btnOui.addEventListener('click', () => {
    question.innerText = "Aaa aaaahhh! Rabbi yahfdhek w yostrek nchallah dima Tkoun b 5ir w farhana, Happy Valentines! Love Uuuu! ❤️❤️❤️";
    mainGif.src = "imageedit_2_9642675602.gif"; // GIF de victoire
    btnNon.style.display = 'none';
});
