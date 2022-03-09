const Home = () =>{

    return(
        // PARENT DIV
        <div className="container-fluid">
            <hr/>
            <div className="row">
                {/* first div */}
                <div className=" col-5 border border-danger">
                                            {/* insert Two cards
                                            one for money bag
                                            two for transactionHistory */}
                        {/*first card  */}
                    <div class="card bg-dark" style={{width:"25rem", borderRadius:"20px"}}>
                        <div class="card-body text-white">
                            <h5 class="card-title">Total saved</h5>
                            <h2 class="card-subtitle text-muted">#2000</h2>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    {/* second card */}
                    <div class="card mt-2" style={{width: "25rem;"}}>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                {/* first div closed */}


                {/* second div */}
                <div className=" d-flex col-7  border border-warning">
                         {/* insert Two cards
                                            one for money bag
                                            two for transactionHistory */}
                        {/*first card  */}
                    <div class="card" style={{width: "18rem;", borderRadius:"7px"}}>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>

                    {/* second card */}
                    <div class="card" style={{width: "18rem;"}}>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                {/* second div closed */}
            </div>


        </div>
        // CLOSE OF PARENT
    )
}
export default Home