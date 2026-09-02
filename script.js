/*
 * This file is where you should write your code. Remember to click
 * Run after you make changes to re-run the tests with your new code.
 */

// problems 1-10

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




// problems 11-20

function firstLast6(arr) {
    return arr[0] == 6 || arr[arr.length - 1] == 6;
}

function has23(arr) {
    for(let element of arr) {
        if(element == 2 || element == 3) {
            return true;
        }
    }
    return false;
}

function fix23(arr) {
    let newArr = arr;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 2 && arr[i + 1] == 3) {
            newArr[i + 1] = 0;
        }
    }
    return newArr;
}

function countYZ(string) {
    let yzCount = 0;
    for(let i = 0; i < string.length; i++) {
        if((string.toLowerCase().substring(i, i+1) == "y" || string.toLowerCase().substring(i, i+1) == "z") && (string.toLowerCase().substring(i + 1, i + 2) == " " || string.toLowerCase().substring(i + 1, i + 2) == "")) {
            yzCount++;
        }
    }
    return yzCount;
}

function endOther(str1, str2) {
    let str1Lower = str1.toLowerCase();
    let str2Lower = str2.toLowerCase();

    return str1Lower.substring(str1Lower.length - str2Lower.length, str1Lower.length) == str2Lower || str2Lower.substring(str2Lower.length - str1Lower.length, str2Lower.length) == str1Lower;
}

function starOut(string) {
    let newString = "";
    for(i = 0; i < string.length; i++) {
        if(string.substring(i + 1, i + 2) != "*" && string.substring(i, i + 1) != "*" && string.substring(i - 1, i) != "*") {
            newString += string.substring(i, i + 1);
        }
    }
    return newString;
}

function getSandwich(string) {
    if(string.indexOf("bread") == -1 || (string.lastIndexOf("bread") == string.indexOf("bread"))) {
        return "";
    } else {
        return string.substring(string.indexOf("bread") + 5, string.lastIndexOf("bread"));
    }
}

function canBalance(arr) {
    return true;
}