function playFizzBuzzForNTurns(n) {
    for(let i = 1; i <= n; i++)
        turn(i);
}

function turn(i){
    console.log(replaceIfDivisible(i));
}

function replaceIfDivisible(number){
    result = number;
    if(number % 3 == 0)
        result = "FizzBuzz";
    else if(number % 5 == 0)
        result = "Buzz";
    else if(number % 15 == 0)
        result = "Fizz";
    return  result;
}

function main() {
    playFizzBuzzForNTurns(10);
}

main();
