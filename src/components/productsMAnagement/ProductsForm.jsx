import React, { useState } from 'react';

const ProductsForm = ({handleAddproduct}) => {
    const [error ,seterror] = useState('')
    const handlesubmit = (e)=>{
        e.preventDefault();
        // console.log(e.target)
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        //console.log(name,price,quantity)
        const newproduct = {      //object hisebe dibe
            name,price,quantity
        }
       // console.log(newproduct)

    //    validation
    if(name.length === 0){
        seterror('please provide a product name')
        return
    }

    else if(price === 0){
        seterror('pleace provide price')
        return
    }
    
    else if(price < 0){
        seterror(' price can not be nagative')
        return
    }

       handleAddproduct(newproduct)


    }

    return (
        <div>
            <h3>Add a product</h3>
            <form onSubmit={handlesubmit}> 
                <input type="text" name='name' placeholder='product name' /> <br />
                 <input type="text" name='price' placeholder='product price' /> <br />
                 <input type="text" name='quantity' placeholder='product quantity' /> <br />
                 <input type="submit" />
            </form>
            <p><small>{error}</small></p>
        </div>
    );
};

export default ProductsForm;