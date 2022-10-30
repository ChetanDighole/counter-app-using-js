let count = 00;
let incre = document.querySelector(".increase");
let rst = document.querySelector(".reset");
let dec = document.querySelector(".decrease");

incre.addEventListener("click", increase);
function increase() {
  count = count + 1;
  document.querySelector(".value").innerText = count;
}

dec.addEventListener("click", decrease);
function decrease() {
  count = count - 1;
  document.querySelector(".value").innerText = count;
}

rst.addEventListener("click", reset);
function reset() {
  count = 00;
  document.querySelector(".value").innerText = count;
}


      
