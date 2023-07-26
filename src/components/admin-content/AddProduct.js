import React from 'react';
import Navbar from '../admin/Navbar';
import Sidebar from '../admin/Sidebar';
import Footer from '../admin/Footer';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from "sweetalert";

function AddProduct() {

    const [errorList, setErrorList] = useState({});
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        axios.get(`/api/all-category`).then(res =>{
            if(res.data.status === 200) {
                setCategoryList(res.data.category);
            }
        })
    }, [])

    const [productInput, setProductInput] = useState({
        category_id: "",
        name: "",
        price: "",
        image: null,
        description: "",
      });
      
    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === "file" ? target.files[0] : target.value;
        
        setProductInput({
            ...productInput,
            [name]: value,
        });
    };

    const submitProduct = (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append("category_id", productInput.category_id);
        formData.append("name", productInput.name);
        formData.append("price", productInput.price);
        formData.append("description", productInput.description);
        formData.append("image", productInput.image);
      
        axios.post("/api/store-product", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response.data);
            setProductInput({
              category_id: "",
              name: "",
              price: "",
              image: null,
              description: "",
            });
            setErrorList({});
            swal("Product added successfully", response.data.message, "success");
          })
          .catch((error) => {
            swal("Please fill All the field", "", "error");
            console.log(error);
            setErrorList(error.response.data.error);
          });
      };

        return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <div className="card mt-4">
                                <div className="card-header">
                                    <h4>Add Product
                                        <Link to="/admin/view-product" className="btn btn-success btn-sm float-end">View Product</Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submitProduct}>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="form-group mb-3">
                                                    <label>Select Category</label>
                                                    <select name="category_id" onChange={handleInputChange} value={productInput.category_id} className="form-control">
                                                        <option>Select option</option>
                                                        {
                                                            categoryList.map((item) => {
                                                                return (
                                                                    <option value={item.id} key={item.id}>{item.name}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                    <small className="text-danger">{errorList.category_id}</small>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Product Name</label>
                                                    <input type="text" name="name" onChange={handleInputChange} value={productInput.name} className="form-control" />
                                                    <small className="text-danger">{errorList.name}</small>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Image</label>
                                                    <input type="file" name="image" onChange={handleInputChange} className="form-control" />
                                                    <small className="text-danger">{errorList.image}</small>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Price</label>
                                                    <input type="text" name="price" onChange={handleInputChange} value={productInput.price} className="form-control" />
                                                    <small className="text-danger">{errorList.price}</small>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label>Description</label>
                                                    <textarea name="description" onChange={handleInputChange} value={productInput.description} className="form-control"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-success px-4 mt-2">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default AddProduct;