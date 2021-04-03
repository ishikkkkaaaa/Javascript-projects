const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
  

});
