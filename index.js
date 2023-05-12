const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("btn");
const presentDate = new Date();

function checkLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

buttonEl.addEventListener("click", function () {
  console.log("Clicked!!");
  let birthDay = inputEl.value;
  let birthYear = new Date(birthDay).getFullYear();
  let birthMonth = new Date(birthDay).getMonth() + 1;
  let birthDate = new Date(birthDay).getDate();
  console.log("Your birth date is " + birthDate);
  console.log("Your birth month is " + birthMonth);
  console.log("Your birth year was in " + birthYear);
  console.log("Present month is " + presentDate.getMonth());
  // console.log(inputEl.getTime());
  let result = presentDate.getFullYear() - birthYear;
  result--;
  console.log(result);
  let leapBirth = checkLeapYear(birthYear); 
  console.log(leapBirth +  `, it's ${leapBirth == 1 ? "a" : "not a"} leap year`);
  // console.log(checkLeapYear(presentDate.getFullYear()));
});
