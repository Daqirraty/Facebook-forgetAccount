const Button = (props) =>{

    const {name} = props

    function checkMe(){
         return (checkMe)? <button onClick = {ClickMe} className="btn btn-lg btn-success">{checkMe}</button> : <button onClick = {ClickMe} className="btn btn-lg btn-warning">{checkMe}</button>
        
    }

   function ClickMe (){
       return alert("Welcome back")
   }

    return(
        <div>
            <button onClick = {ClickMe} className="btn btn-lg btn-success">{name}</button>
        </div>
      
    );
}

export default Button