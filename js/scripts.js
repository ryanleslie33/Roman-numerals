
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
  } else if (input > 10 && input <= 99) {
    return tenToNinetyNine(input);
  } else if (input > 99 && input <= 999){
    return oneHundredToNineHundredNinetyNine(input);
  } else if (input > 999 && input <= 3999){
    return oneThousandToEnd(input);
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

function tenToNinetyNine(input) {
  var tensPlace = input.split("").slice(0,1);
  var onesPlace = input.split("").slice(1);
  switch (tensPlace.join()) {
    case "1":
    tensPlace = "X";
    break;

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

  function oneHundredToNineHundredNinetyNine(input) {
    var hundredsPlace = input.split("").slice(0,1);
    var tensPlace = input.split("").slice(1,2);
    var onesPlace = input.split("").slice(2);

    switch (hundredsPlace.join()) {
      case "1":
      hundredsPlace = "C";
      break;

      case "2":
      hundredsPlace = "CC";
      break;

      case "3":
      hundredsPlace = "CCC";
      break;

      case "4":
      hundredsPlace = "CD";
      break;

      case "5":
      hundredsPlace = "D";
      break;

      case "6":
      hundredsPlace = "DC";
      break;

      case "7":
      hundredsPlace = "DCC";
      break;

      case "8":
      hundredsPlace = "DCCC";
      break;

      case "9":
      hundredsPlace = "CM";
      break;

      default:
      }
      onesPlace = masterConvert(onesPlace);
      tensPlace = tenToNinetyNine(tensPlace.join());
      return(hundredsPlace + tensPlace + onesPlace);
    }

    function oneThousandToEnd(input) {
      var thousandsPlace = input.split("").slice(0,1);
      var hundredsPlace = input.split("").slice(1,2);
      var tensPlace = input.split("").slice(2,3);
      var onesPlace = input.split("").slice(3,);

      switch (thousandsPlace.join()) {
        case "1":
        thousandsPlace = "M";
        break;

        case "2":
        thousandsPlace = "MM";
        break;

        case "3":
        thousandsPlace = "MMM";
        break;

        default:
        }
        onesPlace = masterConvert(onesPlace);
        tensPlace = tenToNinetyNine(tensPlace.join());
        hundredsPlace = oneHundredToNineHundredNinetyNine(hundredsPlace.join());
        return(thousandsPlace + hundredsPlace + tensPlace + onesPlace);
        // console.log (onesPlace + " " + tensPlace + " " + hundredsPlace + " " + thousandsPlace);
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
