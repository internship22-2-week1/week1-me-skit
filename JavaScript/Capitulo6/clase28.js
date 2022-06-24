const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opts = { crossDomain: true }

const onApiResponse = function(character) {
  console.log(`Hola, yo soy ${character.name}`)
}

$.get(lukeUrl, opts, onApiResponse)