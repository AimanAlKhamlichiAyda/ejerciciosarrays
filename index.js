//1.Declara un array vacío.
let arrr = Array();
console.log(arrr);

//2.Declara un array com mas de 5 elementos.
let arr = Array(5);
console.log(arr);

//3.Encuentra la longitud de tu array.
let miArrray = [1, 2, 3, 4, 5];
let longiitud = miArrray.length;
console.log(longiitud);

//4.Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
let miArray = [1, 2, 3, 4, 5];
let primer = miArray[0];
let ultim = miArray[miArray.length - 1]
let medi = [Math.floor(miArray.length / 2)];
console.log(primer);
console.log(ultim);
console.log(medi);

//5.Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
let mixedDataTypes = ["strings", "numbers", "booleans", "undefined", "null", "Symbol type"]
let longitud = mixedDataTypes.length;
console.log(longitud);

//6.Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
let misNegocios = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//7.Imprima el array usando console.log
console.log(misNegocios);

//8.Imprima el número de empresas en el array.
let numeroEmpresas = misNegocios.length;
console.log(numeroEmpresas);

//9.Imprime la primer empresa , la intermedia y la última empresa
let primero = misNegocios[0];
let ultimo = misNegocios[misNegocios.length - 1]
let medio = misNegocios[3];
console.log(primero);
console.log(ultimo);
console.log(medio);

//10.Imprime cada empresa.
console.log(misNegocios.join(" "));

//11.Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
let empresass = ['google', 'facebook', 'apple', 'microsoft', 'amazon'];
let empresasMayusculas = empresass.map((empressa) => {
  return empressa.toUpperCase();
});
console.log(empresasMayusculas);

//12. Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
let empresaas = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
let oracion = `${empresaas.slice(0, -1).join(', ')} y ${empresaas.slice(-1)}`;
console.log(`${oracion} son grandes empresas de TI.`);

//13.Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
let comp = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let empresaBuscada = 'Apple';
if (misNegocios.includes(empresaBuscada)) {
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
let negocios = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
negocios.reverse();
console.log(negocios);


//17.Cortar las primeras 3 empresas del array
const empresa = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
const primerasTresEmpresas = empresa.splice(0, 3);
console.log(primerasTresEmpresas);



//18.Cortar las últimas 3 empresas del array
let com = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let ultimasTresEmpresas = com.splice(-3);
console.log(ultimasTresEmpresas);


//19.Cortar la empresa o empresas intermedias de TI del array

let itCompaanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let index = itCompaanies.indexOf('Apple');
if (index > -1) {
  let empresasIntermedias = itCompaanies.splice(index, 1);
  console.log(empresasIntermedias);
}


//20.Eliminar la primera empresa de TI del array

let itCompaniees = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let primeraEmpresa = itCompaniees.shift();
console.log(primeraEmpresa);
console.log(itCompaniees);


//21.Eliminar la empresa o empresas intermedias de TI del array
let ituCompanies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let indexx = ituCompanies.indexOf('Apple');
if (indexx > -1) {
  let empresasIntermedias = ituCompanies.splice(indexx, 1);
  console.log(ituCompanies);
}


//22.Elimine la última empresa de TI del array
let it = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let ultimaEmpresa = it.pop();
console.log(it);


//23.Eliminar todas las empresas de TI
let Companies = ['Google', 'Facebook', 'Apple', 'Microsoft', 'Amazon'];
let empresasTI = Companies.splice(0, Companies.length);
console.log(Companies);


//===========================Nivel 2=======================

//1.Cree un archivo de countries.js separado y almacene el array de países en este archivo, cree un archivo separado web_techs.js y almacene el array de webTechs en este archivo. Acceda a ambos archivos en el archivo main.js
let countriess = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
];
//2.Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[^\w\s]/gi, '').split(' ');
console.log(words);
console.log(words.length);
//3.En el siguiente carrito de compras agregue, elimine, edite artículos
let shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];


if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}
if (shoppingCart.includes("Honey")) {
  shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
}
if (shoppingCart.includes("Tea")) {
  shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
}

console.log(shoppingCart);

//4.En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.

if (countriess.includes("Ethiopia")) {
  console.log("ETHIOPIA");
}
//5. En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.

let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"]
if (webTechs.includes('Sass')) {
  console.log('Sass es un preproceso de CSS');
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

//6. Concatene las siguientes dos variables y guardelas en una variable fullStack.
let frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
let backEnd = ["Node", "Express", "MongoDB"];
let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

//===========================Nivel 3=======================

//1.El siguiente es un array de 10 edades de estudiantes:
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort(function (a, b) {
  return a - b;
});
// 2
let minAge = ages[0];
let maxAge = ages[ages.length - 1];
console.log(`La edad mínima es ${minAge}`);
console.log(`La edad máxima es ${maxAge}`);
// 3
let middle = Math.floor(ages.length / 2);
let medianAge = ages[middle];
if (ages.length % 2 === 0) {
  medianAge = (medianAge + ages[middle - 1]) / 2;
}
console.log(`La edad media es ${medianAge}`);
// 4
let sumAges = ages.reduce((total, age) => total + age);
let averageAge = sumAges / ages.length;
console.log(`La edad promedio es ${averageAge}`);
// 5
let rangeAges = maxAge - minAge;
console.log(`El rango de edades es ${rangeAges}`);
// 6
let diffMin = Math.abs(minAge - averageAge);
let diffMax = Math.abs(maxAge - averageAge);
console.log(`La diferencia entre la edad mínima y el promedio es ${diffMin}`);
console.log(`La diferencia entre la edad máxima y el promedio es ${diffMax}`);

//2.Cortar los diez primeros países de la array de países
let firstTen = countriess.slice(0, 10);
console.log(firstTen);

//3.Encuentre el país o países de en medio en el array de países


let totalCountries = countriess.length;
if (totalCountries % 2 === 0) {
  let middleIndex = totalCountries / 2;
  let middleCountries = [countriess[middleIndex - 1], countriess[middleIndex]];
  console.log(middleCountries);
} else {
  let middleIndex = Math.floor(totalCountries / 2);
  let middleCountry = countriess[middleIndex];
  console.log(middleCountry);
}

//4.Divide el array de países en dos arrays iguales si es par. Si el array de países no es par, agregue un país más para la primera mitad.


if (countriess.length % 2 === 1) {
  countriess.splice(Math.floor(countriess.length / 2), 0, '');
}
let half = countriess.length / 2;
let firstHalf = countriess.slice(0, half);
let secondHalf = countriess.slice(half);
console.log(firstHalf);
console.log(secondHalf);


