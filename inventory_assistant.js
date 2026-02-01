let itemName = "Lenovo Gamepad 2070S";
let unitCost = 203.23;
let currentStock = 460;
let reorderLevel = 400;
let targetStock = 1500;
let weeklyDemand = 110;
let supplierLeadTimeWeeks = 5;


let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

console.log("Product name: " + itemName);
console.log("You are covered for: " + weeksOfCover.toFixed(2) + " " + "weeks");
console.log("Reorder Now: " + reorderNow);
console.log("Is recommended to order: " + reorderQuantity);
console.log("The estimated reorder cost is: $ " + estimatedReorderCost.toFixed(2));