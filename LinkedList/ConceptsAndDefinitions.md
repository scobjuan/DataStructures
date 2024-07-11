# Listas enlazadas
## Que es una lista enlazada?
Representa un grupo de elementos de forma secuencial.
En una lista enlazada cada elemento estará envuelto en un nodo, cada nodo tiene un puntero, permitiendole apuntar al nodo siguiente.
Como resultado, obtendriamos un conjunto de nodos apuntados entre si, es decir, una lista

  - Ej. 20 (cabeza) -> 15 -> 10 -> 30
  Sinedo la cabeza el único nodo que debemos conocer para trabajar con una lista. Ya que apartir de ahí, sabriamos cual es el siguiente debido al puntero siguiente de cada uno de los nodos.
  Lo que no es cabeza, es una lista, y esa lista, asu vez, tiene una cabeza.
  El ultimo nodo de la lista apunta a una lista vacía.

## Ventajas de una lista frente a un array
- Los nodos no se guardan juntos como ocurre con los arrays.No se guardan en la misma sección de memoria.
- Pueden tener una longitud de n, variable
- Se pueden agregar y quitar elementos en tiempo de ejecución

## Desventajas de una lista frente a un array
- Como las listas no tienen un indice, no podemos hacer accesos aleatorios. Para acceder a cualquier elemento, debemos recorrer toda la lista, no podemos decir "dame el elemento en la posición cinco"
- Necesitan más espacio en memoria debido a que debes almacenar punteros

**Para entender el resto de conceptos y ver como se aplica, ir a los archivos en donde se realizan practicas con este concepto**