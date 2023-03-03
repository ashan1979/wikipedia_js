const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';

const formDOM = document.querySelector('.form');
const inputDOM = document.querySelector('.form-input');
const resultDOM = document.querySelector('.results');

formDOM.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = inputDOM.value;
    if (!value) {
        resultDOM.innerHTML = 
        `<div class="error"> please enter valid search term</div>`;
        return
    }

    fetchPages(value);
});