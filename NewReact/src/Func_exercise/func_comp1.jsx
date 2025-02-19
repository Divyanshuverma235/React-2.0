import { useState } from "react";

function UserDefinedFunction1() {
    const [name, setName] = useState("Divyanshu");
    const [age, setAge] = useState(20);

    return (
        <div>
            <input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            Name is: {name}
            <br />
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <br/>
            Age is: {age}
        </div>
    );
}

export default UserDefinedFunction1;
