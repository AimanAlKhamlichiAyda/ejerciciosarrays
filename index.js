//1.Declara un array vacío.
/*let arr=Array();
console.log(arr);*/

//2.Declara un array com mas de 5 elementos.
/*let arr=Array(5);
console.log(arr);*/

//3.Encuentra la longitud de tu array.
/*let miArray = [1, 2, 3, 4, 5];
let longitud = miArray.length;
console.log(longitud);*/

//4.Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
/*let miArray = [1, 2, 3, 4, 5];
let primero= miArray[0];
let ultimo= miArray[miArray.length-1]
let medio=[Math.floor(miArray.length / 2)];
console.log(primero);
console.log(ultimo);
console.log(medio);*/

//5.Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
/*let  mixedDataTypes=  ["strings", "numbers","booleans","undefined","null","Symbol type"]
let longitud= mixedDataTypes.length;
console.log(longitud);*/

//6.Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
/*let itCompanies =["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]*/

//7.Imprima el array usando console.log
/*console.log(itCompanies);*/

//8.Imprima el número de empresas en el array.
/*let numeroEmpresas=itCompanies.length;
console.log(numeroEmpresas);*/

//9.Imprime la primer empresa , la intermedia y la última empresa
/*let primero= itCompanies[0];
let ultimo= itCompanies[itCompanies.length-1]
let medio=itCompanies[3];
console.log(primero);
console.log(ultimo);
console.log(medio);

//10.Imprime cada empresa.
/*console.log(itCompanies.join(" "));

//11.Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
let empresas = ['google', 'facebook', 'apple', 'microsoft', 'amazon'];
let empresasMayusculas = empresas.map((empresa) => {
  return empresa.toUpperCase();
});
console.log(empresasMayusculas);

//12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
let empresas = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let oracion = `${empresas.slice(0, -1).join(', ')} y ${empresas.slice(-1)}`;
console.log(`${oracion} son grandes empresas de TI.`);

//13.Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
let itCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let empresaBuscada = 'Apple';
if (itCompanies.includes(empresaBuscada)) {
    console.log(empresaBuscada);
} else {
    console.log('La empresa no existe');
}

//14.Filtre las empresas que tienen más de una 'o' sin el método filter()
let empresas = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let empresasConMasDeUnaO = empresas.reduce((acc, empresa) => {
    let contadorO = empresa.split('').reduce((contador, letra) => {
        if (letra === 'o' || letra === 'O') {
            contador++;
        }
        return contador;
    }, 0);
    if (contadorO > 1) {
        acc.push(empresa);
    }
    return acc;
}, []);
console.log(empresasConMasDeUnaO);

//15.Ordene el array usando el método sort()
let itCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
itCompanies.sort();
console.log(itCompanies);

//16.Invierte la array usando el método reverse()
let itCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
itCompanies.reverse();
console.log(itCompanies);


//17.Cortar las primeras 3 empresas del array
const itCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
const primerasTresEmpresas = itCompanies.splice(0, 3);
console.log(primerasTresEmpresas); 



//18.Cortar las últimas 3 empresas del array
let itCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let ultimasTresEmpresas = itCompanies.splice(-3);
console.log(ultimasTresEmpresas); 


//19.Cortar la empresa o empresas intermedias de TI del array

let itCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let index = itCompanies.indexOf('Apple');
if (index > -1) {
  let empresasIntermedias = itCompanies.splice(index, 1);
  console.log(empresasIntermedias); 
}


//20.Eliminar la primera empresa de TI del array

let itCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let primeraEmpresa = itCompanies.shift();
console.log(primeraEmpresa); 
console.log(itCompanies); 


//21.Eliminar la empresa o empresas intermedias de TI del array
let itCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let index = itCompanies.indexOf('Apple');
if (index > -1) {
  let empresasIntermedias = itCompanies.splice(index, 1);
  console.log(itCompanies); 
}


//22.Elimine la última empresa de TI del array
let itCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let ultimaEmpresa = itCompanies.pop();
console.log(itCompanies);


//23.Eliminar todas las empresas de TI
let itCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let empresasTI = itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
*/

//===========================Nivel 2=======================




