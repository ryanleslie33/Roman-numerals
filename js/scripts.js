
var answer = [];

function masterConvert(input) {
  if(input <= 3) {
    return underFive(input);
  } else if(input >3 && input <= 5) {
    return fours(input);
  } else if (input < 9 && input >= 5) {
    return eight(input);
  } else {
    return "Sorry, answer eludes us";
  }
}


function underFive(input) {
  var singleDigitArray = [];
  if(input <= 3) {
    for(var i =1; i <= input; i++) {
      singleDigitArray.push("I");
    }
    return singleDigitArray.slice().join("");
  }

}

function fours(input) {
  var singleDigitArray = ['V'];
  if(input >3 && input <= 5){
  return singleDigitArray.slice().join("");
  else  if ( i = 1; i< 5; i++){
    return  singleDigitArray.unshift("I");
    }
}
}

function eight(input) {
  var singleDigitArray = ['V'];
  if(input < 9 && input >= 5)
    for(var i = 1; i<= (input - 5); i++) {
      singleDigitArray.push("I");
    }
    return singleDigitArray.slice().join("");

}














$(document).ready(function(){
  $("#translater").submit(function(event){
    event.preventDefault();

    var userInput = $("input#userInput").val();
    var romanConvert = masterConvert(userInput);

    $("#output").text(romanConvert);


  });
});
