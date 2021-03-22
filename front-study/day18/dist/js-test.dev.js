"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// /**
//  * JS字符串反序
//  * @param text 需要进⾏反序的字符串
//  * @returns {string} 返回反序之后的字符串
//  * @constructor
//  */
function reverseStr(text) {
  return text.split('').reverse().join('');
}

console.log(reverseStr("Hello!")); // !olleH

console.log('-----------------------------');
/**
 * @desc JS现⾦额转⼤写
 * @param {Number} n
 * @return {String}
 */

function digitUppercase(n) {
  var fraction = ['⻆', '分'];
  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
  var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];
  var head = n < 0 ? '⽋' : '';
  n = Math.abs(n);
  var s = '';

  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
  }

  s = s || '整';
  n = Math.floor(n);

  for (var _i = 0; _i < unit[0].length && n > 0; _i++) {
    var p = '';

    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }

    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][_i] + s;
  }

  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');
}

console.log("JS现⾦额转⼤写");
console.log(digitUppercase(1023456789.56)); // 壹拾亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元伍⻆ 伍分

console.log('-----------------------------');
/**
 * JS检测字符串是否为空
 * @param str
 * @returns {boolean}
 */

function checkIsEmpty(str) {
  if (null != str && undefined != str && "" != str) {
    return false;
  }

  return true;
}

console.log("JS检测字符串是否为空");
console.log(checkIsEmpty("")); // true

console.log('-----------------------------');
/**
 * 将数值四舍五⼊到保留的⼩数位数
 * @param num 待四舍五⼊数值
 * @param len 保留⼩数位数
 * @returns {number}
 */

function getRound(num, len) {
  return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
}

console.log("将数值四舍五⼊到保留的⼩数位数");
console.log(getRound(1.55555555, 6));
console.log('-----------------------------');
/**
 * 切割相应⼩数点后位数，并将⼩数点后多余的0 清空
 * @param val 需要切割的数值
 * @param num 需要的⼩数位数
 * @returns {string}
 */

function cutRoundNum(val, num) {
  var value = val.toString();
  value = value.substr(0, value.indexOf('.') + 1) + value.substr(value.indexOf('.') + 1, num);
  var reg = value.match(/\d+\.\d+/g);

  for (var index in reg) {
    value = value.replace(reg[index], parseFloat(reg[index]));
  }

  return value;
}

console.log("切割相应⼩数点后位数，并将⼩数点后多余的0 清空");
console.log(cutRoundNum(2.303000, 4)); // 2.333

console.log('-----------------------------');
/**
 * 判断是否是邮箱的正确格式
 * @param str 对应的需要验证的邮箱地址
 * @returns {boolean} 返回真或假
 */

function isEmail(str) {
  var reg = /^([a-z0-9A-Z]+[-|\.]?)+[a-z0-9A-Z]@([a-z0-9AZ]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
  return reg.test(str);
}

console.log("判断是否是邮箱的正确格式");
console.log(isEmail("ye21st@gmail.com")); //true

console.log(isEmail("ye21st!gmail.com")); //false

console.log('-----------------------------');
/**
 * JS将⼿机号格式化，中间部分以 * 号代替
 * @param phone
 * @returns {string | * | void}
 */

function phoneToStar(phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}

console.log("JS将⼿机号格式化，中间部分以 * 号代替");
console.log(phoneToStar('15371010361')); // 1539****0361

console.log('-----------------------------');
/**
 * JS检查⽤户名是否满⾜要求，只能是英⽂或英⽂数字
 * @returns {*}
 */

function checkLoginName(loginName) {
  return /^[A-Za-z0-9]*$/.test(loginName) && !/(^\d*$)|( ^ \S + \s + \S + $) /.test(loginName);
}

console.log("JS检查⽤户名是否满⾜要求，只能是英⽂或英⽂数字");
console.log(checkLoginName("ye21st")); // true

console.log(checkLoginName("sam!")); // false

console.log('-----------------------------');
/**
 * JS验证密码，必须是字⺟和数字结合
 * @param password 密码
 * @returns {boolean} 返回true或false
 */

function checkPasswordValidate(password) {
  return /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/.test(password);
}

console.log("JS验证密码，必须是字⺟和数字结合");
console.log(checkPasswordValidate("dasdas1132156")); //true

console.log(checkPasswordValidate("dsadasdas")); //false

console.log('-----------------------------');
/**
 * JS检查输⼊的邮政编码是否正确
 * @param str
 * @returns {Boolean}
 */

function checkPostcode(str) {
  if (str.match(/^[1-9][0-9]{5}$/) == null) {
    return false;
  } else {
    return true;
  }
}

console.log("JS检查输⼊的邮政编码是否正确");
console.log(checkPostcode("423000")); //true

console.log(checkPostcode("029000")); //false

console.log('-----------------------------');
/**
 * JS验证是否为正整数
 * @param str
 * @returns
 */

function checkNumber(str) {
  return /^[1-9]\d*$/.test(str);
}

console.log("JS验证是否为正整数");
console.log(checkNumber(100)); //true

console.log(checkNumber(-100)); //false

console.log(checkNumber(0)); //false

console.log('-----------------------------');
/**
 * JS判断是否包含全⻆
 * @param str
 */

function checkHasFull(str) {
  for (var i = 0; i < str.length; i++) {
    strCode = str.charCodeAt(i);

    if (strCode > 65248 || strCode == 12288) {
      return true;
      break;
    }
  }

  return false;
}

console.log("JS判断是否包含全⻆");
console.log(checkHasFull("AaBb1234@#%&；，．：")); //true

console.log(checkHasFull("AaBb1234@#%&;,.:")); //false

console.log('-----------------------------');
/**
 * JS检查输⼊的⼀串字符是否全部是数字或者英⽂
 * @param str 字符串
 * @returns true 或 false; true表示为数字或者英⽂
 */

function checkEnNum(str) {
  for (var i = 0; i < str.length; i++) {
    var strTmp = str.charAt(i);

    if (!/[A-Za-z0-9]/.test(strTmp)) {
      return false;
    }
  }

  return true;
}

console.log("JS检查输⼊的⼀串字符是否全部是数字或者英⽂");
console.log(checkEnNum("dasdasdas")); //true

console.log(checkEnNum("dasdasdas13615!")); //false

console.log('-----------------------------');
/**
 * JS将数字转换成字符串的通⽤⽅法
 * 说明:直接使⽤ toFixed ⽅法会进⾏四舍五⼊，因此写⼀个将数字转换为
指定⼩数位数字符串的⽅法
 * @param sourceData 源数据
 * @param decimalLen ⼩数的位数
 */

function numberToString(sourceData, decimalLen) {
  decimalLen = _typeof(decimalLen) == undefined ? 0 : decimalLen;
  var result = sourceData + "";
  var integerStr = null; // 整数部分

  var decimalStr = null; // ⼩数部分

  if (result.indexOf(".") == -1) {
    result = Number(result).toFixed(decimalLen);
  } else {
    integerStr = result.substring(0, result.indexOf(".")); // 整数部分

    decimalStr = /\.\d+/.exec(result); // ⼩数部分

    decimalStr = Number(decimalStr);
    decimalStr = decimalStr.toPrecision(decimalLen).substr(0, decimalLen + 2);
    result = integerStr + decimalStr.substr(1);
  }

  return result;
}

console.log("JS将数字转换成字符串的通⽤⽅法");
console.log(numberToString(233, 2)); // 233.00

console.log('-----------------------------');