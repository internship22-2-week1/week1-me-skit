const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, callback).fail(function() {
    console.log(`Sucedió un error. No se pudo obtener el personaje con ID: ${id}`)
  })
}

obtenerPersonaje(1, function(character) {
  console.log(`Hola, yo soy ${character.name}`)
  obtenerPersonaje(2, function(character) {
    console.log(`Hola, yo soy ${character.name}`)
    obtenerPersonaje(3, function(character) {
      console.log(`Hola, yo soy ${character.name}`)
      obtenerPersonaje(4, function(character){
        console.log(`Hola, yo soy ${character.name}`)
        obtenerPersonaje(5, function(character) {
          console.log(`Hola, yo soy ${character.name}`)
          obtenerPersonaje(6, function(character) {
            console.log(`Hola, yo soy ${character.name}`)
            obtenerPersonaje(7, function(character) {
              console.log(`Hola, yo soy ${character.name}`)
            })
          })
        })
      })
    })
  })
})



