
const button = document.querySelector(".hero button");

button.addEventListener("click", function () {
  document.querySelector(".standings").scrollIntoView({
    behavior: "smooth"
  });
});

// Messaggio iniziale
console.log("FANTA F1 2027 - Sistema avviato!");
