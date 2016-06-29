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

// alert(unique(strings));

function CalculatorOld() {
    this.read = function() {
        this.a = +prompt('input a:', '0');
        this.b = +prompt('input b:', '0');
    };
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
    this.toString = function() {
        return 'it\' a OBJECT lalala';
    }
}

// var calc1= new CalculatorOld();
// calc1.read();
// alert( "Сумма=" + calc1.sum() );
// alert( "Произведение=" + calc1.mul() );
// alert(calc1);
// alert(calc1.a + ' ' + calc1.b);

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('input a:', '0');
    }
}
// var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert( accumulator.value ); // выведет текущее значение

function Calculator() {
    var arr = [];
    var methods = {
        '+': function(a, b) {
            return a + b
        },
        '-': function(a, b) {
            return a - b
        }
    }
    this.calculate = function(str) {
        arr = str.split(' ');
        if (!methods[arr[1]] || isNaN(arr[0]) || isNaN(arr[2])) {
            return 'you input wrong string';
        }

        return methods[arr[1]](+arr[0], +arr[2]);
    }

    this.addMethod = function(operator, func) {
        methods[operator] = func;
    }

}

// var powerCalc = new Calculator;
// powerCalc.addMethod("*", function(a, b) {
//   return a * b;
// });
// powerCalc.addMethod("/", function(a, b) {
//   return a / b;
// });
// powerCalc.addMethod("**", function(a, b) {
//   return Math.pow(a, b);
// });
// alert(powerCalc.calculate('2 + 4'));
// var result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
function User(fullName) {
    this.fullName = fullName;
}

var vasya = new User("Василий Попкин");
Object.defineProperty(vasya, "firstName", {
    configurable: true,

    get: function() {
        var split = this.fullName.split(" ");
        return split[0];
    },
    set: function(value) {
        var split = this.fullName.split(" ");
        this.fullName = value + " " + split[1];
    }
})
Object.defineProperty(vasya, "lastName", {
    configurable: true,

    get: function() {
        var split = this.fullName.split(" ");
        return split[1];
    },
    set: function(value) {
        var split = this.fullName.split(" ");
        this.fullName = split[0] + " " + value;
    }
})

// чтение firstName/lastName
// alert(vasya.firstName); // Василий
// alert(vasya.lastName); // Попкин
//     // запись в lastName
// vasya.lastName = 'Сидоров';
// vasya.firstName = 'Ivan';
// alert(vasya.fullName); // Василий Сидоров

function makeBuffer() {
    var text = '';
    function buffer(a) {
        if (arguments.length == 0) {
            return text;
        } else text += a;
    }
    buffer.clear = function() {
        text = '';
    }
    return buffer;
}

// var buffer = makeBuffer();
// buffer("Тест");
// buffer(" тебя не съест ");
// alert(buffer()); // Тест тебя не съест
// buffer.clear();
// alert(buffer()); // ""
function byField(key) {
  return function(a,b) {
    if(a[key]>b[key]) return 1;
    else return -1;
  }
}

// var users = [{
//   name: "Вася",
//   surname: 'Иванов',
//   age: 20
// }, {
//   name: "Петя",
//   surname: 'Чапаев',
//   age: 25
// }, {
//   name: "Маша",
//   surname: 'Медведева',
//   age: 18
// }];
// users.sort(byField('name'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Вася, Маша, Петя
//
// users.sort(byField('age'));
// users.forEach(function(user) {
//   alert( user.name );
// }); // Маша, Вася, Петя
