var juan = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 28,
  peso: 75
}

console.log(`Al inicio del año ${juan.nombre} pesaba ${juan.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = juan.peso - 3
var dias = 0

while (juan.peso > META) {
  if (comeMucho()) {
    aumentarDePeso(juan)
  }

  if (realizaDeporte()) {
    adelgazar(juan)
  }

  dias += 1
}

console.log(`Pasaron ${dias} días hasta que ${juan.nombre} adelgazó 3kg`)

console.log(`Al final del año ${juan.nombre} pesaba ${juan.peso.toFixed(1)}kg`)