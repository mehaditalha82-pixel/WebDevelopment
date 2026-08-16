interface Transaction<TYPE>{
    data : TYPE,
    amount : number
}


const user_1 : Transaction<string> = {
    data : 'Transaction Sucessful',
    amount : 20000,
}

const user_2 : Transaction<boolean>={
    data : true,
    amount : 800,
}

console.log(user_2.data, user_2.amount);