// function initials(n) {
//     return n.split(' ').map((v, i, a) => v.charAt(0).toUpperCase() + (i == a.length - 1 ? v.slice(1) : '.')).join('');
// }
// console.log(initials("abdullo"));

// function validParentheses(parenStr) {
//   let curr = 0;
//   for(let i = 0; i < parenStr.length; i++) {
//     if (parenStr[i] === '(') {
//       curr++;
//     } else {
//       curr--;
//     }
//     if (curr < 0) {
//       return false;
//     }
//   }
//   return curr === 0;
// }