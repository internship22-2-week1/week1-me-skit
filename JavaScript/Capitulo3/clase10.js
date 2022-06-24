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

function imprimirProfesiones(persona) {
  console.log(`${persona.nombre} es:`)

  if (persona.ingeniero) {
    console.log('Ingeniero')
  } else {
    console.log('No es ingeniero')
  }

  if (persona.cantante) {
    console.log('Cantante')
  } else {
    console.log('No es cantante')
  }

  if (persona.guitarrista) {
    console.log('Guitarrista')
  } else {
    console.log('No es guitarrista')
  }
}

imprimirProfesiones(manuel)

// Desafio:
function imprimirSiEsMayorDeEdad(persona) {
  console.log(`${persona.nombre} es:`)

  if (persona.edad >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('No es mayor de edad')
  }
}

imprimirSiEsMayorDeEdad(manuel)
