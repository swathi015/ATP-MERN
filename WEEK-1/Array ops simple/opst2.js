let courses=["js","react","node","mongo","express"]

//filter
let r1=courses.filter(function(ele){
    return ele.length>5
})
console.log(r1)

//map
let r2=courses.map(function(ele){
    return ele.toUpperCase()
})
console.log(r2)

//find
let r3=courses.find(ele=>ele=="react")
console.log(r3)

//findIndex
let r4=courses.findIndex(ele=>ele=="node")
console.log(r4)