function revStr(str){
    return str.split("").reverse().join("");
}

console.log(revStr("Vivek"));

function checkPalindrome(num){
    let str = num.toString();
    str = str.toLowerCase();
    let revStr = str.split("").reverse().join("");
    if(str == revStr){
        return "Wins"
    }else{
        return "Loses"
    }
}

console.log(checkPalindrome(125))