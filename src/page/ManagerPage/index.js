import React from 'react'
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const ManagerProducts = ({ onDelete, categories }) => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        try {
            const getProduct = async () => {
                const response = await fetch("http://localhost:3001/products");
                const product = await response.json();
                setProduct(product);
            }
            getProduct();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const onHandleChange = (e) => {
        const target = e.target;
        const name = target.value;
        console.log(name)
        if (name == "asc") {
            const sortProduct = async () => {
                const response = await fetch("http://localhost:3001/products?_sort=price&_order=asc", {
                    method: "GET",
                })
                const product = await response.json();
                setProduct(product);
            }
            sortProduct();
        }

        if (name == "desc") {
            const sortProduct = async () => {
                const response = await fetch("http://localhost:3001/products?_sort=price&_order=desc", {
                    method: "GET",
                });
                const product = await response.json();
                setProduct(product);
            }
            sortProduct();
        }





    }


    return (
        <div className="container">
            <h2 >Quản lý sản phẩm</h2>

            <Link className="btn btn-primary" to="/manager/add" >Thêm sản phẩm</Link>
            <br /><br />


            <div className="sort-select-list d-flex align-items-center">
                <label className="mr-2">Sort By:</label>
                <form action="#">
                    <fieldset>
                        <select onChange={onHandleChange} className="form-select" >
                            <option value="asc">Sort by price: low to high</option>
                            <option value="desc">Sort by price: high to low</option>
                        </select>
                    </fieldset>
                </form>
            </div>
            <br />

            <table className="table">

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((album, index) => {
                        return <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{album.name}</td>
                            <td><img width={250} height={250} src={album.image} /></td>
                            <td>{album.quantity}</td>
                            <td>{album.price}</td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={() => onDelete(album.id)} >
                                    Delete
                                </button>
                                <Link className="btn btn-warning" to={`manager/edit/${album.id}`}>Update</Link>
                            </td>
                        </tr>

                    })}

                </tbody>
            </table>
        </div>
    )
}

export default ManagerProducts
