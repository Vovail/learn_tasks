var a = +prompt('input a: ', '');
var b = +prompt('input b: ', '');
var arr = [];
var row = [];
for (var i = 1; i <= a; i++) {
    row[0] = i;
    for (var j = 1; j <= b; j++) {
        row[j] = i * j;
    }
    var rowRes = row.splice(0);
    arr[i] = rowRes;
}
for (i = 0; i <= a; i++) {
    row[i] = i;
}
arr[0] = row;

var str = '';
div = document.createElement('div');
document.body.appendChild(div);
str = str + arr[4][3] + " ";
div.innerHtml = str;
// for (i = 0; i <= a; i++) {
//     var div = document.createElement('div');
//     document.body.appendChild(div);
//     for (j = 0; j <= b; j++) {
//         str = str + arr[i][j] + " ";
//     }
//     div.innerHtml = str;
//     str='';
// }
