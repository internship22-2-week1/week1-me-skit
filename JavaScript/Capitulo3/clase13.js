var juan = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${juan.nombre} pesaba ${juan.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_ANIO; i++) {
  var random = Math.random()

  if (random < 0.25) {
    aumentarDePeso(juan)
  } else if (random < 0.5) {
    adelgazar(juan)
  }
}

console.log(`Al final del año ${juan.nombre} pesaba ${juan.peso.toFixed(1)}kg`)