const raqamlar=[125,200,303,400,552,655,700,8089,900,1011];
let juft=[];


for (let i = 0; i < raqamlar.length; i++) {
    if (raqamlar[i]%2==0) {
        juft.push(raqamlar[i]);
    }
}

console.log("boshlanishdagi Array: ",raqamlar);
console.log("juft sondagi array: ",juft);
