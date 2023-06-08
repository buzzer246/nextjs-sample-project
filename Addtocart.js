import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
function Addtocart() {

    const [product, updateProduct] = useState([]);
    const[msg, updateMessage] = useState("");
    const getProduct = () => {
        fetch("http://localhost:8080/cart/")
            .then(response => response.json())
            .then(allproduct => {
                if (allproduct.length > 0) {
                    updateProduct(allproduct.reverse());
                }
            })
    }

    useEffect(() => {
        getProduct();
    }, [true]);

    
    const AddtoCart = (id) =>{
        const postData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"id":id})
        };
        var url = "http://localhost:8080/cart"+id;
        fetch(url, postData)
        .then(response=> response.json())
        .then(serverResponse=>{
            updateMessage(serverResponse.name + " Added In Cart");
        })
    }


  return (
    <div>
    
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
                                            <img src={pdata.photo} height="150" width="70%" />
                                            <p>{pdata.details}</p>
                                            <p>Rs.{pdata.price}/-</p>
                                            <div className="text-center">
                                                <button className="btn btn-danger btn-sm"
                                                onClick={AddtoCart.bind(this, pdata.id)}>
                                                    <i className="fa fa-shopping-cart"></i> Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    </div>
  )
}

export default Addtocart
