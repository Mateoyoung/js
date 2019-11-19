//1
function sleep_in(weekday,vacation) {
    return weekday;
}

//2//////////////////////////////////
function monkey_trouble(param1, param2) {
    return param1;
}

//3////////////////////////////////////
function string_times(str,int){
      var str2 = "";
     for(var i = 0; i<int; i++){
         str2 += str;

     }

     return str2;
}

//4///////////////////////////////////
function front_times(str,int){
    var letters = str.substring(0,3);
    var a = "";

    for(var i = 0; i < int; i++){

        a = a + letters;

    }


    return (a);
}


/5////////////////////////////////////
function string_bits(str){
    var name = "";
    for(var i = 0; i<str.length; i = i+2){
       if(var % 2 == 0){
           name += str.substring(i, i+ 10);
        }

    }


}


/6///////////////////////////////////
function caughtSpeeding(speed,bDay) {
    var x = 0;

    if (bDay == true) {
        x = -5;
    }

    var trueSpeed = speed + x;

    if (trueSpeed <= 60) {
        return 0;

    }

    if (trueSpeed >= 65 && trueSpeed < 85) {
        return 1;
    }

    if(trueSpeed >= 85){   // should work???

        return 2;
    }

}

/7////////////////////////////////////
function fizz_buzz(xInt) {
    if (xInt % 3 == 0 && xInt % 5 == 0){
        return "FizzBuzz";
    }

    if (xInt % 3 == 0){
        return "Fizz";
    }

    if (xInt % 5 == 0){
        return "Buzz";
    }

    if (xInt % 3 !==0 && xInt % 5 !== 0){
        return xInt + "!";
    }


}

/8/////////////////////////////////////
function teaParty(tea,candy){
    if(tea < 5 || candy < 5){
        return 0;
    }

    if(tea >= candy * 2 || candy >= tea * 2){
        return 2;
    }

    if(tea >= 5 && candy >= 5 ){
        return 1;
    }
}

/9////////////////////////////////////
function blackjack(x,y){
    if(x > 21 && y > 21){
        return 0;
    }

    if(y > 21){
        y = 0
    }

    if(x > 21){
        x = 0;
    }

    if(x > y){
        return x;
    }

    if(y > x){
        return y;
    }
}

/10//////////////////////////////////
function loneSum(x,y,z){
    if(x == y && y == z) {
        x = 0;
        y = 0;
        z = 0;

    }
    if(x == y){
        x = 0;
        y = 0;
    }

    if(x == z){
        x = 0;
        z = 0;
    }

    if (z == y){
        z = 0;
        y = 0;
    }

    if(z == x){
        z = 0;
        x = 0;
    }



    return x + y + z;
}




//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
}
