export const dna =(cadena) =>{
    let str = cadena.replace(/(.)(?=.*\1)/g, "");
    

    return str;
}