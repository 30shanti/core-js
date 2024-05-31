/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;

console.log(String(YEAR));
console.log(typeof (YEAR + ''));

// undefined, null

let days = null;
console.log(days + '');

let friends;
console.log(friends + '');

// boolean
let isClicked = true;

console.log(String(isClicked));

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;

console.log(Number(friend));

// null
let money = null;
console.log(Number(money));

// boolean

// string

// numeric string

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들
