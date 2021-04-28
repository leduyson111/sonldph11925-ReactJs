import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import firebase from "../../firebase";

const UpdateProduct = ({ data, onUpdate, categories }) => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (album) => {

        let file = album.image[0];

        if (file) {
            let storageRef = firebase.storage().ref(`image/${file.name}`);
            storageRef.put(file).then(function () {
                storageRef.getDownloadURL().then((url) => {
                    const updatedAlbum = {
                        ...data,
                        ...album,
                        image: url
                    }
                    onUpdate(updatedAlbum);
                    history.push("/manager");
                });

            });
        } else {
            const updatedAlbum = {
                ...data,
                ...album,
                image:data.image,
            }
            onUpdate(updatedAlbum);
            history.push("/manager");

        }





    }
    return (
        <div className="container" data-aos="fade-up" data-aos-delay={200}>
            <h3>Sửa sản phẩm</h3>
            <form onSubmit={handleSubmit(onSubmit)} id="contact-form" action="" >
                <div className="row">
                    <div className="col-lg-6">
                        <div className="default-form-box mb-20">
                            <label htmlFor="name">Tên sản phẩm</label>
                            <input defaultValue={data.name} ref={register({ required: true })} placeholder="Tên sản phẩm" name="name" type="text" id="name" />
                            {errors.name && <span className="text-danger">Bắt buộc điền ô này</span>}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="default-form-box mb-20">
                            <label htmlFor="price">Giá sản phẩm</label>
                            <input defaultValue={data.price} ref={register({ required: true })} name="price" placeholder="Giá sản phẩm" type="text" id="price" />
                            {errors.price && <span className="text-danger">Bắt buộc điền ô này</span>}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="default-form-box mb-20">
                            <label htmlFor="image">Ảnh sản phẩm</label>
                            <input name="image" ref={register()} type="file" id="image" />
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="default-form-box mb-20">
                            <label htmlFor="cateId">Danh mục sản phẩm</label>
                            <select defaultValue={data.cateId} ref={register({ required: true })} id="cateId" name="cateId" className="form-control" >
                                {categories.map((category, index) => {
                                    return <option defaultValue={data.cateId} value={category.id}>{category.name}</option>
                                })}

                            </select>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="default-form-box mb-20">
                            <label htmlFor="quantity">Số lượng</label>
                            <input defaultValue={data.quantity} ref={register({ required: true })} placeholder="Số lượng" name="quantity" type="text" id="quantity" />
                            {errors.quantity && <span className="text-danger">Bắt buộc điền ô này</span>}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="default-form-box mb-20">
                            <label htmlFor="describe">Mô tả sản phẩm</label>
                            <textarea ref={register({ required: true })} placeholder="Mô tả sản phẩm" name="describe" id="describe" cols={30} rows={10} defaultValue={data.describe} />
                            {errors.describe && <span className="text-danger">Bắt buộc điền ô này</span>}

                        </div>
                    </div>
                    <div className="col-lg-12">
                        <button className="btn btn-success" type="submit">Sửa sản phẩm</button>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default UpdateProduct
