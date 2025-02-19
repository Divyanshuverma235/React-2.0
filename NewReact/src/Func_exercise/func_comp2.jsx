import { useState, useEffect, useCallback } from "react";

function Test1() {
    const [id, setId] = useState("loading....");
    const [name, setName] = useState("loading");

    const fetchUser = useCallback(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id: 1, name: "Deep" });
            }, 4000);
        });
    }, []);

    useEffect(() => {
        fetchUser().then((data) => {
            setId(data.id);
            setName(data.name);
        });
    }, [fetchUser]);

    return (
        <>
            Id : {id}
            <br />
            Name: {name}
        </>
    );
}

export default Test1;
