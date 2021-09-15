import { dna } from "./dna";

test("Cadena sin caracteres repetidos",()=>{
    expect(dna("CTAGGGTA")).toBe("CGTA");
})