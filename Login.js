import React from 'react'
/* import {name} from './Footer' */
const Login = () => {
  return (
    <div className='headerdiv'>

           {/* <p className='h-15 text-red-500 text-center font-bold  rounded-full'>Its Header Block</p> 

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./1.jpg" class="d-block w-100" width="50%" height="150px" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./1.jpg" class="d-block w-100" width="50%" height="150px" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="./1.jpg" class="d-block w-100" width="50%" height="150px" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> 
 */}

<div className='container-fluid text-center'>
    
                  <div class="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
                   data-bs-keyboard="false" data-bs-backdrop="static">
                    <div class="modal-dialog modal-sm">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title justify-content-center text-success" id="login">Login</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" href="localhost:3000">Close</button>
                        </div>
                        <div class="modal-body">
                          <div class="mb-3">
                           <label>Email ID/Username</label>
                            <input type="text" id="email" class="form-control" placeholder="Enter the Email/Username" />
                          </div>
                          <div class="mb-3">
                           <label>Password</label>
                            <input type="password" id="password" class="form-control" placeholder="Enter the Password" />
                          </div>
                          </div>
                        </div>
                        <div class="modal-footer justify-content-center">
                          
                          <button type="button" class="btn btn-primary">Submit</button>
                          
                        </div>
                      </div>
                      
                    </div>
                    
                  </div>   


    </div>
  )
}

export default Login;
