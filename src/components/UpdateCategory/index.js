import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import firebase from "../../firebase";

const UpdateCategory = ({ data, onUpdate }) => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (category) => {

        let file = category.image[0];
        let storageRef = firebase.storage().ref(`image/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {

                const updateCate = {
                    ...data,
                    ...category, 
                    image:url

                }
                onUpdate(updateCate);
                history.push("/category");
            });

        });

    }

    return (
        <div className="container">

            <h2>Sửa danh mục</h2>

            <form onSubmit={handleSubmit(onSubmit)} id="contact-form" action="" >
                <div className="row">
                    <div className="col-lg-6">
                        <div className="default-form-box mb-20">
                            <label htmlFor="name">Tên danh mục </label>
                            <input defaultValue={data.name} ref={register({ required: true })} placeholder="Tên sản phẩm" name="name" type="text" id="name" />
                            {errors.name && <span className="text-danger">Bắt buộc điền tên danh mục</span>}
                        </div>

                        <div className="col-lg-12">
                            <div className="default-form-box mb-20">
                                <label htmlFor="image">Ảnh danh mục</label>
                                <input ref={register()} name="image" type="file" id="image" />
                            </div>
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

export default UpdateCategory
