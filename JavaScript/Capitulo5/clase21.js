function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function() {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

// Reto
Persona.prototype.soyAlto = function() {
  if (this.altura > 1.8) {
    console.log(`${this.nombre}: Soy alto`)
  } else {
    console.log(`${this.nombre}: No soy alto`)
  }
}

var sacha = new Persona('Sacha', 'Perez', 1.79)
var erika = new Persona('Erika', 'Luna', 1.85)
var arturo = new Persona('Arturo', 'Martínez', 1.65)