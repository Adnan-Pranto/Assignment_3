    /* First Problem
    Convert Kilometer To Meter */

function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {
        return "Distance can not be Negative value !!";
    }
    else {
        return meter;
    }
}
var output = kilometerToMeter(10)
console.log(output);


     //Secound Problem : Budget Calculator 

function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return " can't be negative";
    }
    var watchPrice = 50 * watch;
    var mobilePrice = 100 * mobile;
    var laptopPrice = 500 * laptop;

    var total = watchPrice + mobilePrice + laptopPrice;
    return total;

}
var total = budgetCalculator(4, 2, 1);
console.log(total);

        //Fourth Problem : Largest String.. 

function megaFriend(friends) {
    for (var i = 1; i < friends.length; i++) {
        var element = friends[i];


        if (element.length > maxWord.length) {
            maxWord = element;
        }
    }
    return maxWord;
}
//Declare Array for string.
var friends = ['Adnan Rahman', 'Pranto', 'Rishad Amin', 'Ashiqur Rahman', 'Hamidul Islam'];
var maxWord = friends[0];
var biggestName = megaFriend(friends);
console.log(biggestName);