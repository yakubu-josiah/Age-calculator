const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("btn");
const presentDate = new Date();

function checkLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
buttonEl.addEventListener("click", function () {
  console.log("Clicked!!");
  let birthDay = inputEl.value;
  // console.log(Date(birthDay).getFullYear());
  var birthYear = new Date(birthDay).getFullYear();
  var birthMonth = new Date(birthDay).getMonth() + 1;
  var birthDate = new Date(birthDay).getDate();
  console.log("Your birth date is " + birthDate);
  console.log("Your birth month is " + birthMonth);
  console.log("Your birth year was in " + birthYear);
  console.log("Present month is " + presentDate.getMonth());
  // console.log(inputEl.getTime());
  let result = presentDate.getFullYear() - birthYear;
  result--;
  console.log(result);
  var leapBirth = checkLeapYear(birthYear); 
  console.log(leapBirth +  `, it's ${leapBirth == 1 ? "a" : "not a"} leap year`);
  // console.log(checkLeapYear(presentDate.getFullYear()));
});
