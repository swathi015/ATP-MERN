let user={
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};

//shallow copy
let usercopy={...user}

//name in copied obj
usercopy.name="Abcd"

//preferences.theme in copied obj
usercopy.preferences.theme="light"

//.log both original and copied obj
console.log("original user:",user)
console.log("copy user:",usercopy)

//Observation: Name changes only in the copied objects but the theme changes in both the original and shallow copy as it is a nested object and it copies the reference.