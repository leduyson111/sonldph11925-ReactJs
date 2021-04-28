import React from 'react'
import UpdateProduct from '../../components/UpdateProduct';
import { useParams } from 'react-router-dom';


const EditProduct = ({ albums, onUpdate, categories }) => {
    const { id } = useParams();
    const album = albums.find(item => item.id === id);
    return (
        <>
            <UpdateProduct categories ={categories} data={album} onUpdate={onUpdate} />
        </>
    )
}

export default EditProduct
