
const ForgetPassword = () => {

    return(
        <div>
           <nav className="navbar navbar-light m-0 lh-0 py-0">
      <div className="container-fluid">
        <a  href className="navbar-brand text-primary fs-3 fw-bold h">facebook</a>
        <form className="d-flex">
          <input className=" ps-2 me-2 rounded border border-secondary " type="text" placeholder="Email or Phone"/>
          <input className=" ps-2 me-2 rounded border border-secondary" type="password" placeholder="Password"/>
          <button className="btn btn-primary me-2 " type="submit">Log In</button>
          <a href="#"className="text-decoration-none mt-2 me-4">Forgotten account?</a>
        
        </form>
      </div>
    </nav>
            <div class="bg-light w-5">
                    <div class="row">
                        <div class="col"></div>
                        <div class="col">
                            <div className="p-3 bg-white my-5 rounded-3" style={{width:"500px", height:"300px"}} >
                                <h4 style={{fontfamily:"SFProDisplay-Bold, Helvetica, Arial, sans-serif"}}>Find Your Account</h4><hr/>
                                <h6>Please enter your email address or mobile number to search for your account.</h6><br/>
                                <input className="form-control mb-4 fs-5 form-control-lg" type="text" id="Email" placeholder="Email address or mobile number"/><hr/>
                                <div className="d-flex "> 
                                    <button type="button" class="btn btn-secondary me-2 mx-auto">cancel</button>
                                    <button type="button" class="btn btn-primary">Search</button>
                                </div>
                            </div>
                        </div>
                        <div class="col"></div>
                    </div>
            </div>

        
            {/* <div className="container border d-flex mt-5 justify-content-center">
                <div className="">
                    <p6>English (UK)</p6>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Hausa</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Français (France)</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none ">Português (Brasil)</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none ">Español</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none ">العربية</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none ">Bahasa Indonesia</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none ">Deutsch</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none ">日本語</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none ">Italiano</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none ">हिन्दी</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none "><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg></a> 
                    <hr/> 
                    <a href="#"className="text-secondary text-decoration-none">Sign Up</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Log In</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Messenger</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Facebook Lite</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Watch</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Places</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Games</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Marketplace</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Facebook Pay</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Oculus</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Portal</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Instagram</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Bulletin</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none ">Local</a>&nbsp;<br/>

                    <a href="#"className="text-secondary text-decoration-none">Fundraisers</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Services</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Voting Information Centre</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Groups</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">About</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Create ad</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Create Page</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Developers</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Careers</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Privacy</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Cookies</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">AdChoices</a>&nbsp;&nbsp;
                    <a href="#"className="text-secondary text-decoration-none">Terms</a>&nbsp;&nbsp;<br/>
                    <a href="#"className="text-secondary text-decoration-none">Help</a><br/><br/>
                    <p6 clas>Meta</p6>&copy;
                    <p6>2022</p6>

                </div>

            </div> */}


            <div className="" style={{height:"150px", maxwidth:"auto", padding:"50px"}}></div>


            <div className="container-fluid mt-5" style={{margintop:"auto", padding:"0px 0px 0px 100px"}} >
                <div>
                    <ul class="list-inline">
                        <li class="list-inline-item text-secondary">English(UK)</li>
                        <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}" style={{fontsize:"12px"}}>Hausa</a></li>&nbsp;
                        <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Français (France)</a></li>&nbsp;
                        <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Português (Brasil) </a></li>&nbsp;
                        <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Español</a></li>&nbsp;
                        <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">العربية</a></li>&nbsp;
                        <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}"> Bahasa </a></li>&nbsp;
                        <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Deutsch</a></li>&nbsp;
                        <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}"> 日本語 </a></li>&nbsp;
                        <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Italiano</a></li>&nbsp;
                        <li class="list-inline-item"><a className="text-secondary fs-6 text-decoration-none" href="{#}">हिन्दी</a></li>&nbsp;
                        <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg></a></li>
                    </ul>

                <hr style={{width:"85%"}}/>

                <ul class="list-inline">
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Sign Up</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Log In</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Messanger</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Facebook Lite</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Watch</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Places</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}"> Games</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Marketplace</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Facebook Pay</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Oculus</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Portal</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Instagram</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Bulletin</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Local</a></li>
                    <br/>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Fundraisers</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Services</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Voting Information Centre</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Groups</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">About</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Create Ad</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Create Page</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Developers</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Careers</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Privacy</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Cookies </a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">AdChoices</a></li>&nbsp;
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Terms</a></li>
                    <br/>
                    <li class="list-inline-item"><a className="text-secondary text-decoration-none" href="{#}">Help</a></li>
                </ul>
                <p className="text-secondary">Meta &copy; 2022</p> 
            </div>            

        </div>

      </div>
    )

}
export default ForgetPassword

