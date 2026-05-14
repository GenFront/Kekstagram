

function isLengthValid(str, maxLength) {
  if(str.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}
isLengthValid('Text', 10);

// или стрелочная функция:
// const isLengthValid = (string, maxLength) => string.length <= maxLength;

//или через тернарник:
//function isLengthValid(str, maxLength) {
// const isValid = string.length <= maxLength;
// return isValid;
//}

