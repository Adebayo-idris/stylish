import React from "react";

export default function Footer() {
    return (
      <div>
       <footer>
        <nav>
      
          <div class="pt-5 pb-5 border-top bg-dark text-white">
            <div className="container">
              <div class="row">
                <div class="col-lg-5 col-xs-12">
                  <h4>Stylish</h4>
                  <p class=" text-white">Explore my take on luxury Fashion including the latest collections of
                    exclusive sneakers, cloths, brands
                    and Accessories.
                  </p>
      
                </div>
                <div class="col-lg-3 col-xs-12 ">
                  <h4 class="">Follow us</h4>
                  <p>
                  
                  <a href="#" className="text-decoration-none h4 text-light">
                    <i class="bi bi-instagram mx-2"></i>
                  </a>
                  <a href="#" class="text-decoration-none h4 text-light">
                    <i class="bi bi-twitter mx-2"></i>
                  </a>
                  <a href="#" class="text-decoration-none h4 text-light">
                    <i class="bi bi-facebook mx-2"></i>
                  </a>
                  </p>
                </div>
                <div class="col-lg-4 col-xs-12 location">
                  <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                  <p>22, Lorem ipsum dolor, 
                    consectetur adipiscing
                  </p>
                  
                  <a href="tel:+1234567890"  class="text-decoration-none text-light d-block">
                    <i class="bi bi-telephone h6 me-1"></i>
                    1234567890
                  </a>
                  <a href="mailto:Buhkunmii@gmail.com"  class="text-decoration-none text-light d-block">
                    <i class="bi bi-envelope h6 me-1"></i>
                    Buhkunmii@gmail.com
                  </a>
                  
                </div>
              </div>
              <hr />
              <div class="justify-content-center">
                <p class="d-flex"><small class="text-white me-auto">© 2022.</small></p>
              </div>
            </div>
          </div>
      
        </nav>
      </footer>
  
      </div>
    )
  }
  