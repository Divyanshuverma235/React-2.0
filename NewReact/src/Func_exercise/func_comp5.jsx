import { UserContext } from "react";
import {UserContext } from "./func_comp4"
function UserName(){
    const user = userContext(UserContext);
    return(
         <p>
        Username : {user.name}
        <br />
        ID : {user.id}
    </p>
    );
}

export  function Page1(){
return(
    <div>
        <h1>Page 1</h1>
    </div>
);
}


export  function Page2(){
    return(
        <div>
            <h1>Page 2</h1>
        </div>
);
}


    export  function Page3(){
        return(
            <div>
                <h1>Page 3</h1>
            </div>
        );
        }

       