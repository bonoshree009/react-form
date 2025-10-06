import React from 'react';
import useInput from '../../hooks/UseInput';

const HookForm = () => {
 const [name , nameonchange] =   useInput('')
 const[pass,passonchange] = useInput('')
    const handleSubmit =(e)=>{
         e.preventDefault()
         console.log('submit',name,pass)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  onChange={nameonchange} defaultValue={name} /> <br />
                <input type="password"  onChange={passonchange} defaultValue={pass} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default HookForm;