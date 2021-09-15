export let eliminateRemoveRepeated = (x) => {
    return x.replace(/[^\w\s]|(.)\1/gi, "");

}

export let elimanteLowerCaseDNA = (x) => {
    return x.replace(/[^A-Z]/g, "");

}

export let canonicalDNA = (x) => {
    let str = x
    if (x || x.length !== 0) {
        str = eliminateRemoveRepeated(x);
        str = elimanteLowerCaseDNA(str);
    } 
    return str;
}

export let indexFirstRepetingChar =(X) =>{
    let index=0;
    return index;
}