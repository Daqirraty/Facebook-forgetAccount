import Header from "./Header";
import Button from "./Button";

const Register = () =>{

    return(
    
        <div className="container">
                <Header/>
            <h4>Register with us</h4>
            <form >
                    <label htmlfor="fname">Firstname</label><br/>
                    <input type="text" id="fname"/><br/>
                    <label htmlfor="lname">lastname:</label><br/>
                    <input type="text" id="lname"/><br/>
                    <label htmlfor="phone">Phone:</label><br/>
                    <input type="text" id="phone"/><br/>
                    <label for="exampleFormControlTextarea1" class="form-label">Address </label><br/>
                    <input type="text" id="address"/><br/>
                    <label htmlfor="email">E-mail:</label><br/>
                    <input type="email" id="email"/><br/>
                    <label htmlfor="password">Password:</label><br/>
                    <input type="password" id="password"/><br/><br/>
                    <Button name="Register" checkMe={true}/>
            </form>
    </div>
    );
}

export default Register