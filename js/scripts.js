
var answer = [];

function masterConvert(input) {
  if(input <= 3) {
    return oneThruFour(input);
  } else if(input >3 && input <= 5) {
    return fourAndFive(input);
  } else if (input < 9 && input >= 5) {
    return sixThruEight(input);
  } else {
    return "Sorry, answer eludes us";
  }
}


function oneThruFour(input) {
  var functionArray = [];
  if(input <= 3) {
    for(var i =1; i <= input; i++) {
      functionArray.push("I");
    }
    return functionArray.slice().join("");
  }

}

function fourAndFive(input) {
  var functionArray = ['V'];
  if(input >3 && input <= 5){
    for(var i =1; i <= (5 - input); i++)
      functionArray.unshift("I");
    }
      return functionArray.slice().join("");

}




function sixThruEight(input) {
  var functionArray = ['V'];
  if(input < 9 && input >= 5)
    for(var i = 1; i<= (input - 5); i++) {
      functionArray.push("I");
    }
    return functionArray.slice().join("");

}














$(document).ready(function(){
  $("#translater").submit(function(event){
    event.preventDefault();

    var userInput = $("input#userInput").val();
    var romanConvert = masterConvert(userInput);

    $("#output").text(romanConvert);


  });
});
