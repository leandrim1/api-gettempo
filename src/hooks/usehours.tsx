import { useState, useEffect } from "react";

const CurrentHour = () => {
    const [hour, setHour] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setHour(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return <div>{hour}</div>;
}

export default CurrentHour;