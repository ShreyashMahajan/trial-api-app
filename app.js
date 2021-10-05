var dateInput = document.querySelector("#input-date");
var btnSubmit = document.querySelector("#btn-text");
var outputDisplay = document.querySelector("#output");

function clickHandler(){
   
  var yearFinal = getYear(dateInput.value);
   var yearConvert = convertToNumber(yearFinal);
  
 var showLeapYear =  isLeapYear(yearConvert);
 if(yearConvert){
   if(showLeapYear){
       showMessage("Hey it's a Leap year");
   }else {
       showMessage("Hey it's not a Leap year");
   }
}else {
    showMessage("Please enter date");
}
  
}

function getYear(date){
    var dateConverted = date.replaceAll("-","");
    dateConverted = dateConverted.slice(0,4);
    return dateConverted;
}

function convertToNumber (year){
   return Number(year);
}

function isLeapYear(yearCheck){
    if(yearCheck % 400 === 0){
       return true;
    }
    if(yearCheck % 100 === 0){
       return false; 
    }  
    if(yearCheck % 4 === 0) {
       return true;
    }
    return false;
}
function showMessage(msg){
    outputDisplay.innerText = msg;
}
btnSubmit.addEventListener("click", clickHandler );


