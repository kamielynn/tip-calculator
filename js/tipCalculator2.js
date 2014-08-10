
  // On page load prompt “How much was your meal?”
  var cost = prompt("How much was your meal?");
  // Save input as cost var
  var taxRate = prompt("What is the tax rate?");
  // Save input as tax
  var tipPercent = prompt("What percentage would you like to tip?");
  // Save input as tip

  var tax = parseFloat(cost) * (parseFloat(taxRate) / 100);
	console.log (tax);

  var tip = parseFloat(cost) * (parseFloat(tipPercent) / 100);
  console.log (tip);

  var total = parseFloat(cost) + parseFloat(tax) + parseFloat(tip);
	console.log (total);

  alert("meal: $" + (cost) + "\n" + "tax: $" + (tax).toFixed(2) + "\n" + tipPercent + "% tip: $" + (tip).toFixed(2) + "\n" +"___________________________" + "\n" + "total: $" + (total).toFixed(2) ); 
