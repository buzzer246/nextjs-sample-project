import React from 'react'
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import Footer from './Footer';
export function Cart() {
    let total = 0;
    const [product, updateProduct] = useState([]);
    const [name, pickName] = useState("");
    const [mobile, pickMobile] = useState("");
    const [email, pickEmail] = useState("");
    const [images, pickImages] = useState("");
    const [address, pickAddress] = useState("");
    const [url, Seturl] = useState("");
    const [price, pickPrice] = useState("");
    const [msg, updateMessage] = useState("");
    const getCart = () => {
        fetch("http://localhost:8080/cart")
            .then(response => response.json())
            .then(servecustomer => {
                if (servecustomer.length > 0) {
                    updateProduct(servecustomer);
                    pickName("");
                    pickMobile("");
                    pickEmail("");
                    Seturl("");
                    pickPrice("");
                    pickAddress("");
                }
            })
    }

    useEffect(() => {
        getCart();
    }, [true]);


    const deleteCart = (id) => {
        /* const postData = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {"id": id} )
        };
        var url = "http://localhost:8080/cart"+id;
        fetch(url, postData)
            .then(response => response.json())
            .then(serverResponse => {
                updateMessage("Item Deleted From Cart");
                pickName("");
                pickMobile("");
                pickEmail("");
                pickAddress("");
                pickPrice("");
                pickImages("");
                Seturl("");
            }) */

            var url="http://localhost:8080/cart/"+id;
            axios.delete(url)
            .then(response =>{
                updateMessage("Item Deleted From Cart");
                pickName("");
                pickMobile("");
                pickEmail("");
                pickAddress("");
                pickPrice("");
                pickImages("");
                Seturl("");
                getCart();//reload the user list
            })
        
    }

    const save = () => {
        var orderData = {
            "name": name,
            "mobile": mobile,
            "email": email,
            "images": images,
            "price":price,
            "url":url
            
        };

        const postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        };
        var url = "http://localhost:8080/cart";
        fetch(url, postData)
            .then(response => response.json())
            .then(serverResponse => {
                updateMessage("Your Order Placed Successfully !");
                pickName("");
                pickMobile("");
                pickEmail("");
                pickImages("");
                Seturl("");
                pickAddress("");
            })
    }
      const AddtoCart = (id) =>{
        const postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"id":id})
        };
        var url = "http://localhost:8080/cart"+id;
        fetch(url, postData)
        .then(response=> response.text())
        .then(cartinfo=>{
            /* console.log(cartinfo.name); */
            updateMessage(cartinfo.name + " Added In Cart");
        })
    } 
    
    return (

        <>
            
        <section className="bg-light p-5">
            <p className="text-center text-danger">{msg}</p>
            <div className="container">
                <div className="row">
                    {
                        product.map((pdata, index) => {
                            return (
                                <div className="col-lg-3 mb-5" key={index}>
                                    <div className="bg-white rounded p-3 shadow text-center">
                                        <h4 className="text-info">{pdata.name}</h4>
                                        <img src={pdata.images} height="150" width="70%" />
                                        <p>{pdata.details}</p>
                                        <p>Rs.{pdata.price}/-</p>
                                        {/* <p>{pdata.url}</p> */}
                    
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
   

        <section className="bg-light p-5">
            <p className="text-center text-danger">{msg}</p>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card border-none shadow">
                            <div className="card-header bg-primary text-white">
                                Customer Details
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label> Location Name </label>
                                    <input type="text"
                                        className="form-control"
                                        onChange={obj => pickName(obj.target.value)} value={name} />
                                    
                                </div>
                                <div className="mb-3">
                                    <label> Mobile No </label>
                                    <input type="text"
                                        className="form-control"
                                        onChange={obj => pickMobile(obj.target.value)} value={mobile}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label> E-Mail Id </label>
                                    <input type="email"
                                        className="form-control"
                                        onChange={obj => pickEmail(obj.target.value)} value={email}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Price </label>
                                    <input type="text"
                                        className="form-control"
                                        onChange={obj => pickPrice(obj.target.value)} value={price}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Images </label>
                                    <input type="text"
                                        className="form-control"
                                        onChange={obj => pickImages(obj.target.value)} value={images}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label> Selected Location URl </label>
                                    <input type='text'
                                        className="form-control"
                                        onChange={obj => Seturl(obj.target.value)} value={url} />
                                </div>

                                <div className="card-footer text-center">
                                    <button className="btn btn-success" onClick={save}> Place Order </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                <h5 className="text-center bg-light text-info"> My Cart Items </h5>
                <table className="table table-bordered rounded-shadow text-center">
                    <thead className='text-center text-success'>
                        <tr>
                            <th>Cart Id</th>
                            <th>Rent Location</th>
                            <th>Price</th>
                            <th>Photo</th>
                            <th>Url</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {
                            product.map((pinfo, index) => {
                               
                                total = total + pinfo.price;
                                return (
                                    <tr key={index}>
                                        <td> {pinfo.id} </td>
                                        <td> {pinfo.name} </td>
                                        <td> {pinfo.price} </td>
                                        <td> <img src={pinfo.images} height="50" width="70" /> </td>
                                        <td> {pinfo.url} </td>
                                        <td>
                                        <button className='btn btn-warning me-2' onClick={save}> Edit</button>
                                            <button
                                                onClick={deleteCart.bind(this, pinfo.id)}
                                                className="btn btn-danger btn-sm text-white">Delete
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan="3" className="text-end">
                                {total} : Total Price
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
                </div>
            </div>
        
        </section>

        <div className='container-fluid'>
            <div className='row'>
                <Footer/>
            </div>
        </div>
 </>
    )
}
export default Cart;


    
  