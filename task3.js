function digital_root(n){
    var a = "";
    a = a + n;
    var b = a.split("");
    var m = parseInt(b[0]);
    do {
        a = "";
        a = a + n;
        b = a.split("");
        m = parseInt(b[0]);
        for(i=1; i<b.length; i++){
            m = m + parseInt(b[i]);
        }
        n=m;
    }
    while(m/10 >= 1);
    return m;
}

console.log(digital_root(16));
console.log(digital_root(942));
console.log(digital_root(132189));
console.log(digital_root(493193));
console.log(digital_root(123456789))