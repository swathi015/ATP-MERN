let user={id:101,
    name:"Ravi",
    email:"ravi@gmail.com",
    role:"student",
    isActive:true
}

console.log(user.name)
console.log(user.email)

user.lastLogin="2026-02-01"
console.log(user.lastLogin)

user.role="admin"
console.log(user.role)

delete user.isActive

console.log(Object.keys(user))