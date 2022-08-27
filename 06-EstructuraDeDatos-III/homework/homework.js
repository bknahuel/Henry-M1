"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

/*function BinarySearchTree(value){
  this.value = value;
  this.right = null;
  this.left = null;
  this.size = 0;
}

BinarySearchTree.prototype.size = function(){
  if(this.size) return this.size; //si el size es > a 0, devolveme lo que hay en size.
  else return null; //si size es 0, retorna null;
};

BinarySearchTree.prototype.insert = function(value){
  this.value = value;
  if(this.size === 0) this.right = this.value; //si size es 0, entonces asigno el valor a la derecha.
  else if(this.size !== 0){ //si size es diferente de 0, entra al bucle.
    if(this.right > this.value){//debe agregar el nuevo nodo, a la derecha si es mayor o a la izquierda si es   menor
      this.left = this.value; //asigno el nodo to the left, si el nodo right es mayor al value.
    } this.right = this.value; //asigno el nodo to the right, si es mayor.
  size++;
  }
};

BinarySearchTree.prototype.contains = function(value){
  
};
BinarySearchTree.prototype.depthFirstForEach = function(){};
BinarySearchTree.prototype.breadthFirstForEach = function(){};*/

//with MS
/*
function BinarySearchTree(value){
  this.value = value;
  this.right = null;
  this.left = null;
  this.size = 0;
}

BinarySearchTree.prototype.insert = function(value){
  if(value > this.value){
    if(this.right === null){
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
  if(value < this.value){
    if(this.left === null){
      this.left = new BinarySearchTree(value);
    }else{
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true;
  if(value > this.value){
    //busca a la derecha
    if(this.right === null) return false;
    else return this.right.contains(value);
  }
  if(value < this.value){
    //busca a la izquierda
    if(this.left === null) return false;
    else return this.left.contains(value);
  }
};

BinarySearchTree.prototype.size = function(){
  if(this.right === null && this.left === null) return 1;
  if(this.left !== null && this.right === null) return 1 + this.left.size();
  if(this.right !== null && this.left === null) return 1 + this.right.size();
  if(this.right !== null && this.left !== null) return 1 + this.left.size() + this.right.size();
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
  if(order === 'pre-order'){
    cb(this.value);
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  } else if(order === 'post-order'){
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
    cd(this.value);
  } else {
    if(this.left !== null) this.left.depthFirstForEach(cb, order);
    cb(this.value);
    if(this.right !== null) this.right.depthFirstForEach(cb, order);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array=[]){
  if(this.left !== null){
    array.push(this.left);
  }
  if(this.right !== null){
    array.push(this.right);
  }
  cb(this.value);
  if(array.length > 0){
    array.shift().breadthFirstForEach(cb, array);
  }
};
*/

//With CL
//valor > node va a la izquierda
//valor < node va a la derecha
function BinarySearchTree(value){
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function(){
  if(this.value === null) return 0;
  if(this.left === null && this.right === null) return 1;
  if(this.left === null && this.right !== null) return 1 + this.right.size();
  if(this.right === null && this.left !== null) return 1 + this.left.size();
  return 1 + this.right.size() + this.left.size();
};

BinarySearchTree.prototype.insert = function(value){
  //evaluar value, si va a la izquierda o derecha
  if(value > this.value){
    if(this.right === null) this.right = new BinarySearchTree(value);
    else this.right.insert(value);
  }

  if(value < this.value){
    if(this.left === null) this.left = new BinarySearchTree(value);
    else this.left.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(value){
  if(this.value === value) return true;

  if(value > this.value){
    if(this.right === null) return false;
    return this.right.contains(value);
  }

  if(value < this.value){
    if(this.left === null) return false;
    return this.left.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstForEach = function(cb, orden){
  //"post-order"
  if(orden === 'post-order'){
    //izq -> der -> root
    //CB en left
    if(this.left !== null) this.left.depthFirstForEach(cb, orden);
    //CB en right
    if(this.right !== null) this.right.depthFirstForEach(cb, orden);
    //CB en root
    cb(this.value);
  }
  //"pre-order"
  else if(orden === 'pre-order'){
    //root -> izq -> der

    //CB en root
    cb(this.value);
    //CB en left
    if(this.left !== null) this.left.depthFirstForEach(cb, orden);
    //CB en right
    if(this.right !== null) this.right.depthFirstForEach(cb, orden);
  }
  //"in-order" o cualquier cosa...
  else{
    //izq -> root -> der
    //CB en left
    if(this.left !== null) this.left.depthFirstForEach(cb, orden);
    //CB en root
    cb(this.value);
    //CB en right
    if(this.right !== null) this.right.depthFirstForEach(cb, orden);
  };
};

BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue = []){
  //guarda lo que hay en la izq
  if(this.left !== null) queue.push(this.left);
  //guarda lo que hay en la der
  if(this.right !== null) queue.push(this.right);
  
  //ejecutar root
  cb(this.value); 

  //revisar si hay elementos en la cola
  if(queue.length > 0){
    queue.shift().breadthFirstForEach(cb, queue);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
