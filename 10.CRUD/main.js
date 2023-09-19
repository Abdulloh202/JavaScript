//1
// let n = -5.678
// console.log(Math.floor(n)); //-6
// console.log(Math.trunc(n));//-5
// console.log(Math.round(n));// -6
// console.log(Math.sign(n));//-1
// console.log(parseInt(n));//-5
// console.log(parseFloat(n));//-5.678
// console.log(Number(n));// -5.678
//2
// let title = "name";
// let obj = {
//   name: "webbrain",
//   title: "IT Center",
//   [title]: "Webbrain Academy",
//   title,
// };
// console.log(obj[title]);// webbrain academe
// console.log(obj.name);// webbrain academe
// console.log(obj.title);// name

//3
// scope in log {
// console.log("webbrain" || true); //w
// console.log("webbrain" && true); // t
//console.log("webbrain" ?? true); // w

// console.log(null || "webbrain"); // w
// console.log(null && "webbrain"); // w
// console.log(undefined ?? "webbrain"); // w
// }

//4
// let user = {
//   name: "webrain",
//   surname: "Academy",
//   getName() {
//     console.log(this); //javob this
//   },
// };
// user.getName();

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

// let list = [
//   { id: 1, name: "eshmat", title: "CEO" },
//   { id: 2, name: "toshmat", title: "CTO" },
//   { id: 5, name: "eshmat", title: "CEO" },
//   { id: 6, name: "toshmat", title: "CTO" },
// ];

// javob
// const sort = (smth) => {
//   return list.filter((v) => v.title.toLocaleLowerCase().includes(smth.toLocaleLowerCase()));
// };
// console.log(sort('ceo'));
// console.log(sort('cto'));

