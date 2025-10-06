import React from 'react';

const FormAction = () => {
    const handleaction =(formData)=>{
        // console.log(formData)
        console.log(formData.get('name'))
    }
    return (
        <div>
           <form action={handleaction}>
             <input type="text" name='name' placeholder='name'/><br />
            <input type="email" name="email" id=""  placeholder='email'/><br />
            <input type="submit" />
           </form>
        </div>
    );
};

export default FormAction;