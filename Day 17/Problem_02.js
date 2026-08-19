function filterActiveUsers(users) {
    // Write your code here
    if(Array.isArray(users) && users.length >=1){
        let valid = true;
        let modified = users.filter((elem)=>{
            valid = Object.hasOwn(elem, 'isActive');
            return elem.isActive;
        });
        return valid ? modified : "Invalid";
    }
    return "Invalid";
}

