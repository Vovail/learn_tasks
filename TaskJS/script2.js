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
    var result =[];
    for (var key in obj) result.push(obj[key]);
    return result;
}
var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
];

alert(unique(strings));
