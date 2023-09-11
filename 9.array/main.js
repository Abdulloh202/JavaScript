//!HomeWork
// 1
// const tidyNumber = n => {
//     let s = n.toString();
//     for (let i = 0; i < s.length-1; i++) {
//       if (s[i] > s[i+1]) return false;
//     }
//     return true;
//   }

// 2
// function points(games) {
//     let total = 0;
//     games.map(game => {
//       if (game[0] === game[2]) {
//         total += 1;
//       } else if (game[0] > game[2]) {
//         total += 3;
//       }
//     });
//     return total;
//   }

// function insertDash(num) {
//     return num.toString().replace(/[13579](?=[13579])/g, "$&-");
//  }



// 2
// const GetArray = (start, finish, count) => {
//   let result = [];
//   for (let i = start.charCodeAt(); i <= finish.charCodeAt(); i += count) {
//     result.push(String.fromCharCode(i));
//   }
//   return result;
// };

// console.log(GetArray("a", "z", 2));


// 4
// var capitals = function (word) {
//     var caps = [];
//       for(var i = 0; i < word.length; i++) {
//       if(word[i].toUpperCase() == word[i]) caps.push(i);
//     }
//     return caps;
//   };