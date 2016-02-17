function tip_calculator(bill_amt) {
	return bill_amt*0.2;
}

var bill_amt = Number(prompt("What is the amount of your bill?"));

bill_amt += tip_calculator(bill_amt);

console.log("Your total bill with tip is " + bill_amt);
//alert("Your total bill with tip is " + bill_amt);