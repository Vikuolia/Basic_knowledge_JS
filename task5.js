function friends(string){
    var names = string.toUpperCase().split(";");
    var sortt = "";
    for(var i = 0; i<names.length;i++){
        names[i]=names[i].split(":")[1] + ":" + names[i].split(":")[0];
    }
    names.sort();
    for(var i = 0; i<names.length;i++){
        sortt = sortt + "(" + names[i].split(":")[0] + ", ";
        sortt = sortt + names[i].split(":")[1] + ")";
    }
    return sortt;
}

console.log(friends("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"));