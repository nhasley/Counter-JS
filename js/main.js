var sum;
var displayEl = document.querySelector("h1");
var inp1El = document.getElementById("num");

document.querySelector(".b1").addEventListener("click", function() {
  sum += parseFloat(inp1El.value);
  inp1El.value = "";
  render();
});

document.querySelector(".b2").addEventListener("click", function() {
  sum -= parseFloat(inp1El.value);
  inp1El.value = "";
  render();
});

// functions
function init() {
  sum = 0;
  inp1El.value = "1";
  render();
}

function render() {
  displayEl.textContent = (sum >= 0 ? "" : "") + sum;
  displayEl.style.color = sum >= 0 ? "black" : "red";
}

init();
