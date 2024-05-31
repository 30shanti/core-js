/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB;

// 논리합(또는) 연산자
let AorB;

// 부정 연산자
let reverseValue = !value;

console.log('reverseValue', reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && { thisIsFalsy: false };

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

let username = prompt('너 뉘기야');

if (username === 'admin') {
  let password = prompt('비번');

  if(password.toLowerCase() === "themaster"){
    console.log('welcome');
    
    }
    else if(password === null || password === ''){
      alert('canceled');


    }

    else{
      console.log('wrong');
      
      }
      
}

else if(username === null || username.replace(/\s*/g,'') === ''){
  alert('canceled');


}
  else{
    console.log('idky');
    
    }


    