

//start of basic calc function 

var basicButton = document.getElementById('basic-calc');
basicButton.addEventListener('click', function() { 

  //get basic number from user input, convert to string, pharse to float.
  var num1 = parseFloat(document.getElementById('basic-num-1').value);
  var num2 = parseFloat(document.getElementById('basic-num-2').value);

  //get basic operator
  var op = document.getElementById('basic-operation').value;

  var answer;

  // perform relevent mathmatical function 
      switch(op){
      case "+":
        answer = num1 + num2;
        console.log(answer);
        break;

      case "-":
        answer = num1 - num2;
        console.log(answer);
        break;

      case "*":
        answer = num1 * num2;
        console.log(answer);
        break;

      case "/":
        answer = num1 / num2;
        console.log(answer);
        break;
    };

    var basicAnswer = document.getElementById("basic-answer")

    basicAnswer.className = "show"
    document.getElementById('basic-answer-alert').innerHTML = "The answer is: " + answer;


// end of basic calc event listener 
});

// start of trip function

var tripButton = document.getElementById('trip-calc');
tripButton.addEventListener('click', function() { 

  //get basic number from user input, convert to string, pharse to float.
  var distance = parseFloat(document.getElementById('trip-distance').value);
  var mpg = parseFloat(document.getElementById('trip-mpg').value);
  var cost = parseFloat(document.getElementById('trip-cost').value);
  var speed = parseFloat(document.getElementById('trip-speed').value);

//math function 
      
  var time = distance / speed;
  time = Math.round(time * 100) / 100; // round it to two decimals
  var actualMPG = (mpg > 60) ? Math.max(0, mpg - (speed - 60) * 2) : mpg;

  var cost = (distance / actualMPG * cost);
  cost = Math.round(cost * 100) / 100;

  var tripAnswer = document.getElementById("trip-answer")

  tripAnswer.className = "show"
  document.getElementById('trip-answer-alert').innerHTML = "The journey will take " + time + " hours. " + " It will cost you $" + cost;


// end of trip event listener 
});

// start of BMI function

var bmiButton = document.getElementById('bmi-calc');
bmiButton.addEventListener('click', function() { 

  var answer;

  //get units and personal info from user input, puts to string, pharse to float.
  var units = document.getElementById('bmi-units').value;
  var height = parseFloat(document.getElementById('bmi-height').value);
  var mass = parseFloat(document.getElementById('bmi-mass').value);

//math function 
  
  if (units === "imperial") {
          answer = ((mass / (height * height)) * 703).toFixes(2);

      } else if (units === "metric") {

          answer = (mass / (height * height)).toFixed(2);
          console.log("testing:" + answer);
    } else {
        console.log('Something went wrong');
      }

  var bmiAnswer = document.getElementById("bmi-answer")

  bmiAnswer.className = "show"
  document.getElementById('bmi-answer-alert').innerHTML = "Your BMI is " + answer;


// end of BMI event listener 
});

// start of Mortgage function

  var mortgageButton = document.getElementById('mortgage-calc');
  mortgageButton.addEventListener('click', function() { 

  var answer;

  //get units and personal info from user input, puts to string, pharse to float.

  var loan = parseFloat(document.getElementById('mortgage-loan').value);
  var apr = parseFloat(document.getElementById('mortgage-apr').value);
  var months = parseFloat(document.getElementById('mortgage-term').value);
  
//math function 

  apr = apr/months;
  var temp = Math.pow((1 + apr), months);
  var answer = loan * ((apr * temp) / (temp - 1));
  answer = Math.round(answer); // round to 2 decimals

// render answer      

  var mortgageAnswer = document.getElementById("mortgage-answer")

  mortgageAnswer.className = "show"
  document.getElementById('mortgage-answer-alert').innerHTML = "monthy repayments: " + answer;


// end of Mortgage event listener 
});


