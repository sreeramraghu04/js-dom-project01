let btn = document.querySelector("#btn");
let h1 = document.querySelector("#hd");
btn.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    h1.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    h1.style.color = "black";
  }
});
