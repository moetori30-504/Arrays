let input =require("prompt-sync")();
let listOfGuest = [ ];
let continueProgram= "yes";


while (continueProgram==="yes"){
    let guest = input("Enter name: ")
    listOfGuest.push(guest);
    continueProgram = input("Another guest?: ")
}

    console.table(listOfGuest);