const Button = (props) =>{

    const {name} = props

    function ClickMe (){
        return alert("Please input details")
    }

    function ClickMe2 (){
        return alert("Customer details successfully fetched !")
    }


    return(
        <div>
            <button type="button" onClick={ClickMe} class="btn btn-secondary me-2 mx-auto">cancel</button>
            <button type="button" onClick={ClickMe2} class="btn btn-primary">Search</button>
        </div>
      
    );

  
}

export default Button