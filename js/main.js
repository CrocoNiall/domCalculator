var answer;

var basicButton = document.getElementById('basic-calc');
basicButton.addEventListener('click', function() { 

  //get basic number from user input, convert to string, pharse to float.
  var num1 = parseFloat(document.getElementById('basic-num-1').value);
  var num2 = parseFloat(document.getElementById('basic-num-2').value);

  //get basic operator
  var op = document.getElementById('basic-operation').value;
  
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


//   console.log(num1);



// console.log('button click')

});

// console.log(basicButton);
