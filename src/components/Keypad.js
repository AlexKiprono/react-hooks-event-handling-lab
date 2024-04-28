import React, { useState } from 'react'

function Keypad (){

    const [password, setPassword] = useState("");

    function handlePassword(e){
        console.log('Entering password...');
        setPassword(e.target.value);
    }


    return (
        <div>
            <p>password</p>
            <input type="password" value={password} onChange={handlePassword}/>
        </div>
    )
}

export default Keypad;