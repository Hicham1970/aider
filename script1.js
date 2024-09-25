const planets = document.querySelectorAll(".planet");

planets.forEach((planet) => {
  const speed = parseFloat(planet.getAttribute("data-speed"));
  let angle = 0;

  setInterval(() => {
    angle += speed;
    const distance = planet.offsetWidth * 5; // Adjust distance from the sun
    const x = distance * Math.cos((angle * Math.PI) / 180);
    const y = distance * Math.sin((angle * Math.PI) / 180);

    planet.style.transform = `translate(${x}px, ${y}px)`;
  }, 20); // Adjust interval for animation speed
});
