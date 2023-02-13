function maxBeets(beets, loss) {
    let crops = beets / Math.floor(loss*2);
 loss = (loss* (crops-1)) ;   
 console.log(loss)
return Math.round(beets*crops) -Math.round(loss * crops)
}

4 

console.log(maxBeets(10,2))
console.log(maxBeets(1000,3)) //8338334
console.log(maxBeets(1000,100)) //8338334