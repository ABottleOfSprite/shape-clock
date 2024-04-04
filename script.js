// Shapes animation


const wrapper = document.getElementById("wrapper");

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
  let next = prev;
  
  while(prev === next) next = rand(min, max);
  
  return next;
}

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

let prev = 0;

setInterval(() => {
  const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
  
  wrapper.dataset.configuration = combination.configuration;
  wrapper.dataset.roundness = combination.roundness;
  
  prev = index;
}, 5000);


// Change color Button



const paletteBtn = document.getElementById("btn-clr");

const colors = [
  ['--clr-davys-gray', '--clr-dark-purple', '--clr-rebecca-purple', '--clr-pale-purple', '--clr-medium-slate-blue', '--clr-khaki', '--clr-vanilla'], //palette 1
  ['--clr-golden-gate-bridge', '--clr-silver', '--clr-egg-white', '--clr-rufus', '--clr-powder-blue', '--clr-cream', '--clr-cat-poly-green'], //palette 2
  ['--clr-ebony', '--clr-xanthous', '--clr-old-gold', '-clr-ash-gray', '--clr-claret', '--clr-celestial-blue', '--clr-pigment-green'], //palette 3 
  ['--clr-black', '--clr-oxford-blue', '--clr-turquoise', '--clr-tiffany-blue', '--clr-duke-blue', '--clr-reseda-green', '--clr-slate-gray']//palette 4
];

let currentPaletteIndex = 0;

function changeColors() {
    let shapes = document.getElementsByClassName("shape");
    let currentPalette = colors[currentPaletteIndex];
    for (let i = 0; i < shapes.length; i++) {
      shapes[i].style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue(currentPalette[i % currentPalette.length]);
      
    }
    // Update currentPaletteIndex for the next click
    currentPaletteIndex = (currentPaletteIndex + 1) % colors.length;

    
  }

  // Add event listener to the button
  let changeColorButton = document.getElementById("btn-clr");
  changeColorButton.addEventListener("click", changeColors);

  

  //time


  function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if needed
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("timeDisplay").textContent = timeString;

  }

  // Update time every second
  setInterval(updateTime, 1000);

  // Initial call to display time immediately
  updateTime();


  const timeDisplay = document.getElementById("timeDisplay");
  timeDisplay.addEventListener("mouseenter", blur);
  

  function blur() {
    const winTile = document.getElementById("timeBlur");
    winTile.style.opacity = "1";
  }
  
  timeDisplay.addEventListener("mouseleave", blurOff);

  function blurOff() {
    const winTile = document.getElementById("timeBlur");
    winTile.style.opacity = "0";
  }

  

  
