import Rosh from '../StudentCardLayout/Rosh.png'
import DefaultAvatar from '../StudentCardLayout/DefaultAvatar.png'
const StudentCards =(props) =>{
    
const StudentCardsItems =[
    {
        name:"Ajao Abayomi",
        Role:"Lead Software Engineer",
        picture: Rosh
    },
    {
        name:"Olamilekan ",
        Role:"HR Personnel",
        "picture": DefaultAvatar
    },
    {
        name:"Oluwo Faruq",
        Role:"Junior Developer",
        picture: DefaultAvatar
    },
    {
        name:"Minister",
        Role:"Junior Developer",
        picture: DefaultAvatar
    },
    {
        name:"Olupo Olawale",
        Role:"Junior Developer",
        picture: DefaultAvatar
    },
    {
        name:"Olorungbebe Yusuff",
        Role:"Junior Developer",
        picture: DefaultAvatar
    },
    {
        name:"Abu Quest ",
        Role:"Junior Developer",
        picture: DefaultAvatar
    },
    {
        name:"Hikmah Abdulganiyy",
        Role:"Junior Developer",
        picture: DefaultAvatar
    },
    {
        name:"Ajao Abayomi",
        Role:"props.name",
        picture: DefaultAvatar
    }
]

    return(
    <div className="container">
          <div className="d-flex row border border-primary"style={{width:"18rem;", height:"25rem;", borderRadius:"10px"}}>
            <img src='' className="col border"   />
            <div className="col border border-primary">
                <div className="row">{StudentCardsItems.name}1</div>
                <div className="row">{StudentCardsItems.Role}1</div>
            </div>
            
            
        </div>
        
    </div>
      
    )
}
export default StudentCards