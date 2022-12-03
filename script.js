let clickBtn = document.getElementById("click-btn");

const randomColor = () => {
  let codeEl = "#";
  let colorEl = "0123456789ABCDEF";
  for (i = 0; i < 6; i++) {
    codeEl = codeEl + colorEl[Math.floor(Math.random() * 16)];
  }
  return codeEl;
};
console.log(randomColor());

function colorGenerate() {
  document.body.style.backgroundColor = randomColor();
}
clickBtn.addEventListener("click", colorGenerate);
