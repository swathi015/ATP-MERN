let marks={math:78,
    phy:65,
    chem:82,
    eng:55
}

marks.com=90
console.log(marks.com)

function sum(){
    let a=Object.values(marks)
    let s=0
    let max=a[0]
    for(let v=0;v<a.length;v++){
        s+=a[v]

        if(a[v]>max){
            max=a[v]
        }
    }
    let avg=s/a.length
    console.log(s)
    console.log(avg)
    console.log(max)
}
sum()