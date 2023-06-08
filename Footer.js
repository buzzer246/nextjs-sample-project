import React from 'react'

function Footer() {
  return (
    <div className="container-fluid m-5">
      <footer className='text-center'>
    <div class="row container-fluid">
      <div className="col-md-4 col-sm-6 col-xs-12">
        <h5>About Us</h5>
        <p>

Thanks for visiting Contactus page
you can contact us Indain standard TiMEs :10:00Am to 10:00PM
please feel free to discuss with us: PhoneNumber:9703104087</p>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-12">
        <h5>Contact Us</h5>
        <ul>
          <li><i class="fa fa-phone"></i> 123-456-7890</li>
          <li><i class="fa fa-envelope"></i> info@example.com</li>
          <li><i class="fa fa-map-marker"></i> 123 Main Street, Anytown, USA</li>
        </ul>
      </div>
      <div className="col-md-4 col-sm-12 col-xs-12">
        <h5>Follow Us</h5>
        <ul class="social">
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
        </ul>
      </div>
    </div>
  </footer>
    </div>
   
  )
}

export default Footer
