import React from 'react';

const FormAction = () => {
    const handleaction =(e)=>{
        // console.log(formData)
       e.preventDefault()
        //console.log(e.get('name'))
        console.log(e.target.name.value)
    }
    return (
        <div>
           <form onSubmit={handleaction}>
             <input type="text" name='name' placeholder='name'/><br />
            <input type="email" name="email" id=""  placeholder='email'/><br />
            <input type="submit" />
           </form>
        </div>
    );
};

export default FormAction;