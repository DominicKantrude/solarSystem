const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]


const planetEl = document.getElementById("planets")
//print planets to DOM
planets.forEach( planet => {
planetEl.innerHTML += `<div id=${planet}>${planet}</div>`
});

//capitalize all first letters
let capPlanetArray = planets.map(planet => {
    return planet.charAt(0).toUpperCase() + planet.slice(1);
})
console.log(capPlanetArray)

//check if planet contains e
let planetsContainingE = planets.filter(planet =>{
    return (planet.includes("e"))
})
console.log(planetsContainingE)





