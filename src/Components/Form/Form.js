import React from 'react'
import "./Form.css"
import { IoCheckbox } from "react-icons/io5";

const Form = () => {
  return (
    <div>
         <div className="container-fluid backi">
          <div className="container">
        <div className="row">  
        <div className="col-sm-6 code1">
            <h6 className="text-light" >Register Now to Get More Information About Rental</h6>  
            <h1 className="text-light">Need IT Equipment On <span className="border rounded lb">Rent</span> ? Fill This Form....Will Call You Shortly</h1>         
        
                
<ul className="d-flex list-unstyled">
  <li>
<h4 className="text-light" ><span className="icon mx-3" ><IoCheckbox /></span>Fast Delivery</h4></li>
 <li className="mx-5">
<h4  className="text-light" > <span className="icon mx-3" ><IoCheckbox /></span> Secure Payment</h4></li>
</ul>
     

        </div>
        <div className="col-sm-6 py-4">

        <div class="form-box rounded-4 mt-5 ">
  <h4>Get Your Customized Equipment Here</h4>
  <form action="https://api.formbucket.com/f/c2K3QTQ" method="post">
  <div className="form-group  ">
    <label htmlFor="name">Name <span className="text-danger " >*</span></label>
    <input className="form-control mt-3" id="name" type="text" name="Name" />
  </div>
  <div className="form-group mt-3">
    <label htmlFor="email">Contact Number <span className="text-danger fw-bold">*</span></label>
    <input className="form-control mt-4" id="email" type="email" name="Email" />
  </div>
  <div className="form-group mt-3">
    <label htmlFor="message">Choose Your Rental Equipment<span className="text-danger" >*</span></label>
    <div class="dropdown mt-4">
  <button class="btn border text-start w-100 dropdown-toggle text-body-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Laptops  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item text-body-secondary" href="#">Desktops</a></li>
    <li><a class="dropdown-item text-body-secondary" href="#">MacBooks</a></li>
    <li><a class="dropdown-item text-body-secondary" href="#">Server</a></li>
    <li><a class="dropdown-item text-body-secondary" href="#">Printer</a></li>
  </ul>
</div>
  </div>
  <input className="btn btn-primary mt-4 w-25" type="submit" defaultValue="Submit" />
</form>

</div>
          

        </div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Form
