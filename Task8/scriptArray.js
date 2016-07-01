"use strict";
var names = [];
for (var i = 0; i < 5; i++) {
    names.push(prompt('input name #' + (i + 1) + ':', ''));
}
var userName = prompt('input user name:', '');
тут використано цикл для знаходження:
var noUser=1;
for (i = 0; i < 5; i++) {
    if (names[i] == userName) {
        alert(userName + ', you succesfully enter');
        noUser=0;
        break;
    }
}
if (noUser==1) alert ('i dont know such user');

//тут використано [].indexOf(key)
// if (names.indexOf(userName)>=0) alert(userName + ', you succesfully enter');
// else alert ('i dont know such user');


// тут використано перевірку наявності свойства об"єкта
// var obj={};
// for (i=0;i<5;i++) {
//   var key=names[i];
//   obj[key]=true;
// }
// if (obj[userName]) {alert(userName + ', you succesfully enter');}
// else alert ('i dont know such user');
