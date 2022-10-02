// props
// - divBackgroundColor (green, yellow, red)
// - tag (string: development, design, ....)
// - title (string: .....)
// - description (string: ....)
// - avatarBackground (green, yellow, red)
// - name (string: Jonh Doe)
// - lastLoginTime (string: 2 hours ago)
// - onClick (when you click on the card, alert(cardTitle - cardName))
// - if title is not more than 5 characters return null


export const Card = (props) => {
    const Click = () =>{
    alert(`${props.name} writes about ${props.title}`)
    }
        return (
    <div style={{backgroundColor :"#FAFAD2", width : 300, height: 450,  margin: 20, borderRadius:20, border: "2px solid white", position:"relative"}}onClick={Click}>
            <div style={{backgroundColor :props.backgroundColor, width : 300, height: 150, borderTopLeftRadius:20, borderTopRightRadius:20}}>
            </div>


                <div style={{backgroundColor: props.tagColor,borderRadius:100, width:130, height:20,padding:5, margin:10, color:"white", fontStyle:"oblique"}}>
                    {props.tag}
                </div>


                <h1 style={{fontSize:20}}>
                    {props.title}
                </h1>


                <p>{props.description}</p>

                <div style={{position:"absolute", bottom:0, display:"flex", alignItems:"end", margin:20}}>
                    <div style={{borderRadius:100, backgroundColor:props.avatarColor, width:45 , height:45,}}>
                        {props.avatar}
                    </div>

                    <div style={{margin: 10}}>
                    <div>{props.name}</div>
                    <div>{props.lastLoginTime}</div>
                    </div>
                </div>    
    </div>
    
)
}
