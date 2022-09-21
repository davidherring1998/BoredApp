
const questBtn = document.getElementById('quest-one-btn');
const quest = document.getElementById('question');
const questContainer = document.getElementById('question-container')
const choices = document.getElementById('choice');
choices.style.display='none';

questBtn.addEventListener('click', () => {
    questContainer.style.display='none';
choices.style.display='grid';


})