// let b = '1234567890'
// for(let a = `Aleykum`;a < b.length; a++){
//     console.log(`Assalomu ${a}  `);

// }
// let l = '1234567890'
// // console.log(l.length);
// for (a = 0; a < l.length; a++) {
//     console.log(a);
// }

// 1 orinda ulanadigan keyword > // git init bu git hupga yol ochib beradi

// git config --global user.name "name" //name kirgizish !shart
// git config --global email.name "email" //email kirgizish !shart

// !oraliq yolini ochish > // git remote add origin url

// git add  fileName
// git add .

// izoh yozish
// git commit -m "izoh yozish"

// git pull origin master > hamma  proectni yuklash

let str = "country";
function removeChar(str) {
  let res = "";
  for (let i = 1; i < str.length - 1; i++) {
    res += str[i];
  }
  return res;
}
console.log(removeChar(str));
