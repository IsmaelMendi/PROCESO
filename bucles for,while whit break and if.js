//bucle for
    //ejemplo 1
let lista=[1 ,2,3,4,5,6,7,8,9,10]
for(let n=0; n< lista.length; n++){
    console.log(lista[n])
}
    //ejemplo 2
for(let i=0; i<=10; i++){
    console.log(i)
}

//bucle while
let min= 0
let max=10
while(min<=max) {
    console.log(min);
    min++;
}

//bucle while with break and if 
let unidades=0;
let decenas=0;
while(true){
    while(true){
        console.log(`Numero actual: ${decenas}${unidades}`);
        unidades++
        if(unidades===10){
            unidades=0
            break;}
    }break
}