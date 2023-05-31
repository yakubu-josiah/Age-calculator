const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("btn");
const resultEl = document.getElementById("result");


function leapYearCheck(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function ageCalculator() {
  
  const today = new Date();
  let todayLeapYear = leapYearCheck(today.getFullYear());
  let birthDay = inputEl.value;

  let userYear = new Date(birthDay).getFullYear();
  let userMonth = new Date(birthDay).getMonth();
  let userDate = new Date(birthDay).getDate();
  let userLeapYear = leapYearCheck(userYear);


  var age = today.getFullYear() - userYear;

  if ( birthDay === "" ) {
    return alert("Oops!! Please enter your date of birth");
  }

  //Checking if birthday month is passed OR It's birthday month but not yet date
  if (
    today.getMonth() < userMonth ||
    (today.getMonth() === userMonth && today.getDate() < userDate)
  ) {
    age--;
    console.log(age);
  }

  //Adjusting year if it is a leap year
  if (todayLeapYear && !userLeapYear && userMonth <= 1 && userDate <= 28) {
    age--;
    console.log("Happy!!")
  }

  resultEl.classList.add("bold");
  return resultEl.innerText = `Hey see!! You're ${age} ${age > 1 ? "years": "year"} old`;
}


buttonEl.addEventListener("click", function() {
  buttonEl.disabled = true;
  const spinner = document.createElement('span');
  spinner.className = 'spinner';
  buttonEl.appendChild(spinner);
  resultEl.innerText = "";
  
  setTimeout(function() {
    setTimeout(function() {
      resultEl.innerText = "LIKE TO KNOW YOUR AGE?";
      buttonEl.disabled = false;
      buttonEl.removeChild(spinner);
      ageCalculator() 
    }, 300)

  });

});
