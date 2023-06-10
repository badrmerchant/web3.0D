
// Type of scientist: number | string
let scientist1 = Math.random() > 0.5
? "k"
: false;
let q:number|string=21;
console.log(q === 88,q);
console.log(scientist1 ===false,scientist1);//typeof s 
if (scientist1 === "k") {
// Type of scientist: string
console.log("if=", scientist1);
console.log("if typeof false scientist1=",typeof scientist1);

//scientist1.toUpperCase(); // Ok
}
else{// Type of scientist: number | string
//scientist1.toUpperCase();
console.log("else block false=", typeof scientist1);}

console.log("out ",scientist1);
console.log("out typeof = ", typeof scientist1);




























