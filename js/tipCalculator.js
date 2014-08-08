
  // On page load prompt “How much was your meal?”
  var cost = prompt("How much was your meal?");
  // Save input as cost var
  var tax = prompt("What is the tax rate?");
  // Save input as tax
  var tip = prompt("What percentage would you like to tip?");
  // Save input as tip

  var subtotal = parseFloat(cost) * (parseFloat(tax) / 100) + parseFloat(cost);
	console.log (subtotal);

  var total = subtotal * (parseFloat(tip) / 100) + subtotal;
	console.log (total);

  alert("cost: $" + (cost) + "\n" + "tax: $" + (tax / 100).toFixed(2) + "\n" + "tip: $" + (tip / 100).toFixed(2) + "\n" +"___________________________" + "\n" + "total: $" + (total).toFixed(2) ); 
