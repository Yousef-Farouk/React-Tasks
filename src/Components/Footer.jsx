import React from "react";
import "./../Components/Footer.css"

export function Footer(){
    
    return(
        <div class="container-fluid pt-5 footer custom-footer">
    <div class="row px-xl-5 pt-5">
      <div class="col-lg-4 col-md-12 mb-5 pe-5">
        <h5 class="text-uppercase mb-4">get in touch</h5>
        <p class="mb-4">
          No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
          et dolor sed dolor. Rebum tempor no vero est magna amet no
        </p>
        <p>
          <i class="fa fa-map-marker-alt me-3"></i>123
          Street,Shebin-ElKom,Egypt
        </p>
        <p><i class="fa fa-envelope me-3"></i></p>
        <p><i class="fa fa-phone-alt me-3"></i>010 6428 724</p>
      </div>
      <div class="col-lg-8 col-md-12">
        <div class="row">
          <div class="col-md-4 mb-5">
            <h5 class="text-uppercase mb-4">quick shop</h5>
            <div>
              <p><i class="fa fa-angle-right me-1"></i>Home</p>
              <p><i class="fa fa-angle-right me-1"></i>Our Shop</p>
              <p><i class="fa fa-angle-right me-1"></i>Shop Detail</p>
              <p><i class="fa fa-angle-right me-1"></i>Shopping Cart</p>
              <p><i class="fa fa-angle-right me-1"></i>Checkout</p>
              <p><i class="fa fa-angle-right me-1"></i>Contact Us</p>
            </div>
          </div>

          <div class="col-md-4 mb-5">
            <h5 class="text-uppercase mb-4">my account</h5>
            <div>
              <p><i class="fa fa-angle-right me-1"></i>Home</p>
              <p><i class="fa fa-angle-right me-1"></i>Our Shop</p>
              <p><i class="fa fa-angle-right me-1"></i>Shop Detail</p>
              <p><i class="fa fa-angle-right me-1"></i>Shopping Cart</p>
              <p><i class="fa fa-angle-right me-1"></i>Checkout</p>
              <p><i class="fa fa-angle-right me-1"></i>Contact Us</p>
            </div>
          </div>

          <div class="col-md-4 mb-5">
            <h5 class="text-uppercase mb-4">new settler</h5>
            <div>
              <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
              <form action="">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Email Address"
                  />
                  <button class="btn sign">Sign Up</button>
                </div>
              </form>
              <div>
                <h6 class="text-uppercase mb-3 mt-4">follow us</h6>
                <div class="social button d-flex">
                  <a class="btn btn-square me-2" href=""
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn me-2" href="#"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn me-2" href="#"
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                  <a class="btn me-2" href="#"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}

