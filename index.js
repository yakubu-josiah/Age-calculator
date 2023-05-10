const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("btn");
const presentDate = new Date();


buttonEl.addEventListener("click", function() {
    console.log("Clicked!!");
    let birthDay = inputEl.value;
    console.log(Date(birthDay).getFullYear());
    var birthYear = new Date(birthDay).getFullYear();
    var birthMonth = new Date(birthDay).getMonth() + 1;
    console.log('Your birth month is ' +birthMonth);
    console.log('Your birth year was in ' +birthYear);
    console.log('Present month is ' + presentDate.getMonth());
    // console.log(inputEl.getTime());
    let result = presentDate.getFullYear() - birthYear;
    console.log(result);
});