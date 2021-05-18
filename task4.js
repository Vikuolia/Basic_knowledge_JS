function pairs(a, b){
    var c = 0;
    for(var i=0; i<a.length; i++){
        for(var j=0; j<a.length; j++){
            if(i!==j){
                if(a[i]+a[j]===b){
                    c++;
                }
            }
        }
    }
    c = c/2;
    return c;
}

console.log(pairs([1,3,6,2,2,0,4,5], 5))
console.log(pairs([3,7,5,1,5,2,5,4,8,5, 4, 0], 8))