 import React from 'react'
 import AddCategory from '../../components/AddCategory';

 const AddCatePage = ({onAdd}) => {
     return (
         <div>
             <AddCategory onAdd= {onAdd} />
             
         </div>
     )
 }
 
 export default AddCatePage
 