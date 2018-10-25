
var answer = [];

function masterConvert(input) {
  if(input <= 3) {
    return oneThruFour(input);
  } else if(input >3 && input <= 5) {
    return fourAndFive(input);
  } else if (input < 9 && input >= 5) {
    return sixThruEight(input);
  } else if (input > 8 && input <= 10) {
    return nineAndten(input);
  } else if (input > 10 || input <= 50) {
    return tenToNinety(input);
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

function nineAndten(input) {
  var functionArray = ['X'];
  if(input > 8 && input <= 10) {
    for(var i = 1; i <= (10 -input); i++) {
      functionArray.unshift("I");
    }
      return functionArray.slice().join("");
  }
}

function tenToNinety(input) {
  var tensPlace = input.split("").slice(0,1);
  var onesPlace = input.split("").slice(1);
  switch (tensPlace.join()) {

    case "2":
    tensPlace = "XX";
    break;

    case "3":
    tensPlace = "XXX";
    break;

    case "4":
    tensPlace = "XL";
    break;

    case "5":
    tensPlace = "L";
    break;

    case "6":
    tensPlace = "LX";
    break;

    case "7":
    tensPlace = "LXX";
    break;

    case "8":
    tensPlace = "LXXX";
    break;

    case "9":
    tensPlace = "XC";
    break;

    default:
    }
    onesPlace = masterConvert(onesPlace);
    return(tensPlace + onesPlace);
  }



// client-side code:
$(document).ready(function(){
  $("#translater").submit(function(event){
    event.preventDefault();

    var userInput = $("input#userInput").val();
    var romanConvert = masterConvert(userInput);

    $("#output").text(romanConvert);


  });
});
