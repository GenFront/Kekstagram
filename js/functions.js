//task1

// Строка короче 20 символов
isLengthValid('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
isLengthValid('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isLengthValid('проверяемая строка', 10); // false

function isLengthValid(str, maxLength) {
  if(str.length <= maxLength) {
    return true;
  }
}

isLengthValid('Text', 10);

// или стрелочная функция:
// const isLengthValid=(string, maxLength)=> string.length <= maxLength;

//или через тернарник:
// function isLengthValid(str, maxLength) {
// const isValid=string.length <=maxLength;
// return isValid;
//}


//task2

function isPalindrome(string) {
  const normalizedString = string.toLowerCase().replaceAll(' ', '');
  let emptyString = '';
  for (let i = normalizedString.length - 1; i >= 0; i--) {
    emptyString += normalizedString.at(i);
  }
  return emptyString === normalizedString;

}


// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false
