/** @format */

function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}
function main() {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  var par = document.createElement('p');
  var text = document.createTextNode('Welcome Holberton!');
  par.appendChild(text);
  document.body.appendChild(par);
  spo_button = document.createElement('button');
  spo_button.innerHTML = 'Spooky';
  spo_button.onclick = function () {
    spooky();
  };
  document.body.appendChild(spo_button);
  D_button = document.createElement('button');
  D_button.innerHTML = 'Dark mode';
  D_button.onclick = function () {
    darkMode();
  };
  document.body.appendChild(D_button);
  S_button = document.createElement('button');
  S_button.innerHTML = 'Scream mode';
  S_button.onclick = function () {
    screamMode();
  };
  document.body.appendChild(S_button);
}
main();
