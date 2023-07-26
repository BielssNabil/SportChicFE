import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import swal from 'sweetalert';

const CheckoutComponents = () => {

  const history = useNavigate();
  const { state } = useLocation();
  const [error, setError] = useState([])
  const { product } = state;

  const [checkoutInput, setCheckoutInput] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    address: '',
    country: '',
    state: '',
    zipcode: '',
  });


  const handleInput = (e) => {
    e.persist();
    setCheckoutInput({...checkoutInput, [e.target.name]: e.target.value});
  }

  const submitOrder = (e) => {
    e.preventDefault();
    const data = {
      firstname: checkoutInput.firstname,
      lastname: checkoutInput.lastname,
      username: checkoutInput.username,
      email: checkoutInput.email,
      address: checkoutInput.address,
      country: checkoutInput.country,
      state: checkoutInput.state,
      zipcode: checkoutInput.zipcode,
      product_id: product.id,
      product_name: product.name,
      price: product.price,
    }

    axios.post('/api/checkout', data).then(res =>{
      if(res.data.status === 200) {
        swal("Order Success",res.data.message,"success");
        setError([]);
        history('/thankyoupage')
      } else if (res.data.status === 422){
        swal("Please Fill All the Data","","error");
        setError(res.data.error);
      } else if (res.data.status === 401){
        console.log("401 response triggered");
        swal("warning",res.data.message,"warning");
        history('/login')
      }
    });
  }

  return (
      <div className="maincontainer">
      <div className="container">
        <div className="py-5 text-center">
          
          <h2>Checkout form</h2>
        </div>
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Your cart</span>
              <span className="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">{product.name}</h6>
                  <small className="text-muted">{product.description}</small>
                </div>
                <span className="text-muted">{product.price}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total (Rp)</span>
                <strong>{product.price}</strong>
              </li>
            </ul>              
          </div>

          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" onSubmit={submitOrder}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>First name</label>
                  <input type="text" name="firstname" onChange={handleInput} value={checkoutInput.firstname} className="form-control" placeholder="enter your first name" required />
                  <small className="text-danger">{error.firstname}</small>
                </div>
                <div className="col-md-6 mb-3">
                  <label>Last name</label>
                  <input type="text" name="lastname" onChange={handleInput} value={checkoutInput.lastname} className="form-control" placeholder="enter your last name" required />
                  <small className="text-danger">{error.lastname}</small>                    
                </div>
              </div>
              <div className="mb-3">
                <label>Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input type="text" name="username" onChange={handleInput} value={checkoutInput.username} className="form-control" placeholder="Username" required />
                  <small className="text-danger">{error.username}</small>                    
                </div>
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input type="email" name="email" onChange={handleInput} value={checkoutInput.email} className="form-control" placeholder="you@example.com" required/>
                <small className="text-danger">{error.email}</small>                  
              </div>
              <div className="mb-3">
                <label>Address</label>
                <input type="text" name="address" onChange={handleInput} value={checkoutInput.address} className="form-control" placeholder="1234 Main St" required />
                <small className="text-danger">{error.address}</small>                  
              </div>
              
              <div className="row">
                <div className="col-md-5 mb-3">
                  <label>Country</label>
                  <input name="country" onChange={handleInput} value={checkoutInput.country} className="form-control" required />
                  <small className="text-danger">{error.country}</small>                      
                </div>
                <div className="col-md-4 mb-3">
                  <label>State</label>
                  <input name="state" onChange={handleInput} value={checkoutInput.state} className="form-control" required />
                  <small className="text-danger">{error.state}</small>                      
                </div>
                <div className="col-md-3 mb-3">
                  <label>Zip</label>
                  <input name="zipcode" type="text" onChange={handleInput} value={checkoutInput.zipcode} className="form-control" placeholder="" required />
                  <small className="text-danger">{error.zipcode}</small>                    
                </div>
              </div>
              <hr className="mb-4" />                
              <h4 className="mb-3">Order Details</h4>                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="custom-control-label">Product Name</label>
                    <input name="product_name" type="text" value={product.name} className="form-control" readOnly />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="custom-control-label">Product Price</label>
                    <input name="product_price" type="text" value={product.price} className="form-control" readOnly />
                  </div>
                </div>
              <hr className="mb-4" />                
              <h4 className="mb-3">Payment</h4>                
                <div className="custom-control custom-radio">
                  <input name="paymentMethod" type="radio" className="custom-control-input" />
                  <label className="custom-control-label">Paypal</label>
                </div>
              <hr className="mb-4" />
              <button className="btn btn-primary btn-lg btn-block" type="button" onClick={submitOrder}>Continue to checkout</button>
            </form>
          </div>
        </div>
        </div>
        <footer className="my-5 pt-5 text-muted text-center text-small">
          <p className="mb-1">&copy; 2020-2021 therichpost.com</p>
          <ul className="list-inline">
            <li className="list-inline-item"><a href="#">Privacy</a></li>
            <li className="list-inline-item"><a href="#">Terms</a></li>
            <li className="list-inline-item"><a href="#">Support</a></li>
          </ul>
        </footer>
      </div>
  )
}

export default CheckoutComponents