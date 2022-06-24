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

function imprimirNombreEnMayusculas({ nombre }) {
  console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(manuel)
imprimirNombreEnMayusculas(dario)
imprimirNombreEnMayusculas({ nombre: 'Pepito' })
