function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = () => {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = () => this.altura > 1.8

var sacha = new Persona('Sacha', 'Perez', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martínez', 1.89)