import React, { useState } from 'react';

const ControlFeild = () => {
     const [pass,setpass] = useState ('')
     const [error,seterror] = useState("")
    const handleSubmit =(e)=>{
    e.preventDefault();
    }
    const handlepass =(e)=>{
        console.log(e.target.value)
        setpass(e.target.value)
        if(pass.length <6){
            seterror('password must be 6 charecter')
        }
        else{
            seterror("")
        }


    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' required /> <br />
                <input type="password" onChange={handlepass} placeholder='password' required /> <br />
                <input type="submit" />
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlFeild;