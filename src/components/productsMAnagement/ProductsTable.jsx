import React from 'react';

const ProductsTable = ({products}) => {
    return (
        <div>
         <h3>products:{products.length}</h3>   
         <table>
            <thead><tr>
                <th>no</th>
                <th>product</th>
                <th>price</th>
                <th>quantity</th>
                <th>actions</th>

                </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index) => 
                         <tr key={index}>
                        <td>{index +1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td></td>
                    </tr>
                        )
                    }
                </tbody>
         </table>
        </div>
    );
};

export default ProductsTable;