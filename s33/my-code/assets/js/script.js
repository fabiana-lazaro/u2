let mainTitle = document.getElementById("main-title");
console.log(mainTitle);
console.log(mainTitle.innerText);

mainTitle.innerText = "Título cambiado dinámicamente";
console.log(mainTitle.innerText);

let mainTexts = document.getElementsByClassName("main-text");
console.log(mainTexts);
console.log(mainTexts[0].innerText);

let subtitles = document.getElementsByTagName("h2");
console.log(subtitles);
console.log(subtitles[0].innerText);
console.log(subtitles[1].innerText);
console.log(subtitles[2].innerText);

let queryMainTitle = document.querySelector("#main-title");
console.log(queryMainTitle);
let queryMainText = document.querySelectorAll(".main-text");
console.log(queryMainText);

document.getElementById("main-button").addEventListener("click", function () {
  console.log("BOTÓN PRESIONADO");
});
