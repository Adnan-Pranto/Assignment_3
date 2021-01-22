    https://github.com/Adnan-Pranto/Assignment_3
        
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


        //Secound Problem : Budget Calculator 

function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Money can't be negative value..!!";
    }
    var watchPrice = 50 * watch;
    var mobilePrice = 100 * mobile;
    var laptopPrice = 500 * laptop;

    var total = watchPrice + mobilePrice + laptopPrice;
    return total;

}

            //Third Problem : Hotel Offers.. 


function hotelCost(stay) {
    var first_Offrer = 0;
    var second_Offrer = 0;
    var third_Offrer = 0;
    var total_Cost = 0;

    if (stay <= 0) {
        return "Day's can't be zero or negative..!!"
    }

    for (var i = 1; i <= stay; i++) {
        if (i >= 1 && i <= 10) {
            first_Offrer = i * 100;
        }
        else if (i >= 11 && i <= 20) {

            second_Offrer = i * 80 - 800;
        }
        else if (i >= 21) {
            third_Offrer = i * 50 - first_Offrer;
        }
    }
    total_Cost = first_Offrer + second_Offrer + third_Offrer;
    return total_Cost;
}

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
