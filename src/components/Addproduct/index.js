import React, { useState ,useEffect} from 'react'
import { useForm } from "react-hook-form"
import firebase from "../../firebase";
import { v4 as uuidv4 } from "uuid";



const Addproduct = ({ onAdd, categories} ) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        let file = data.image[0];
        let storageRef = firebase.storage().ref(`image/${file.name}`);
        storageRef.put(file).then(function () {
          storageRef.getDownloadURL().then((url) => {
                const newData =  {
                    id: uuidv4(),
                    ...data, 
                    image:url
                };
                onAdd(newData);
            });

        });
    }

    return (

        <div className="container" data-aos="fade-up" data-aos-delay={200}>
            <h3>Thêm sản phẩm</h3>
            <form onSubmit={handleSubmit(onSubmit)} id="contact-form" action="" >
                <div className="row">
                    <div className="col-lg-6">
                        <div className="default-form-box mb-20">
                            <label htmlFor="name">Tên sản phẩm</label>
                            <input ref={register({ required: true })} placeholder="Tên sản phẩm" name="name" type="text" id="name" />
                            {errors.name && <span className="text-danger">Bắt buộc điền ô này</span>}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="default-form-box mb-20">
                            <label htmlFor="price">Giá sản phẩm</label>
                            <input ref={register({ required: true })} name="price" placeholder="Giá sản phẩm" type="text" id="price" />
                            {errors.price && <span className="text-danger">Bắt buộc điền ô này</span>}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="default-form-box mb-20">
                            <label htmlFor="image">Ảnh sản phẩm</label>
                            <input ref={register({ required: true })} name="image" type="file" id="image" />
                            {errors.image && <span className="text-danger">Bắt buộc chọn ảnh sản phẩm</span>}
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="default-form-box mb-20">
                            <label htmlFor="cateId">Danh mục sản phẩm</label>
                            <select  ref={register({ required: true })} id="cateId" name="cateId" className="form-control" >
                                {categories.map((category ,index) =>{
                                    return   <option value={category.id}>{category.name}</option>
                                })}
                              
                            </select>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="default-form-box mb-20">
                            <label htmlFor="quantity">Số lượng</label>
                            <input ref={register({ required: true })} placeholder="Số lượng" name="quantity" type="text" id="quantity" />
                            {errors.quantity && <span className="text-danger">Bắt buộc điền ô này</span>}
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="default-form-box mb-20">
                            <label htmlFor="describe">Mô tả sản phẩm</label>
                            <textarea ref={register({ required: true })} placeholder="Mô tả sản phẩm" name="describe" id="describe" cols={30} rows={10} defaultValue={""} />
                            {errors.describe && <span className="text-danger">Bắt buộc điền ô này</span>}

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

export default Addproduct
