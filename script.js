const list = document.querySelector("#list");

const catEmojis =  ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🐱"];

function emojis() {
    for (i = 0; i < catEmojis.length; i++) {
      const newListElement = document.createElement("li");
      newListElement.innerText = catEmojis[i];
      list.appendChild(newListElement);
    
       
 }
}

const dogList = document.querySelector("#dogList");

const dogEmojisId = ["🐶", "🐕", "🦮", "🐩", "🐾", "🐺", "🦊", "🦝", "🐕‍🦺", "🐩",];


function dogEmojis() {
    for (i = 0; i < dogEmojisId.length; i++) {
        const newElement = document.createElement("li");
        newElement.innerText = dogEmojisId[i];
        dogList.appendChild(newElement);
    }
}


const text = {
    overText: "CatEmojis og DogEmojis",
}

document.getElementById("h1").innerText = text.overText;

