var x = 4, y = '4'

var manuel = {
  nombre: 'Manuel',
  apellido: 'Esquit',
  edad: 28,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

var juan = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 13
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

function imprimirSiEsMayorDeEdad(persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}

function permitirAcceso(persona) {
  if (!esMayorDeEdad(persona)) {
    console.log('ACCESO NEGADO')
  }
}

// Reto
const esMenorDeEdad = persona => !esMayorDeEdad(persona)

imprimirSiEsMayorDeEdad(manuel)
imprimirSiEsMayorDeEdad(juan)

permitirAcceso(juan)
console.log(esMenorDeEdad(juan))
console.log(esMenorDeEdad(manuel))