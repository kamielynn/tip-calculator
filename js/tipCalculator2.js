
window.onload=function(){

  // prompt inputs from user and assign variables”
  var cost = parseFloat(prompt("How much was your meal?"));
  var taxRate = parseFloat(prompt("What is the tax rate?"));
  var tipPercent = parseFloat(prompt("What percentage would you like to tip?"));

  //calculate 
  var tax = cost * (taxRate / 100);
	console.log (tax);

  var tip = cost * (tipPercent / 100);
  console.log (tip);

  var total = cost + tax + tip;
	console.log (total);

  // message
  alert("meal: $" + (cost) + "\n" + "tax: $" + (tax).toFixed(2) + "\n" + tipPercent + "% tip: $" + (tip).toFixed(2) + "\n" +"___________________________" + "\n" + "total: $" + (total).toFixed(2) ); 

}