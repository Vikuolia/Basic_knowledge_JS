function filtering(b){
    var a = b.length;
    for (var i=0;i<b.length;i++){
        if(typeof(b[i])!='number'){
            b.splice(i, 1);
            a = b.length;
            i--;
        }
    }
    return b;
}

console.log(filtering([1,2,'a','b']));
console.log(filtering([1,'a','b',0,15]));
console.log(filtering([1,2,'aasf','1','123',123]));
console.log(filtering([1, '2', 3, '4', 5, '6', 7, '8', 9, '10']));