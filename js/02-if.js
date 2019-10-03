// var r = prompt('Enter circle radius:', 1);
// console.log('Circle radius:', r);

// var S = S_circle(r);
// console.log('Circle square:', S);

// ====================================

// boolean value: true or false (1 or 0).
// In general false is ZERO (0), and true is NOT ZERO.
// if (true) {
//     console.log(true);
// }

// if (false) {
//     console.log(false); // NEVER executed.
// }

// if (true != false) {
//     console.log('true != false');
// }

// if (1 > 0) {
//     console.log('1 > 0');
// }

// if (1 < 0) {
//     console.log('1 < 0');
// }

// if (1 != 0) {
//     console.log('1 != 0');
// }

// if (1 > 0 && 2 > 1) {
//     console.log('1 > 0 AND 2 > 1');
// }

// console.log('1 && 3', Boolean(1 && 3));
// console.log('1 & 3', 1 & 3);
// console.log(2 | 4);

// if (1 < 0) {
//     console.log('YES');
// } else {
//     console.log('NO');
// }

// if (2 > 1) {
//     console.log('2 > 1');
//     if (4 > 2) {
//         console.log('4 > 2');
//     } else {

//     }
// } else {
//     console.log('never');
// }

// ==============================


// Find max value of array
var array_random = [1, 10, 12, 31, -7, 0, 25, -17];
console.log(array_random.length);

var max_value = array_random[0];

for (var i = 1; i < array_random.length; i++) {
    if (max_value < array_random[i]) {
        max_value = array_random[i];
    }
}

console.log('Max:', max_value);

var min_value = array_random[0];

for (var i = 1; i < array_random.length; i++) {
    if (min_value > array_random[i]) {
        min_value = array_random[i];
    }
}

console.log('Min:', min_value);

var max_value = array_random[0];
var min_value = array_random[0];
for (var i = 1; i < array_random.length; i++) {
    if (max_value < array_random[i]) {
        max_value = array_random[i];
    }
    if (min_value > array_random[i]) {
        min_value = array_random[i];
    }
}

console.log('Max:', max_value, 'Min:', min_value);

// Restrictions: We need S <= 10. If S > 10 then user should change the radius.
// console.log('Restrictions: We need S <= 10. If S > 10 then user should change the radius.');

var r, S = 0;

do {
    r = prompt('Enter circle radius:', 1);
    S = S_circle(r);
    console.log('S:', S);
} while (S > 10);
console.log('S <= 10! YES!!!', S);


if (true) {
    console.log('true');
} else {
    console.log('false');
}

true ? console.log('true') : console.log('false');

var a;
if (true) {
    a = 54783;
} else {
    a = -17;
}
console.log(a);

a = !true ? 54783 : -17;
console.log(a);

