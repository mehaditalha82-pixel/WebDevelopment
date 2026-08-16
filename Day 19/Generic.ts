function useState<T>(initvalue : T):[T, (newValue : T)=>void]{
    let value = initvalue;
    function setValue(newValue : T){
        value = newValue;
    }
    return [value, setValue];
}

useState<string>('hello');
useState<boolean>(true);
useState<number>(29);

interface User{
    email : string 
    isLoggedIn : boolean;
}

useState<User | null>(null)
