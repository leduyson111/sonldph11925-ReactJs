import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const CategoryPage = ({categories,onDelete}) => {
    window.scrollTo(0,0);
    return (
        <div className="container">
          
            <h2 >Quản lý danh mục</h2>
            <Link className="btn btn-primary" to="/category/add" >Thêm danh mục</Link>

            <table className="table">
         
         <thead>
             <tr>
                 <th scope="col">#</th>
                 <th scope="col">Tên danh mục</th>
                 <th scope="col">Ảnh danh mục</th>
                 <th scope="col">Handle</th>
             </tr>
         </thead>
         <tbody>
             {categories.map((category, index) => {
                 return <tr key={index}>
                     <th scope="row">{index + 1}</th>
                     <td>{category.name}</td>
                     <td><img width={250} height={250} src={category.image} alt={`No image`}/></td>
                     <td>
                         <button type="button" className="btn btn-danger" onClick={() => onDelete(category.id)} >
                             Delete
                         </button>
                         
                         <Link  className="btn btn-warning"  to={`category/edit/${category.id}`}>Update</Link>
                     </td>
                 </tr>

             })}

         </tbody>
     </table>

          
        </div>
    )
}

export default CategoryPage
