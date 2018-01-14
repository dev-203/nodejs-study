
//http://119.201.123.184/30stair/even/even.php?pname=even
var a, b;

a = 3;
b = 17;

/**
 * 
 * @param {*} a 
 * @description
 * 입력값에 따라 약수의 갯수 출력
 */
function div(a) {
    var count = 0;
    for (var i = 1; i <= a; i++) {
        if (a % i == 0) {
            count++;
        }
    }
    return count
}

/**
 * @param {*} a 
 * @description
 * 입력 값에 홀 짝 출력
 */
function holl_ch(a) {
    return a % 2 == 0;
}


var totalCount = 0;
for (var i = a; i <= b; i++) {
    if (holl_ch(div(i))) totalCount++;
}
