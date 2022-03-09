import { useState } from "react";

 const FormExample =() =>{

    const [Firstname, setFirstname]= useState("")
    const [Lastname, setLastname]= useState("")

 function HandleClick(e){
  e.preventDefault()
     alert(`${Firstname} ${Lastname}`)
     setFirstname("")
     setLastname("")
 }


    return(
        // <div>
        //     <form classNameName="container w-half">
        //         <div className="form-group">
        //             <label for="exampleInputEmail1">Firstname</label>
        //             <input type="email" className="form-control" onChange={(e) =>setFirstname(e.target.value)} aria-describedby="emailHelp" placeholder="Firstname"/>
        //         </div>
        //         <div className="form-group">
        //             <label for="exampleInputPassword1">Lastname</label>
        //             <input type="text" className="form-control" onChange={(e) =>setLastname(e.target.value)} placeholder="lastname"/>
        //         </div>
        //         <button type="submit" className="btn btn-primary mt-2 text-center" onClick={HandleClick}>Greet Me</button>
        //     </form>
        // </div>
        <div>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
                    <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                        <form onSubmit={HandleClick}>
                            <div className="mt-4">
                                <div>
                                    <label className="block" htmlFor="email">Firstname</label>
                                    <input type="text" value={Firstname} onChange={(e) =>setFirstname(e.target.value)} placeholder="Email"className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div className="mt-4">
                                    <label className="block">Lastname</label>
                                    <input type="text" value={Lastname}  onChange={(e) =>setLastname(e.target.value)} placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                                </div>
                                <div className="flex items-baseline justify-between">
                                    <button type="submit" className="px-6 py-2 mt-4 text-white  bg-blue-600 rounded-lg hover:bg-blue-900" >Greet Me</button>
                                    <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
    </div>
      
  
    )
 }
export default FormExample