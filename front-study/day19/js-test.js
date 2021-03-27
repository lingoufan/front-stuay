/**
 * JS将驼峰字符串转为下划线字符串
 * @param str
 * @returns {*}
 */
function convertCamelCase(str) {
    if (typeof (str) != 'string') {
        console.error('[convertCamelCase] argument is not String.');
        return str;
    }
    var pattern = /[A-Z]/g;
    return str.replace(pattern, function (match, index) {
        if (index != 0) {
            return '_' + match.toLowerCase();
        } else {
            return match.toLowerCase();
        }
    });
}
console.log('--------------------')
console.log('JS将驼峰字符串转为下划线字符串')
console.log(convertCamelCase("HelloWorld")); //hello_wolrd
console.log('--------------------')


/**
 * JS数据求交集
 * @param array1
 * @param array2
 * @returns {*}
 */
function intersection(array1, array2) {
    return array1.filter(function (n) {
        return array2.indexOf(n) != -1;
    });
}
console.log("--------------")
console.log("JS数据求交集")
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
console.log(intersection(arr1, arr2)); // [3,4,5]
console.log("--------------")

