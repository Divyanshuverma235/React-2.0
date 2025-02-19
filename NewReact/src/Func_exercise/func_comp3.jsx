import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(100);
    useEffect(() => {
        const timerID = setInterval(() => {
            setTime((prevTime) => (prevTime === 0 ? 0 : prevTime - 1));
        }, 1000);

        return () => {
            clearInterval(timerID);
        };
    }, []);

    return <p>Timer: {time}</p>;
}

const ShowHideTimer = ({ x }) => (x ? <Timer /> : null);

function CancelRequest() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
            <ShowHideTimer x={show} />
        </>
    );
}

export default CancelRequest;
