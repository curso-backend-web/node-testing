export const years =(number) =>{
    if((!(number %4) && !(number %400)) ?? !(number %100))
    return "leap year";

    if(!(number %100))
    return "no leap year";

}