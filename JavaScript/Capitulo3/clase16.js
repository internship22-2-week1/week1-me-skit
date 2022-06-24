var signo = prompt('¿Cuál es tu signo?')

console.log(signo)

switch (signo) {
  case 'acuario':
    console.log('Intente aislarse del mundo y sentarse en soledad...')
    break
  case 'aries':
    console.log('Deje de preocuparese más de lo necesario, ya que pod...')
    break    
  case 'tauro':
    console.log('Se sentirá agobiado por sus responsabilidades, déje...')
    break
  case 'geminis':
  case 'géminis':
    console.log('Sepa que en pocos días recuperará su armonía mental...')
    break
  case 'leo':
    console.log('Su intuición será decisiva para lograr negocios que otros creen...')
    break
  case 'virgo':
    console.log('Esté atento a los asuntos familiares que tiene pen...')
    break    
  case 'piscis':
    console.log('Sepa que de ahora en más, su futuro solo dependerá...')
    break
  case 'cancer':
  case 'cáncer':
        console.log('Dentro su cabeza le surgirán ideas extraordinarias...')
    break
  case 'libra':
    console.log('Con gran vitalidad concluirá los asuntos pendientes...')
    break
  case 'scorpio':
    console.log('Su interés por el misterio le llevará a resolver asuntos ...')
    break
  case 'sagitario':
    console.log('Recuperará la confianza en el trabajo...')
    break
  case 'capricornio':
    console.log('Creará innovaciones que le proyectarán al éxito...')
    break
  default:
    console.log('No es un signo zodiacal válido');
    break
}