const calculateAgeBtn = document.getElementById("calculate-age");
const dateInput = document.getElementById("date");
let result = document.getElementById("result");

dateInput.max = new Date().toISOString().split("T")[0];
function calculateAge(){
    let userDate = new Date(dateInput.value);
    let d1 = userDate.getDate();
    let m1 = userDate.getMonth() + 1;
    let y1 = userDate.getFullYear();

    let currentDate = new Date();
    let d2 = currentDate.getDate();
    let m2 = currentDate.getMonth() + 1;
    let y2 = currentDate.getFullYear();

    let d3,m3,y3;
    if(y2 >= y1){
        y3 = y2 - y1;
    }
    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = m2 + 12 - m1;
    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        d3 = getDaysInAMonth(y1,m1) + d2 -d1;
        m3--;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old.`
}
function getDaysInAMonth(year,month){
    return new Date(year,month,0).getDate();
}
calculateAgeBtn.addEventListener("click", calculateAge);