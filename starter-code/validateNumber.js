
export let divisibleNumber = (x) => {
    let str = "Fizz"
    if (!(x % 5)) {
        if (!(x % 3)) str = "FizzBuzz";
        else str = "Buzz";
    }
    return str;
}

export let isLeapYear = (x) =>{
    let isleap  = false;
    if ((!(x % 4) || (!(x % 400))) && (x % 100)) isleap = true;
    return isleap;
}

export let sumArrayElements = (x) =>{
    let sum = x.reduce((a, b) => (Math.sign(parseInt(b))==1)?a + parseInt(b) : a, 0);
    return sum;
}