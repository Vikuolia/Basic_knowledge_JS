function first_non_repeating_letter(string){
    var a = string.split("");
    var b = "";
    var c = 0;
    for(var i = 0; i < a.length; i++){
        b = a[i];
        c = 1;
        for(var j=0; j<a.length; j++){
            if(i!==j){
                if(a[j]===b || a[j] === (b.toLowerCase() || b.toUpperCase())){
                    c = 0;
                    b = "";
                    break;
                }
            }
        }
        if(c===1){
            break;
        }
    }
    return b;
}
console.log(first_non_repeating_letter("stress"));
console.log(first_non_repeating_letter("sttrreess"));
console.log(first_non_repeating_letter("sTRetss"))