let display = document.querySelector(".display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
}
const planets = document.querySelectorAll('.planet');

function animateCelestialBody(body) {
    const speed = parseFloat(body.getAttribute('data-speed'));
    let angle = 0;

    setInterval(() => {
        angle += speed;
        const distance = body.offsetWidth * (body.classList.contains('moon') ? 2 : 5); // Adjust distance based on planet or moon
        const x = distance * Math.cos(angle * Math.PI / 180);
        const y = distance * Math.sin(angle * Math.PI / 180);

        body.style.transform = `translate(${x}px, ${y}px)`;
    }, 20); // Adjust interval for animation speed
}

const planets = document.querySelectorAll('.planet');
planets.forEach(animateCelestialBody);

const moons = document.querySelectorAll('.moon');
moons.forEach(animateCelestialBody);
    const speed = parseFloat(planet.getAttribute('data-speed'));
    let angle = 0;

    setInterval(() => {
        angle += speed;
        const distance = planet.offsetWidth * 5; // Adjust distance from the sun
        const x = distance * Math.cos(angle * Math.PI / 180);
        const y = distance * Math.sin(angle * Math.PI / 180);

        planet.style.transform = `translate(${x}px, ${y}px)`;
    }, 20); // Adjust interval for animation speed
});
