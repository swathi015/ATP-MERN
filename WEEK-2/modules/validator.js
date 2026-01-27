function validateTitle(title){
    return title.length>=3
}

function validatePriority(priority){
    return priority==="low" || priority==="medium" || priority==="high"
}
     
function validateDueDate(date){
    let d1=new Date()
    let d2=new Date(date)
    return d2>d1
}

export {validateTitle,validatePriority,validateDueDate}