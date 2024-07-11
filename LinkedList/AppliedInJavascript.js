() => {
  class LinkedList {
    constructor() {
      this.head = null
    }

    displayNode() {
      let currentNode = this.head
      while (currentNode) {
        // Si el nodo actual tiene contenido, lo muestra y luego asigna el nodo actual el nodo siguiente
        console.log(currentNode)
        currentNode = currentNode.next
      }
    }

    insertNodeAtTheEnd(value) {
      const newNode = new Node(value, null) // Null como segundo parámetro porque este nodo sería el último de la lista

      if (this.head === null) {
        this.head = newNode // Si no existe una cabeza, la cabeza seria el mismo nodo que estamos tratando de crear
        return
      }

      let currentNode = this.head
      while (currentNode.next) {
        // Mientras currentNode tenga un puntero a un nodo siguiente y este no es null, va pasando por cada uno de los nodos
        current = current.next
      }

      currentNode.next = newNode() // Cuando sale del ciclo es porque el siguiente nodo, es null, asi que al nodo actual se le agrega puntero al nuevo nodo
    }

    insertNodeAtStart(value) {
      const newNode = new Node(value, this.head)
      this.head = newNode
    }

    findNode(value) {
      let currentNode = this.head
      while (currentNode) {
        // Mientras el nodo actual tenga contenido itere
        // Si el nodo actual es igual al valor buscado, retornamos el nodo actual
        if (currentNode.value === value) {
          return currentNode
        }

        // Si el nodo actual no es igual al valor buscado, pasamos al siguiente nodo
        currentNode = currentNode.nex
      }

      return null
    }

    deleteNode(value) {
      let currentNode = this.head
      // Mientras el nodo actual tenga contenido
      while (currentNode) {
        // Si el nodo siguiente de mi nodo actual es igual al nodo que queremos eliminar, hacemos que el nodo siguiente del nodo actual, sea el siguiente del siguiente
        if (currentNode.next.value === value) {
          currentNode.next = currentNode.next.next
        }

        currentNode = currentNode.next
      }
    }
  }

  class Node {
    contructor(value, next) {
      this.value = value
      this.next = next
    }
  }
}