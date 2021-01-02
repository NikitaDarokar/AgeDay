
function ageInDays() {
    var birtYear = prompt("what year were you born... Good freind?");
    var ageInDayss = (2020 - birtYear)*365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode(" You are " + ageInDayss + "days");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flexBoxResult').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}