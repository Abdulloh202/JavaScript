// loop's,
// While,
//  do While,
//  for

// let width = 10;
// let height = 5;

// for (let q = 1; q <= height; q++) {
//   let str = "";
//   for (let u = 1; u <= width; u++) {
//     if (q === 1 || q === height) {
//       str += "*"
//     } else {
//       if (u === 1 || u === width) {str += "*"} else {str += " ";}
//     }
//   }
//   console.log(str);
//   str = "";
// }


// 2
// let width = 10;
// let height = 5;
// let str = "";

// for (let q = 1; q <= height; q++) {
//   for (let u = 1; u <= width; u++) {
//     if (q === 1 || q === height) {
//       str += "*"
//     } else {
//       if (u === 1 || u === width) {str += "*"} else {str += "*";}
//     }
//   }
//   console.log(str);
//   str = "";
// }

// 3
// let width = 10;
// let height = 10;
// let str=""
// for (let i = 0; i < height; i++) {

//   for (let j = 0; j < width; j++) {
//     if (j == 0 || j ==width - 1) {
//       str+="*"
//     }else if(i==0 || i==height-1){
//       str+="*"
//     }else if(i+j == width -1){
//       str+="*"
//     }else if(i ==j){
//       str+="1"
//     }
//      else{
//       str +=" "
//      }

//   }
//   str += "\n"
// }
// console.log(str);


// 4
// let width = 10;
// let height = 10;
// let str = "";
// for (let q = 1; q <= height; q++) {
//   for (let u = 1; u <= width; u++) {
//     if(q===1 || q===height ||  u=== 1 || u === width){
//       str+="*"
//     }else if (q >= 3 && q <= 8 && u >= 3 && u <= 8) {
//       str += "*";
//     }
//     else {
//       str += " ";
//     }
//   }
//   str += "\n";
// }

//console.log(str);
