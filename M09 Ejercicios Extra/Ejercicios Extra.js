/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var newArray = []
   for(let prop in objeto){
      newArray.push([prop,objeto[prop]])
   }
   return newArray
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var stringNew = []
   var conteo = []
   var newObj = {}
   for(var i=0;i<string.length;i++){
      if(stringNew.includes(string[i])){
         conteo[stringNew.indexOf(string[i])] +=1
      } else{
         stringNew.push(string[i])
         conteo.push(1)
      }
   }
   for(var i=0;i<conteo.length;i++){
      newObj[stringNew[i]] = conteo[i]
   }
   return newObj
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var stringMayus = ''
   var stringMinus = ''
   for(let i=0;i<string.length;i++){
      if(string[i].toUpperCase() ===  string[i]){
         stringMayus += string[i]
      } else{
         stringMinus += string[i]
      }
   }
   return stringMayus + stringMinus
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var newFrase = frase.split(" ")
   var newArray = []
   var fraseInter = ''
   for(var j=0;j<newFrase.length;j++){
      for(var i=1;i<=newFrase[j].length;i++){
         fraseInter += newFrase[j][newFrase[j].length-i]
      }
      newArray.push(fraseInter)
      fraseInter = ""
   }
   return newArray.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroString = numero.toString()
   var auxStr = ''
   for(var i=1;i<=numeroString.length;i++){
      auxStr += numeroString[numeroString.length-i]
   }
   if(auxStr === numeroString){
      return "Es capicua"
   } else{
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var newString = ''
   for(let i=0;i<string.length;i++){
      if(string[i]!=="a" && string[i]!=="b" && string[i]!=="c"){
         newString += string[i]
      }
   }
   return newString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for(let i=0;i<arrayOfStrings.length; ++i){
      for(let j=0;j<arrayOfStrings.length - 1; ++j){
         if(arrayOfStrings[j].length > arrayOfStrings[j+1].length){
            let temp = arrayOfStrings[j];
            arrayOfStrings[j] = arrayOfStrings[j+1];
            arrayOfStrings[j+1] = temp
         }
      }   
   }
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interArray = []
   for(var i=0;i<array1.length;i++){
      if(array2.includes(array1[i])){
         interArray.push(array1[i])
      }
   }
   return interArray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
