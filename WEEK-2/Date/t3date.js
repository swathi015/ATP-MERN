let dob = "2000-02-15";
// Calculate exact age in years
let d1=new Date(dob)
let d2=new Date()
let d3=d1.getFullYear()
let d4=d2.getFullYear()
let d5=d4-d3
console.log(d5)