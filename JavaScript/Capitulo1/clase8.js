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

imprimirNombreEnMayusculas(manuel)
imprimirNombreEnMayusculas(dario)

function cumpleanos(persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}