import Button from "./Button";

const FirstComponent = () =>{

    return(
    <div>
        <div >
            <span><h1 className= "container mx-auto">WELCOME TO YOUR FIRST REACT CLASS</h1><hr/></span>
        </div>
        <form className="container">
                <label htmlfor="email">E-mail:</label><br/>
                <input type="text" name="fname"/><br/>
                <label htmlfor="password">Password:</label><br/>
                <input type="password" name="lname"/><br/><br/>
                <Button name="Login"/>
            </form>
    </div>
    );
}

export default FirstComponent