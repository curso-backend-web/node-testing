import { fizzbuzz } from "./fizzbuzz";

test("Fizzbuzz es divisible por 3",()=>{
    expect(fizzbuzz(9)).toBe("Fizz");
})

test("Fizzbuzz es divisible por 5",()=>{
    expect(fizzbuzz(25)).toBe("Buzz");
    
})

test("Fizzbuzz es divisible por 3 o 5",()=>{
    expect(fizzbuzz(15)).toBe("FizzBuzz");
    
})

test("Fizzbuzz si no es divisible por 3 o 5 devuelve el numero",()=>{
    expect(fizzbuzz(2)).toBe(2);
    
})