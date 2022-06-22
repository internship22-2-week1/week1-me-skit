# Botellas

1. Tendría las botellas ordenadas por capacidad.
2. Cuando un cliente solicite una cantidad del producto
2.1 Buscaria la botella que se ajuste a la cantidad solicitada o de menor cantidad.
restante, y restaria la botella correspondiente a las existencias 
2.4 Con la cantidad restante procederia a buscar nuevamente como en el paso 2.1
2.5 Sí solo hay cantidades grandes, le ofrecería al cliente una botella de cantidad mayor
2.6 Sí el cliente acepta le agrego la botella y resto la misma a las existentes.
2.7 Finalizo la orden

Existencias:
| CAPACIDAD | CANTIDAD |
|-----------|----------|
| 100ML | 7 |
| 250ML | 15 |
| 350ML | 5 |
| 500ML | 3 |


|Cliente  | Compra en ML | Botellas |
|---------|--------------|----------|
| Paco | 450ML | 1 botella de 350ML, 1 botella de 100ML |
| Hugo | 185ML | 2 botella de 100ML, o 1 botella de 100ML |
| Luis | 940ML | 1 botella de 500ML, 1 botella de 350ML, 1 botella de 100ML |

# Archivos Repetidos

1. Empezar con el segundo elemento de la lista y compararla con las anteriores
2. Si esta repetida, renombrarla agregandole el número siguiente
3. Continuar con los siguientes elementso hacendo pasos anteriores hasta llegar al final

```
function (file_names)
  dictionary = new Dictionary()
  for index = 1; index < arreglo.long; index++ do
    item = file_names[index]
    from i = 0; i < index; i++ do
      if item == file_names[i]
        if (dictionary[item])
          dictionary[item] = 1
        else
          dictionary[item] += 1 
        end

        item = item + "(" + dictionary[item] + ")"
      end
    end
  end
end

```