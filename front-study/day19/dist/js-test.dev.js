"use strict";

/**
 * JS将驼峰字符串转为下划线字符串
 * @param str
 * @returns {*}
 */
function convertCamelCase(str) {
  if (typeof str != 'string') {
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

console.log('--------------------');
console.log('JS将驼峰字符串转为下划线字符串');
console.log(convertCamelCase("HelloWorld")); //hello_wolrd

console.log('--------------------');
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

console.log("--------------");
console.log("JS数据求交集");
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [3, 4, 5, 6, 7];
console.log(intersection(arr1, arr2)); // [3,4,5]

console.log("--------------");
/**
 * BASE64加密
 * @param str
 * @returns {string}
 */

function base64Encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}
/**
 * BASE64解密
 * @param str
调⽤⽅法：
四⼗四、JS Url参数转对象
JS Url参数转对象
代码如下：
调⽤⽅法：
 * @returns {string}
 */


function base64Decode(str) {
  return decodeURIComponent(escape(atob(str)));
}

console.log(base64Encode("test")); // dGVzdA==

console.log(base64Decode("dGVzdA==")); // test

console.log("------------");
/**
 * JS Url参数转对象
 * @param {String} url default: window.location.href
 * @return {Object}
 */

function parseQueryString(url) {
  url = url == null ? window.location.href : url;
  var search = url.substring(url.lastIndexOf('?') + 1);

  if (!search) {
    return {};
  }

  return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
}

console.log("----------------");
console.log("JS Url参数换对象");
console.log(parseQueryString("http://www.baidu.com?id = 1 & name = hello ")); // {id: "1 ", name: "hello "}

console.log("----------------");
/**
 * JS判断是否为空
 * @param val
 * @returns {boolean}
 */

function isNull(val) {
  if (val == undefined || val == null || val == "" || val == '' || val == "undefined" || val == "null" || val == "NULL") {
    return true;
  }

  return false;
}

console.log("---------------");
console.log("JS判断是否为空");
console.log(isNull(undefined)); // true

console.log(isNull(null)); // true

console.log(isNull("")); // true

console.log(isNull('')); // true

console.log(isNull("undefined")); // true

console.log(isNull("null")); // true

console.log(isNull("NULL")); // true

console.log("---------------");
/**
 * JS⽣成指定位数的随机整数
 * @param count
 * @returns {string}
 */

function getRandomNum(count) {
  var arr = new Array();
  var reNum = "";

  for (var i = 0; i < count; i++) {
    arr[i] = parseInt(Math.random() * 10);
    reNum += String(arr[i]);
  }

  return reNum;
}

console.log("JS⽣成指定位数的随机整数（可以⽤于短信验证码的⽣成）");
console.log(getRandomNum(6));
console.log("---------------");
/**
 * JS校验IP地址格式
 * @param ip
 * @returns {boolean}
 */

function checkIp(ip) {
  var regex = /^([1-9]|[1-9]\d|1\d{2}|2[0-1]\d|22[0-3])(\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}$/;
  var b = regex.test(ip);
  return b;
}

console.log("---------------");
console.log("JS校验Ip地址格式");
console.log(checkIp("127.0.0.1")); // true

console.log(checkIp("0.0.0.1")); // false

console.log("---------------");
console.log("JS根据⽂件名获取⽂件格式");
/**
 * JS根据⽂件名获取⽂件格式
 * @param str
 * @returns {string}
 */

function getFileTypeByFileName(str) {
  return;
  str.substr(str.lastIndexOf(".") + 1).toLowerCase();
}

console.log("-----------------");
console.log("JS根据⽂件名获取⽂件格式");
console.log(getFileTypeByFileName("index.html")); //html

console.log(getFileTypeByFileName("index.js")); //js

console.log("---------------------");