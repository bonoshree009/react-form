import React, { useState } from 'react';
import ProductsForm from './ProductsForm';
import ProductsTable from './ProductsTable';

const Projectstmanegement = () => {

    const [products,setproducts] = useState([])

    const handleAddproduct = (newProduct) =>{
        const newProducts = [...products,newProduct]
        setproducts(newProducts)
    }
    return (
        <div>
           <ProductsForm handleAddproduct={handleAddproduct}></ProductsForm>
           <ProductsTable products={products}></ProductsTable>
        </div>
    );
};

export default Projectstmanegement;