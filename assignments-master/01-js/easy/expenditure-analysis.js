/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  
   // Create an object to store total spending per category
   const categoryTotals = {};

   // Iterate through each transaction
   transactions.forEach(transaction => {
     const { category, price } = transaction;
 
     // Check if the category exists in the categoryTotals object
     if (categoryTotals[category] === undefined) {
       // If not, initialize it with the current transaction's price
       categoryTotals[category] = price;
     } else {
       // If yes, add the current transaction's price to the existing total
       categoryTotals[category] += price;
     }
   });
 
   // Convert the categoryTotals object into an array of objects
   const result = Object.keys(categoryTotals).map(category => ({
     category,
     totalSpent: categoryTotals[category],
   }));
 
   return result;
}

module.exports = calculateTotalSpentByCategory;
