'use strict'

function addClass(obj, cls) {
    var str = obj.className;
    var arr = str.split(' ');
    if (arr.indexOf(cls) >= 0) return obj.className;
    else {
        str = str + " " + cls;
        obj.className = str;
        return obj.className;
    }
}
// var obj = {
//     className: 'open newmenu'
// }
// alert(addClass(obj, 'new'));
// alert(addClass(obj, 'open'));
// alert(addClass(obj, 'me'));
// alert(addClass(obj, 'new'));

function camelize(str) {
    if (str.charAt(0) == '-') str = str.slice(1);
    var arr = str.split('-');
    var result = '';
    for (var i = 1; i < arr.length; i++) {
        result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return result = arr[0] + result;
}
// alert (camelize('-webkit-transition'));
// alert (camelize('list-style-image'));
// alert (camelize('background-color'));

'use strict'

function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == cls) {
            arr.splice(i, 1);
            i = i - 1;
        }
    }
    obj.className = arr.join(' ');
}

function filterRangeInPlace(arr, a, b) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i -= 1;
        }
    }
}

function sortNumber(a, b) {
    if (a > b) {
        return 1
    };
    if (a < b) {
        return -1
    };
}

function randomUnsort(a, b) {
    if (Math.random() > 0.5) return 1;
    else return -1;
}

function sortByObjProperty(a, b) {
    if (a.age > b.age) return 1;
    else return -1;
}

function printList(list) {
    alert(list.value);
    if (list.next != null || list.next != indefined) {
        printList(list.next)
    }
}

function printReverseList(list) {
    if (list.next != null) {
        printReverseList(list.next)
    }
    alert(list.value);
}
var list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function aclean(arr) {
    var arrHelp = [];
    for (var i = 0; i < arr.length; i++) {
        // в новий допоміжний архів записую ті самі строки, тільки попередньо зменшую регістр всіх букв до малих,
        // розділяю строку на букви, сортую їх і об"єднюю назад в нову строку, в якій
        // всі букви відсортовані в порядку зростання.
        arrHelp[i] = arr[i].toLowerCase().split('').sort().join('');
    }

    for (i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arrHelp[i] == arrHelp[j]) {
                arr.splice(j, 1);
                arrHelp.splice(j, 1);
                j = j - 1;
            }
        }
    }
}

// var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор', 'оВз', 'торсеК', 'торсеКтор'];
// aclean(arr);
// alert(arr);

function unique(arr) {
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i];
    }
    var result = [];
    for (var key in obj) result.push(obj[key]);
    return result;
}
// var strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", "8-()"
// ];

// var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор', 'оВз', 'торсеК', 'торсеКтор']
// var arrLength = arr.map (function (key) {
//   return key.length;
// });
// alert (arrLength);

var arr = [1, 2, 3, 4, 5];

// function getSum(arr) {
//     var arrResult = [];
//     for (var i = 0; i < arr.length ; i++) {
//         var arrHelp = arr.concat();
//         arrHelp.splice(i + 1);
//         var sumPart = arrHelp.reduce(function(sum, previos) {
//             sum = +sum + +previos;
//             return sum;
//         }, 0);
//         arrResult.push(sumPart);
//     }
//     return arrResult;
// }

function getSum(arr) {
    var result = [];
    if (!arr.length) return result;
    var totalSum = arr.reduce(function(previousSum, arrElem) {
        result.push(previousSum);
        return arrElem + previousSum;
    });
    result.push(totalSum);
    return result;
}

function f(x) {
    return arguments.length > 0 ? 1 : 0;
}

function sumArguments() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

function getLocalDay(date) {
    return date.getDay() == 0 ? 7 : date.getDay();
}

function getDateAgo(date, days) {
    var dateHelp = new Date(date);
    dateHelp.setDate(dateHelp.getDate() - days);
    return dateHelp.toLocaleString('ua', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 0);
    return date;
    // for (var i=29;i<33;i++){
    // date.setDate(i);
    // if (date.getMonth()!=month) return i-1;
    // }
}

function getSecondsToday() {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return (Date.now() - today) / 1000
}

function getSecondsToTomorrow() {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    return (tomorrow - Date.now()) / 1000;
}

function formatDateToDdMmYy(date) {
    var year = ('' + date.getFullYear());
    year = year.slice(2);
    var month = date.getMonth() + 1 + '';
    var day = date.getDate() + '';
    if (month.length == 1) month = '0' + month;
    if (day.length == 1) day = '0' + day + '';
    return day + '.' + month + '.' + year;
}

function formatDate(date) {
    var now = new Date();
    var diff = (now - date) / 1000;
    if (diff < 2) {
        return 'just now';
    } else if (diff < 60) {
        return Math.round(diff) + ' seconds ago';
    } else if (diff < 60 * 60) {
        return Math.round(diff / 60) + ' min ago';
    } else {
        return formatDateToDdMmYy(date)
    }
}

function makeCounter() {
    var currentCount = 1;
    return { // повертаємо об"єкт, що містить три методи
        getNext: function() {
            return currentCount++;
        },
        setCount: function(value) {
            return currentCount = value;
        },
        resetCount: function() {
            return currentCount = 1
        }
    }
}

// var count = makeCounter();
// alert (count.getNext());
// alert (count.getNext());
// alert(count.setCount(5));
// count.resetCount();
// alert (count.getNext());

function makeBuffer() {
    var text = "";

    function buffer(value) {
        if (arguments.length == 0) {
            return text;
        }
        text += value;
    }

    buffer.clear = function() {
        text = '';
    }
    return buffer;
}
// var buffer = makeBuffer();
//
// buffer(0);
// buffer(1);
// buffer(10);
// alert(buffer());
// buffer.clear();
// alert(buffer());

function byField(key) {
    return function(a, b) {
        return a[key] > b[key] ? 1 : -1;
    }
}

// var users = [{
//     name: "Вася",
//     surname: 'Иванов',
//     age: 20
// }, {
//     name: "Петя",
//     surname: 'Чапаев',
//     age: 25
// }, {
//     name: "Маша",
//     surname: 'Медведева',
//     age: 18
// }];
//
// users.sort(byField('name'));
// users.forEach(function(user) {
//     alert(user.name);
// }); // Вася, Маша, Петя
// users.sort(byField('age'));
// users.forEach(function(user) {
//     alert(user.name);
// }); // Маша, Вася, Петя


function filter(arr, func) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        // var val = arr[i];
        if (func(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b;
    }
}

function inArray(arr1) {
    return function(x) {
        for (var i = 0; i <= arr1.length; i++)
            if (x == arr1[i]) return true;
    }
    return false;
}
// var arr = [1, 2, 3, 4, 5, 6, 7];
// alert(filter(arr, inBetween(3, 6)));
// alert( filter(arr, inArray([1, 2, 10])) );

var calculatorOld = {
        read: function() {
            this.a = +prompt('input a:', '1');
            this.b = +prompt('input b:', '1');
        },
        sum: function() {
            return this.a + this.b;
        },
        mul: function() {
            return this.a * this.b;
        }
    }
    //
    // calculator.read();
    // alert(calculatorOld.sum());
    // alert(calculatorOld.mul());

var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert(this.step);
    }
};
// ladder.up().up().down().up().down().showStep();

function sum(a) {
    var sumHelp = a;

    function f(b) {
        sumHelp += b;
        return f;
    }
    f.toString = function() {
        return sumHelp;
    }
    return f;
}
// alert(sum(1)(2)(3));

function Article() {
    this.date = new Date();
    Article.count++;
    Article.lastDate = this.date;
}

Article.count = 0;
Article.showStats = function() {
        return alert(this.count + ' , last date ' + this.lastDate);
    }
    // new Article();
    // Article.showStats(); // Всего: 2, Последняя: (дата)
    // new Article();
    // Article.showStats(); // Всего: 2, Последняя: (дата)
    // new Article();
    // Article.showStats(); // Всего: 3, Последняя: (дата)
function makeCounter() {
    var currentCount = 1;
    this.getNext = function() {
        return currentCount++;
    };
    this.setCount = function(value) {
        return currentCount = value;
    };
    this.resetCount = function() {
        return currentCount = 1;
    }
}

// var count = new makeCounter();
// alert (count.getNext());
// alert (count.getNext());
// alert(count.setCount(5));
// count.resetCount();
// alert (count.getNext());

function Calculator() {
    var obj = {
        "+": function(a, b) {
            return a + b;
        },
        "-": function(a, b) {
            return a - b;
        }
    };
    this.calculate= function(str) {
        var arr = [];
        arr = str.split(' ');
        return obj[arr[1]](+arr[0], +arr[2]);
    };
    this.addMethod= function(operator, func) {
        obj[operator] = func;
    }
}
var calc = new Calculator();
alert(calc.calculate('3 + 7'));
calc.addMethod('*', function(a, b) {
    return a * b
});
alert(calc.calculate('3 * 7'));
