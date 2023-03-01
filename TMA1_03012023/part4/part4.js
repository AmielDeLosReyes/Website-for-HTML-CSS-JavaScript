$("#measure").click(function() {
    $("#measurement").show();
    $("#mortgage").hide();
    $("#compound").hide();
  });

  $("#mort").click(function() {
    $("#measurement").hide();
    $("#mortgage").show();
    $("#compound").hide();
  });

  $("#comp").click(function() {
    $("#measurement").hide();
    $("#mortgage").hide();
    $("#compound").show();
  });




function convertUnit()
{
  // Array for conversions
  let factors1 = new Array(1, 0.001, 0.000621,3.28084,1.09361);
  let factors2 = new Array(1000, 1, 0.621,3280.84,1093.61);
  let factors3 = new Array(1609.34, 1.60934, 1,5280,1760);
  let factors4 = new Array(0.3048,0.0003048,0.000189394,1,0.333333);
  let factors5 = new Array(0.9144,0.0009144,0.000568182,3,1);
  let factors = new Array(factors1,factors2,factors3,factors4,factors5);

  // Grab the correct conversion factor from our arrays
  fromIndex = document.lengthConversion.fromUnit.selectedIndex;
  toIndex = document.lengthConversion.toUnit.selectedIndex;
  let factor = factors[fromIndex][toIndex];

  // Create the text that we want to write on the middle line
  fromUnitText = document.lengthConversion.fromUnit.options[document.lengthConversion.fromUnit.selectedIndex].text;
  toUnitText = document.lengthConversion.toUnit.options[document.lengthConversion.toUnit.selectedIndex].text;
  document.getElementById("formula").innerHTML = fromUnitText + ' = ' + factor + ' ' + toUnitText;

  // Validate the inputted number
  if(isNaN(document.lengthConversion.fromValue.value))
    document.getElementById("result").innerHTML = "Not a valid number.";

  // Output the result, the converted number
  else {
    document.getElementById("result").innerHTML = "Result: " + factor * document.lengthConversion.fromValue.value;
  }
}

// Function for Weight Converter
function kiloweightConvert(value) {
  document.getElementById("Pounds").innerHTML = value * 2.2046;
  document.getElementById("Ounces").innerHTML = value * 35.274;
  document.getElementById("Grams").innerHTML = value * 1000;
  document.getElementById("Stones").innerHTML = value * 0.1574;
}

// Function for Area Converter
function areaConvert(value) {
  document.getElementById("Hectare").innerHTML = value * 0.404686;
  document.getElementById("SquareFoot").innerHTML = value * 43560;
  document.getElementById("SquareInch").innerHTML = value * (6.273**6);
  document.getElementById("SquareKm").innerHTML = value * 0.00404686;
  document.getElementById("SquareMeter").innerHTML = value * 4046.86;  
  document.getElementById("SquareMile").innerHTML = value * 0.0015625;
  document.getElementById("SquareYard").innerHTML = value * 4840;
}

// Function for Volume Converter
function volumeConvert(value) {
  document.getElementById("Milliliter").innerHTML = value * 1000;
  document.getElementById("USLiquidGallon").innerHTML = value * 0.264172;
  document.getElementById("USLiquidQuart").innerHTML = value * 1.05669;
  document.getElementById("USLiquidPint").innerHTML = value * 2.11338;
  document.getElementById("CubicMeter").innerHTML = value * 0.001;  
  document.getElementById("CubicFoot").innerHTML = value * 0.0353147;
  document.getElementById("CubicInch").innerHTML = value * 61.0237;
}


// Code for Mortgage Calculator
$("#mortgateCalculatorButton").click(function() {
  let loanAmount = document.getElementById("loan").value;
  let interestRate = ((document.getElementById("interestRate").value) / 100) / 12;
  let numOfMonths = document.getElementById("numOfMonths").value;

  /* Monthly payment for mortgage formula:
  M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]

  M = Total monthly payment
  P = The total amount of your loan
  I = Your interest rate, as a monthly percentage
  N = The total amount of months in your timeline for paying off your mortgage
  */

  let monthlyPayment = ((loanAmount) * (interestRate * (1 + interestRate)**numOfMonths)) / ((1 + interestRate) ** (numOfMonths - 1));

  document.getElementById("mortgageResult").innerHTML = "<b>Your total monthly payment is:</b> $" + monthlyPayment;
});

// Code for Compound Interest Calculator
$("#compountInterestCalculatorButton").click(function() {
  let capital = document.getElementById("capital").value;
  let numOfYears = document.getElementById("numOfYears").value;
  let cash = 0;

  for(let i = 0; i < numOfYears; i++) {
    let growthPerYear = capital * 0.10;
    cash += growthPerYear;
  }
  document.getElementById("compoundInterestResult").innerHTML = "<b>Assuming there is ~10% increase every year. " + numOfYears + " years from now, you will have $" + cash;
});