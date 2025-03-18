let veces = 0;
function contadorClick() {
  veces+=1;
  console.log(veces)
}
let btn = document.getElementById("btn")
btn.addEventListener('click',contadorClick);
