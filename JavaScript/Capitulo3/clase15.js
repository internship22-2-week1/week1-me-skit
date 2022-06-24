var contador = 0

const llueve = () => Math.random() < 0.25

do {
  contador++
} while (!llueve())


console.log(`Fuie a ver si llovia ${contador} veces`)
// Reto
console.log(`Fuie a ver si llovia ${contador} ${contador > 1 ? 'veces' : 'vez'}`)