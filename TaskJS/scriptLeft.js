function arrResult(arr1, arr2) {
    var turn = 0;
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr2[j] == i) {
                turn = 1;
                break;
            }
        }
        if (turn == 0) {
            result.push(arr1[i]);
        } else turn = 0;
    }
    return result;
}

function arrFilter(arr1, arr2) {
    var result = arr1.filter(function(item, i) {
        if (arr2.every(function(exlNumber) {
                return exlNumber != i;
            })) {
            return item;
        };
    })
    return result;
}

function arrMap(arr1, arr2) {
    var result = [];
    var arrHelp = arr1.map(function(item, i) {
        if (arr2.every(function(exlNumber) {
                return exlNumber != i;
            })) {
            return item;
        };
    })
    arrHelp.forEach(function(item) {
        if (item != undefined) result.push(item);
    })
    return result;
}

var months = [{
    value: 0,
    month: "january"
}, {
    value: 1,
    month: "february"
}, {
    value: 2,
    month: "mart"
}, {
    value: 3,
    month: "april"
}, {
    value: 4,
    month: "may"
}, {
    value: 5,
    month: "juny"
}, {
    value: 6,
    month: "july"
}, {
    value: 7,
    month: "august"
}, {
    value: 8,
    month: "september"
}, {
    value: 9,
    month: "october"
}, {
    value: 10,
    month: "november"
}, {
    value: 11,
    month: "december"
}];
var exclusion = [5, 3, 7, 9, 10, 1];
var str = '';
arrSplice(months, exclusion).forEach(function(obj) {
    str += obj.value + " ";
});
alert(str);
