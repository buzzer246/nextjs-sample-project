import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react';
import { Html } from './Html';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';
function View() {

    const [customers, Setcustomer] = useState([""]);
    const [pname, pickName] = useState("");
    const [pmobile, pickMobile] = useState("");
    const [pemail, pickEmail] = useState("");
    const [paddress, pickAddress] = useState("");
    const [pimages, pickImages] = useState("");
    const [msg, updateMessage] = useState("");
    const { id } = useParams();
    const getdetails = () => {



        fetch("http://localhost:8080/customerslist" + id)
            .then(response => response.text())
            .then(serverinfo => {

                Setcustomer(serverinfo);

            })
    }

    useEffect(() => {

        getdetails();
    }, [1])

    function save() {
        /*  alert("Hi"); */

        var orderData = {

            "name": pname,
            "mobile": pmobile,
            "email": pemail,
            "address": paddress,
            "images": pimages,


        };

        const postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        };
        var url = "http://localhost:8080/customerslist";
        fetch(url, postData)
            .then(response => response.text())
            .then(serverResponse => {
                updateMessage("Hey! Orders Updated,Staff will Approach to you..!");
                pickName("");
                pickMobile("");
                pickEmail("");
                pickImages("");
                pickAddress("");
            })
    }


    function deleteData(id) {

        /* alert("hi"); */
        var orderData = {


            "name": pname,
            "mobile": pmobile,
            "email": pemail,
            "address": paddress,
            "images": pimages,


        };
        const postData = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        };
        var url = "http://localhost:8080/customerslist" + id;
        fetch(url, postData)
            .then(response => response.text())
            .then(serverResponse => {
                updateMessage("Order Deleted Successfully..!");
                pickName("");
                pickMobile("");
                pickEmail("");
                pickImages("");
                pickAddress("");
            })

    }
    return (
        <div className='container-fluid m-3'>
            <div className='row'>
                <p className='text-center text-danger m-3'>Customer Please Book your Orders here with Location...!</p>
            </div>
            <p className="text-center text-danger">{msg}</p>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="card border-none shadow">
                            <div className="card-header bg-primary  text-center text-white">
                                Customer Details
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <label> Customer Name </label>
                                    <input type="text"
                                        className="form-control"
                                        onChange={obj => pickName(obj.target.value)} value={pname} />

                                </div>
                                
                                <div className="mb-3">
                                    <label> MobileNo </label>
                                    <input type="text"
                                        className="form-control"
                                        onChange={obj => pickMobile(obj.target.value)} value={pmobile}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label> E-Mail Id </label>
                                    <input type="email"
                                        className="form-control"
                                        onChange={obj => pickEmail(obj.target.value)} value={pemail}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label> Address </label>
                                    <input type="text"
                                        className="form-control"
                                        onChange={obj => pickAddress(obj.target.value)} value={paddress}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label>Url [*Selected Url in Cart*] </label>
                                    <input type="text"
                                        className="form-control"
                                        onChange={obj => pickImages(obj.target.value)} value={pimages}
                                    />
                                </div>

                            </div>
                            <div className='row'>
                                <div className='text-center m-2'>
                                    <button className='btn btn-warning me-2' onClick={save}> Book</button>
                                </div>
                                <div className='text-center'>
                                    <button
                                        onClick={deleteData.bind(this, id)}
                                        className="btn btn-danger btn-sm text-white">Delete
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
            <div className='container-fluid'>
            <div className='row'>
                <Footer/>
            </div>
        </div>
        </div>

    )
}

export default View;
