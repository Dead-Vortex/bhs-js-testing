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
    // iterate through the array, check for each element if that element
    // plus all previous elements add up to the sum of all next elements
    for(let i = 0; i < arr.length; i++) {
        //console.log("test " + (i + 1));
        let leftSum = 0;
        for(let j = 0; j < i + 1; j++) {
            leftSum += arr[j];
            //console.log("currently pondering " + arr[j] + ", total sum of left so far is " + leftSum);
        }
        let rightSum = 0;
        for(let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
            //console.log("currently pondering " + arr[k] + ", total sum of right so far is " + rightSum);
        }
        if(leftSum == rightSum) {
            //console.log("nice this is straight fax brother");
            return true;
        }
    }
    //console.log("nope not balanaced srry");
    return false;
}

function countClumps(arr) {
    let clumps = 0;
    // when at #, check if next number matches. if it does, check next, etc.
    // as soon as it doesn't match, check how many digits you've checked and
    // if you've checked more than 2 digits then it is a clump
    // then skip to the next clump somehow?
    let lastClumpDigit;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i + 1] && arr[i] != lastClumpDigit) {
            clumps++;
            lastClumpDigit = arr[i];
        } else if(arr[i] != lastClumpDigit) {
            lastClumpDigit = arr[i];
        }
    }
    return clumps;
}

function sameEnds(str) {
    // check every possible substring (0, i) and see if it appears at the end
    // AND make sure end of first substring is less than start of second
    // end of first is i + 1 and end of second is str.length - i
    let longestSubstring = "";
    //console.log("STRING TO END: " + str);
    for(let i = 0; i < str.length; i++) {
        //console.log("current substring: " + str.substring(0, i + 1));
        //console.log("end substring to test: " + str.substring(str.length - 1 - i, str.length));
        if(str.substring(0, i + 1) == str.substring(str.length - i - 1, str.length) && i + 1 <= str.length / 2 && i + 1 > longestSubstring.length) {
            longestSubstring = str.substring(0, i + 1);
        }
    }
    return longestSubstring;
}