console.log('Hello World!');

5;
2 + 3;

var yourName;
let yourAge;
const numberOfDays;


//Variable
//contoh1
let lastName;
lastName = "Skywalker";

console.log(lastName);

/* output
Skywalker
*/

//contoh2
let lastName = "Skywalker";

console.log(lastName);

/* output
Skywalker
*/


let fullName = let lastName; // Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
let fullName = (lastName = "Skywalker"); // (lastName = "Skywalker") merupakan expression, sehingga kode ini tidak error.
let fullName = "Luke" + "Skywalker"; // "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.


const z = 100;
console.log(z);
z = 200;
console.log(z)

/* TypeError: Assignment to constant variable. */
