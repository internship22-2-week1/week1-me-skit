const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function(data) {
      resolve(data)
    })
    .fail(() => reject(id))
  })
}

function onError(id) {
  console.log(`Sucedió un error al obtener el personaje con id: ${id}`)
}

obtenerPersonaje(1)
  .then(function(character) {
    console.log(`El personaje 1 es ${character.name}`)
  })
  .catch(onError)

