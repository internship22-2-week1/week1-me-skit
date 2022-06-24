var manuel = {
  nombre: 'Manuel',
  apellido: 'Esquit',
  edad: 28
}

var dario = {
  nombre: 'Dario',
  apellido: 'Susnisky',
  edad: 27
}

function imprimirNombreEnMayusculas(persona) {
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

// Desafio:
function imprimirNombreYEdad(persona) {
  var { nombre, edad } = persona
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreEnMayusculas(manuel)
imprimirNombreEnMayusculas(dario)

// Desafio:
imprimirNombreYEdad(manuel)
imprimirNombreYEdad(dario)
