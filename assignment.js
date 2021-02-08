
// https://github.com/iamsadik/first-js-assignment








// killometerToMeter

function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
      var meter = kilometer * 1000;
      return meter;
    } else {
      var massage = "Wrong!";
      return massage;
    }
  }




//budgetCalculator

function budgetCalculator(watch, phone, laptop) {
    if (watch > 0 && phone > 0 && laptop > 0) {
      var total = watch * 50 + phone * 100 + laptop * 500;
      return total;
    } else {
      var massage = "Worng!";
      return massage;
    }
  }
  
  budgetCalculator();


  
  //HotelCost
  
  function hotelCost(daySpend) {
    var cost = 0;
    if (daySpend > 0) {
      if (daySpend <= 10) {
        cost = daySpend * 100;
      } else if (daySpend <= 20) {
        var spendDays10 = 10 * 100;
        var remainingDays = daySpend - 10;
        var spendDays20 = remainingDays * 80;
        cost = spendDays10 + spendDays20;
      } else {
        var spendDays10 = 10 * 100;
        var spendDays20 = 10 * 80;
        var remainingDays = daySpend - 20;
        var spendDaysUpto20 = remainingDays * 50;
        cost = spendDays10 + spendDays20 + spendDaysUpto20;
      }
    } else {
      var massage = "Wrong";
      return massage;
    }
    return cost;
  }
  
  var totalCost = hotelCost();





  
  //MegaFriend
  
  function megaFriend(array) {
    var longestString = "";
  
    array.forEach(function (string) {
      if (string.length > longestString.length) {
        longestString = string;
      } else {
        var massage = "wrong";
        return massage;
      }
    });
    return longestString;
  }
  
  megaFriend([]);
  