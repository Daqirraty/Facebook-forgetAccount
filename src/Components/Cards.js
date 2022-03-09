import Vacation from '../WealthBuddy.js/Vacation'
import Card from './Card'
import TransactionHistory from '../WealthBuddy.js/TransactionHistory'
import MoneyBag from '../WealthBuddy.js/CreateSavings'

const Cards = () =>{


    const stocks= [
        {
            "id": "0001",
            "type": "donut",
            "name": "Cake",
            "ppu": 0.55,
        },
        {
            "id": "0002",
            "type": "donut",
            "name": "Raised",
            "ppu": 0.55
        },
        {
            "id": "0003",
            "type": "donut",
            "name": "Old Fashioned",
            "ppu": 0.55
        }
    ]
    return(
        <div className="container">

            {
                // (stocks.length > 0)? stocks.map( stock => <Card data = {stock}/> ) : "Stock's empty" 
                 stocks.length > 0 && stocks.map( stock => <MoneyBag data = {stock}/> ) 
                 && stocks.map( stock => <TransactionHistory data = {stock}/> )
                 && stocks.map( stock => <Vacation data = {stock}/> )
                 
            }

           
        </div>
        
    )
}

export default Cards
