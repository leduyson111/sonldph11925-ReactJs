import React from 'react'
import { useParams } from 'react-router-dom';
import UpdateCategory from '../../components/UpdateCategory';



 const EditCategory = ({categories , onUpdate}) => {
    const {id} = useParams();
    const category = categories.find(item => item.id === id);

     return (
         <>
             <UpdateCategory data = {category} onUpdate={onUpdate} />
             
         </>
     )
 }
 
 export default EditCategory
 