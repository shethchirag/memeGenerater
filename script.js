const memeContainer = document.querySelector(".meme-container");
const fetchBtn = document.querySelector(".button-86");
let memeData = {};

function FetchMeme() {
  memeContainer.innerHTML = `<div class="loader"></div>`;
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((res) => res.json())
    .then((data) => {
      memeData = data;
      loading = false;
      memeContainer.innerHTML = `
      <div class="memeText"><h2>${memeData.title}</h2></div>
      <img
        class="memeimg"
        src=${memeData.url}
        alt="meme"
      />
      <div class="meme-auther">
        Meme by: <span>${memeData.author}</span>
      </div>
    `;
    })
    .catch((error) => console.error("Error fetching meme:", error));
}

FetchMeme();
fetchBtn.addEventListener("click", () => {
  FetchMeme();
});
