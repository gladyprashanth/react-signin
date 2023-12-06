import React from 'react';
import './LogInSidebar.css'

import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LogInSidebar = () => {
  return (
    <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Offcanvas */}
                        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">  <strong>Login</strong> </button>

                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div class="offcanvas-header ">
                                <h5 class="offcanvas-title text-center" id="offcanvasRightLabel"> <strong>Login</strong> </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>

                            <div class="offcanvas-body">
                                <div className="Login_inputs">
                                    <div class="input-group mb-3 sm-3">
                                        <span class="input-group-text" id="basic-addon1"> <FaUser /> </span>
                                        <input type="text" class="form-control" placeholder="Username or email *" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div> <br />

                                    <div class="input-group mb-3 sm-3">
                                        <span class="input-group-text" id="basic-addon1"> <FaLock /></span>
                                        <input type="text" class="form-control" placeholder="Password *" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                {/* remember me */}
                                <div className="login_remember">
                                    <div class="form-check text-start text-start textstart">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label class="form-check-label " for="flexCheckDefault">
                                            &nbsp; Remember me
                                        </label>
                                    </div>
                                </div> <br />
                                {/* Login button */}
                                <div className="Login_button_vj">
                                    <button> <b>Login</b> </button>
                                </div> <br />
                                <div className="lostpaswrd">
                                    Lost your password?
                                </div>
                            </div>
                        </div>







                    </div>

                </div>
            </div>

        </div>
  )
}

export default LogInSidebar