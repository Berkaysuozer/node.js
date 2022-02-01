// Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. 
//Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız.
//Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

const radius = process.argv.slice(2);
const PI = 3.14;
const area = PI*((radius*1)*(radius*1));
console.log(`Yarıçapı ${radius} olan dairenin alanı:${area}`);
