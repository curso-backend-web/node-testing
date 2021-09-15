import { years } from "./years";

test("Divisible entre 4 y 400 y no entre 100",()=>{
    expect(years(400)).toBe("leap year");
})

test("Divisible entre 100",()=>{
    expect(years(100)).toBe("no leap year");
})
