/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */

function sleep_in(weekday,vacation){
    return !weekday || vacation;
}

function monkey_trouble(a_smile, b_smile) {
    return(a_smile && b_smile) || (!a_smile && !b_smile);
}

function string_times(str,num){
    let builtString = "";
    for(let i = 0; i < num; i++) {
        builtString += str;
    }
    return builtString;
}

function front_times(string, num) {
    let builtString = "";
    let frontString = string.substring(0, 3);
    for(let i = 0; i < num; i++) {
        builtString += frontString;
    }
    return builtString;
}

function string_bits(string) {
    let newString = "";
    for(let i = 0; i < string.length; i += 2) {
        newString += string.substring(i, i + 1);
    }
    return newString;
}

function caughtSpeeding(speed, isBirthday) {
    let speedAccountingBirthday = speed;
    if(isBirthday) {
        speedAccountingBirthday -= 5;
    }
    if(speedAccountingBirthday <= 60) {
        return 0;
    } else if(speedAccountingBirthday > 60 && speedAccountingBirthday <= 80) {
        return 1;
    } else if(speedAccountingBirthday > 80) {
        return 2;
    }
}

function fizz_buzz(num) {
    if(num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz";
    } else if(num % 3 == 0) {
        return "Fizz";
    } else if(num % 5 == 0) {
        return "Buzz";
    } else {
        return num + "!";
    }
}

function specialEleven(num) {
    return num % 11 == 0 || (num - 1) % 11 == 0;
}

function withoutDoubles(num1, num2, noDoubles) {
    if(noDoubles && num1 == num2) {
        num1++;
        if(num1 > 6) {
            num1 = 1;
        }
    }
    return num1 + num2;
}

function left2(string) {
    let newString = "";
    newString += string.substring(2);
    newString += string.substring(0, 2);
    return newString;
}