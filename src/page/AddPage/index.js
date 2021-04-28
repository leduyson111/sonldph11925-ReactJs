 import React from 'react';
 import AddProducts from '../../components/Addproduct';

 
 const AddProduct = ({onAdd, categories}) => {
     return (
         <div>
             <AddProducts categories={categories} onAdd = {onAdd}/>
         </div>
     )
 }
 
 export default AddProduct
 