//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
var guestArr = ["Ahmed", "Hamza", "Usama", "sadaf"];
var canNotAttend = "Ahmed";
var newGuest = "Imran";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr)
//guestArr.map((item)=>
//console.log(`Dear ${item}, "I found a Bigger Dinner Table"`))
var guestBegin = "Hira";
guestArr.unshift(guestBegin);
console.log(guestArr);
var middleGuest = "safa";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleGuest);
//console.log(guestArr)
guestArr.push("Marwa");
//console.log(guestArr)
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", \"you are cordinally invited to the dinner\""));
});
