import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useState, useEffect } from 'react';
import Cart from './Cart';
import {Link} from 'react-router-dom';

   const Html = () => {
    const [customers, Updatecustomer] = useState([""]);
    //const customers =[{"id":2,"username":"Joythish","email":"jothishkumar12@gmail.com","password":"Admin@426800","phonenumber":"8545785452","address":"Mumbai","maptrack":"http://localhost/phpmyadmin/","images":"1.jpg"},{"id":1,"username":"AVINASH REDDY K","email":"avinashreddy471@gmail.com","password":"Admin@426800","phonenumber":"9703104087","address":"Tirupati/India","maptrack":"http://localhost/phpmyadmin/","images":"1.jpg"}];
    const getdetails = () => {
    
    var url = "http://localhost:8080/productList";
    fetch(url)
      .then(response => response.json())
      .then(serverinfo => {

        if (serverinfo.length > 0) {
          /* console.log(serverinfo); */
          Updatecustomer(serverinfo);
          window.location.replace("View"); 
        }
      })
  }
  function goCart(){

    window.location.replace("Cart");
  }
   return(
    <>
            <div className='container-fluid m-4'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-4'>
                {/* <p className='text-danger'>Hello</p> */}
                <div className='container resimage'>
                  <img src="./1.jpg" class="d-block w-100" style={{ width: '200px', height: '200px' }} alt="..." className='m-3 image-flux' />
                  <div className='m-3 text-center'>
                    
                    <button className='btn btn-warning text-white' onClick={getdetails}>View Details</button>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 resimage'>
                <img src="./2.jpg" class="d-block w-100" style={{ width: '200px', height: '200px' }} alt="..." className='m-3 image-flux' />
                <div className='m-3 text-center'>
                 
                  <button className='btn btn-warning text-white' onClick={getdetails}>View Details</button>
                </div>
              </div>
              <div className='col-lg-4 resimage'>
                <img src="./3.jpg" class="d-block w-100" style={{ width: '200px', height: '200px' }} alt="..." className='m-3 image-flux' />
                <div className='m-3 text-center'>
                 
                  <button className='btn btn-warning text-white' onClick={getdetails}>View Details</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='container-fluid m-4 resimage'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-4'>
                <img src="./4.jpg" class="d-block w-100" style={{ width: '60%', height: '200px' }} alt="..." className='m-3 image-flux' />
                <div className='m-3 text-center'>
                 
                  <button className='btn btn-warning text-center text-white' onClick={getdetails}>View Details</button>
                </div>
              </div>
              <div className='col-lg-4'>
                <img src="./5.jpeg" class="d-block w-100" style={{ width: '60%', height: '200px' }} alt="..." className='m-3 image-flux' />
                <div className='m-3 text-center'>
                  
                  <button className='btn btn-warning text-center text-white' onClick={getdetails}>View Details</button>
                </div>
              </div>

              <div className='col-lg-4'>
                <img src="./6.jpg" class="d-block w-100" style={{ width: '60%', height: '200px' }} alt="..." className='m-3 image-flux' />
                <div className='m-3 text-center'>
                  
                  <button className='btn btn-warning text-white' onClick={getdetails}>View Details</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='container-fluid m-4 resimage'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-4'>
                <img src="./7.jpg" class="d-block w-100" style={{ width: '60%', height: '200px' }} alt="..." className='m-3 image-flux' />
                <div className='m-3 text-center'>
                 
                  <button className='btn btn-warning text-white' onClick={getdetails}>View Details</button>
                </div>
              </div>
              <div className='col-lg-4'>
                <img src="./8.jpg" class="d-block w-100" style={{ width: '60%', height: '200px' }} alt="..." className='m-3 image-flux' />
                <div className='m-3 text-center'>
                 
                  <button className='btn btn-warning text-white' onClick={getdetails}>View Details</button>
                </div>
              </div>
              <div className='col-lg-4'>
                <img src="./9.jpg" class="d-block w-100" style={{ width: '60%', height: '200px' }} alt="..." className='m-3 image-flux' />
                <div className='m-3 text-center'>
                  
                  <button className='btn btn-warning text-white' onClick={getdetails}>View Details</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
   
        </>   

      
    )
 
 }                   
export default Html;
