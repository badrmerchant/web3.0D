// Type  scientist: number | string
// let scientist = Math.random() > 0.5
// ? "Rosalind Franklin"
// : undefined;
// if (scientist) {//truthness
var scientist = Math.random() > 0.5
    ? undefined
    : 99;
if (scientist === 99) { //truthness
    console.log(typeof scientist);
    console.log("if", scientist);
    // Type of scientist: string
    //scientist.toUpperCase(); // Ok
}
else {
    console.log(typeof scientist);
    console.log(scientist);
}
