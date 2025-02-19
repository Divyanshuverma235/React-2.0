import { createContext, useEffect ,useState} from "react";

export const UserContext = createContext();
function fetchUser(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve ({id:1,name:"RKU"});
        },10000);
    });
}

export function UserProvider({children}){
    const [user,setUser]  = useState({id:"loading...",name:"loading"});
    useEffect(()=>{
        fetchUser().then((data)=>setUser(data));
    },[]);
    return <UserContext.Provider value = {user}> {children}</UserContext.Provider>;
}
