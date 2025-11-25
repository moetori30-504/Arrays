let input =require("prompt-sync")()
let orders=[];
let cost=[];

let countinueLoop;

do{
  let orderId = input("Enter Order Id:");
  let costofOrder = parseFloat(input("Enter cost of order:"));
  orders.push(orderId);
  cost.push(costofOrder);

countinueLoop = input("add another order:?");

}while(countinueLoop =="yes");

let report= [];
let summary = 0;

for(let i=0; i < orders.length; i=i+1){

    let reportentry= ` order id: ${orders[i]} cost: ${cost[i]}`;
    report.push(reportentry);
    summary= summary + cost[i];

}
   console.table(report);
   console.log(`total cost : $${summary}`);
