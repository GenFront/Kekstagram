

// function isLengthValid(string, maxLength) {
//   if(string.length <= maxLength) {
//     return true;
//   } else {
//     return false;
//   }
// }
// isLengthValid('Text', 10);

// или стрелочная функция

const isLengthValid = (string, maxLength) => string.length <= maxLength;

isLengthValid('Text', 10);

