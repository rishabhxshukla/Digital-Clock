import "../Styles/Timer.css";
import { useState } from "react";

function Timer() 
{
    const [time, setTime] = useState();

    //Updating the current time
    function update()
    {
        const d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();
        let p = "";
    
        //Adding the meridiem
        if (h < 12)
            p = "AM"
        else
            p = "PM"

        //Converting to 12hr format
        if (h > 12)
            h = h - 12;
        
        //Adding 0 for single digit
        if (h < 10)
            h = '0' + h;
        if (m < 10)
            m = '0' + m;
        if (s < 10)
            s = '0' + s;
    
        let newTime = `${h} : ${m} : ${s} ${p}`;

        setTime(newTime);
    }

    //Calling the update function every 1 sec
    setInterval(update, 1000);
    
    return (
        <div className="container">
            <h1>{time}</h1>
        </div>
    );
}

export default Timer;