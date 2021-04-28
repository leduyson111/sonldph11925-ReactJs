import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Homepage from './page/Homepage';
import ProductPage from './page/Productpage';
import ManagerProducts from './page/ManagerPage';
import ProductDetail from './components/ProductDetail';
import Addproduct from './page/AddPage'
import EditProduct from './page/EditProduct';
import AboutUs from './page/AboutUs';
import ContactPage from './page/ContactPage';
import BlogPage from './page/BlogPage';
import CategoryPage from './page/CategoryPage';
import AddCategory from './components/AddCategory';
import EditCategory from './page/EditCategory';
import ProductCatePage from './page/ProductCatePage';



function App() {

    const [album, setAlbum] = useState([]);

    const [categories, setCate] = useState([]);


    const handleAdd = async (value) => {
        try {
            const response = await fetch("http://localhost:3001/products", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            });
            const data = await response.json();
            console.log('App.js', value);



            setAlbum([
                ...album,
                value
            ])
        } catch (error) {
            console.log(error);
        }
    }

    const onHandUpdate = async (albums) => {
        try {
            await fetch(`http://localhost:3001/products/${albums.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(albums)
            })
            //reRender component dựa vào state
            const newAblum = album.map(pro => pro.id === albums.id ? albums : pro);
            setAlbum(newAblum);



        } catch (error) {
            console.log(error);
        }
    }
    const onHandleRemove = async (id) => {

        try {
            await fetch(`http://localhost:3001/products/${id}`, {
                method: "DELETE",
            })
            const newAblum = album.filter((item) => item.id != id)
            setAlbum(newAblum);

        } catch (error) {
            console.log(error);
        }
    }


    const handleAddCate = async (value) => {
        try {
            const response = await fetch("http://localhost:3001/categories", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            });
            const data = await response.json();
            console.log('App.js', value);
            setCate([
                ...categories,
                value
            ])
        } catch (error) {
            console.log(error);
        }
    }

    const onUpdateCate = async (category) => {
        try {
            await fetch(`http://localhost:3001/categories/${category.id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            })
            const newCate = categories.map(cate => cate.id === category.id ? category : cate);
            setCate(newCate);

        } catch (error) {
            console.log(error);
        }
    }
    const onHandleRemoveCate = async (id) => {
        try {
            await fetch(`http://localhost:3001/categories/${id}`, {
                method: "DELETE",
            })
            const newCate = categories.filter((item) => item.id != id)
            setCate(newCate)

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        try {
            const getAlbums = async () => {
                const response = await fetch("http://localhost:3001/products");
                const data = await response.json();
                setAlbum(data);
            }
            getAlbums();
        } catch (error) {
            console.log(error);
        }
    }, [])


    useEffect(() => {
        try {
            const getCate = async () => {
                const response = await fetch("http://localhost:3001/categories");
                const data = await response.json();
                setCate(data);  
 

            }
            getCate();
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <Router>
            <>
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={() => <Homepage categories={categories} albums={album} />} />
                        <Route path="/products" exact component={() => <ProductPage  products={album} categories={categories} />} />
                        <Route path="products/:id" exact component={<ProductDetail />} />
                        <Route path="/manager" exact component={() => <ManagerProducts categories={categories} albums={album} onDelete={onHandleRemove} />} />
                        <Route path="/manager/add" exact component={() => <Addproduct categories={categories} onAdd={handleAdd} />} />
                        <Route path="/manager/edit/:id" exact component={() => <EditProduct categories={categories} albums={album} onUpdate={onHandUpdate} />} />
                        <Route path="/detailproduct/:id" exact component={() => <ProductDetail categories={ categories} data={album} />} />
                        <Route path="/categories/detailproduct/:id" exact component={() => <ProductDetail data={album} />} />
                        <Route path="/about" exact component={() => <AboutUs />} />
                        <Route path="/contact" exact component={() => <ContactPage />} />
                        <Route path="/blog" exact component={() => <BlogPage />} />
                        <Route path="/category" exact component={() => <CategoryPage onDelete={onHandleRemoveCate} categories={categories} />} />
                        <Route path="/category/add" exact component={() => <AddCategory onAdd={handleAddCate} />} />
                        <Route path="/category/edit/:id" exact component={() => <EditCategory categories={categories} onUpdate={onUpdateCate} />} />
                        <Route path="/categories/:id" exact component={() => <ProductCatePage products={album} categories={categories} />} />

                    </Switch>
                </main>
                <Footer />

            </>
        </Router>
    )

}
export default App