"use strict";

function pow(base, exponent) {
    if (base == 0) {
        return 0;
    } else if (exponent == 0) {
        return 1;
    } else if (exponent == 1) {
        return base;
    } else {
        var result = 1;
        for (var i = 1; i <= exponent; i++) {
            result = result * base
        }
        return result;
    }
}

var base = +prompt('input base:', '');
var exp = +prompt('input exponent:', '');
if (exp < 0) {
    alert('wrong exponent')
} else {
    alert('result is: ' + pow(base, exp));
}
alert (pow);
