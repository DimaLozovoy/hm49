let age = 15;
console.log(age);
let firstName = "Dimachka";
console.log(firstName);
let = isStudent = true;
console.log(isStudent);
const myString = "Когда меня рожали... Собвстевнно, тогда я и родился";
console.log(myString);
let myNumber = 1478;
myNumber += 10;
console.log(myNumber);
const myNull = null;
console.log(myNull);
alert("У тебе є можливість вввести дату коли Team Spirit дізбанднуться");
let DateOfSpiritsEnd = prompt("Введіть дату:");
alert(`Чорт, Team Spirit дізбанднуться: ${DateOfSpiritsEnd}`);
let text;
if (
  confirm(
    `Ви точно впевнені що Team Spirit дізбанднуться ${DateOfSpiritsEnd}`
  ) == true
) {
  text = "Подивимось";
} else {
  text = `Не впевнена ти людина!!`;
}
alert(text);
