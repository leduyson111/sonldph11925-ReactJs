import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import firebase from "../../firebase";
import { v4 as uuidv4 } from "uuid";

const AddCategory = ({ onAdd }) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`image/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                const newData = {
                    id:uuidv4(),
                    ...data,
                    image:url
                }
                onAdd(newData);
            });

        });



    }

    return (
        <div className="container">

            <h2>Thêm danh mục</h2>

            <form onSubmit={handleSubmit(onSubmit)} id="contact-form" action="" >
                <div className="row">
                    <div className="col-lg-6">
                        <div className="default-form-box mb-20">
                            <label htmlFor="name">Tên sản phẩm</label>
                            <input ref={register({ required: true })} placeholder="Tên sản phẩm" name="name" type="text" id="name" />
                            {errors.name && <span className="text-danger">Bắt buộc điền tên danh mục</span>}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="default-form-box mb-20">
                            <label htmlFor="image">Ảnh danh mục</label>
                            <input ref={register()} name="image" type="file" id="image" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <button className="btn btn-success" type="submit">Thêm mới</button>
                    </div>

                </div>
            </form>


        </div>
    )
}

export default AddCategory
