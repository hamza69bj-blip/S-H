const btnOui = document.getElementById('btn-oui');
const btnNon = document.getElementById('btn-non');
const question = document.getElementById('question');
const mainGif = document.getElementById('main-gif');

const messages = [
    "Sûr(e) ?", "Vraiment sûr(e) ?", "Réfléchis encore...",
    "S'il te plaît ?", "Je vais pleurer...", "Tu me brises le cœur 💔"
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
    question.innerText = "YAY ! Je t'aime ! ❤️❤️❤️";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHp0eXoxbmZ4ZzB6eXp6eXp6eXp6eXp6eXp6eXp6eXp6eXp6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/G96zgIcQn1L2xpmMlr/giphy.gif"; // GIF de victoire
    btnNon.style.display = 'none';
});
