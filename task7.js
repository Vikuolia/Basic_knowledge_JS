function IPv4(numberToIp) {

    let binaryIP = numberToIp.toString(2);
    let residueTo32Bits = Array(32 - binaryIP.length).fill(0);
    binaryIP = [...residueTo32Bits, ...binaryIP];

    let IP = [];
    for (let i = 8; i <= 32; i += 8) {
        IP.push(parseInt(binaryIP.slice(i - 8, i).join(''), 2));
    }

    return IP.join('.');
}

console.log(IPv4(2149583361));
console.log(IPv4(32));
console.log(IPv4(0));
console.log(IPv4(2149361));