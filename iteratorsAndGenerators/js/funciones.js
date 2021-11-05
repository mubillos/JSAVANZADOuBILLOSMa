function createIterator( array ){
    let currentIndex = 0;
    return {
        next(){
        return currentIndex < array.length ?
                { value: array[ currentIndex++ ], done: false} :
                { done: true };
        }
    };
}

function *gen() {
    let i = 1;
    while (true){
        yield i;
        i = i * 2;
    }
}
function *genFibonacci() {
    let i = 0;
    let anterior  =i;
    let actual    =i;

//0,1,1,2,3,5,
    while (true){
        yield i;
        if(i==0){
            //luego de obtener el siguiente, el siguiente pasa a ser
            i=1;  // este es el siguiente
            //el nuevo actual
            anterior = 0;
            actual   = i;
        }else if(i==1 && anterior == 0){
          //para esta condicion
          i=1;  // este es el siguiente
          //luego de modificar quedan
            anterior=1;
            actual = 1;

        }
        else{
          //el siguiente es el actual + anterior
          i = actual + anterior;
          //ahora el actual pasa a ser el anterior
          anterior = actual;
          //siguiente pasa a ser el nuevo actual
          actual =i;   //   anterior = 1 e i =1 next = 2
                          //   anterior = 2
        }
      }
}
