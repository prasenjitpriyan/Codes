const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = document.getElementById('search-btn');

btn.addEventListener('click', () => {
  let inpWord = document.getElementById('inp-word').value;
  fetch(`${url}${inpWord}`)
    .then((response) => response.json())
    .then((data) => {
      const partOfSpeech = data[0].meanings[0].partOfSpeech;
      const phonetic = data[0].phonetic;
      const definition = data[0].meanings[0].definitions[0].definition;
      const example = data[0].meanings[0].definitions[0].example;
      const audio = data[0].phonetics.filter((item) => item.audio)[0].audio;

      result.innerHTML = `<div class="word">
        <h3>${inpWord}</h3>
        <button onclick="playSound()">
            <i class="fa-solid fa-volume-high"></i>
        </button>
        </div>
        <div class="details">
            <p>${partOfSpeech}</p>
            <p>/${phonetic}/</p>
        </div>
        <p class="word-meaning">
            ${definition}
        </p>
        <p class="word-example">
            ${example}
        </p>`;
      sound.setAttribute('src', audio);
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't Find the word</h3>`;
    });
});

function playSound() {
  sound.play();
}
