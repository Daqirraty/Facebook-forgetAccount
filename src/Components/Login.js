import Button from "./Button";

const Login = () =>{

    return(
    <div className="container">
        <h1 className= "container mx-auto">WELCOME TO YOUR FIRST REACT CLASS</h1><hr/>
        <form >
                <label htmlfor="email">E-mail:</label><br/>
                <input type="text" name="fname"/><br/>
                <label htmlfor="password">Password:</label><br/>
                <input type="password" name="lname"/><br/><br/>
                <Button name="Login" checkMe={false}/>
        </form>
    </div>
    );
}

export default Login