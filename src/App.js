import './App.css';
import {Card} from "./components/Card"
// create input component
// input component should accept props (type, label, name, placeholder)

// If you pass input component a prop named buttonLabel, it should render button next to input
// const onclick = () => {console.log("button was clicked")}
// const onchange2 = () => {console.log("input change")}

function App() {
  

  return (
    <div style ={{display:"flex", justifyContent:"center", alignItems:'center', background: "linear-gradient(to right, #cfce82, #00d4ff)", width:"100vw", height:"100vh"}} className="App"> 

            <Card backgroundColor = "#B0C4DE" tagColor="#AFEEEE" tag ="Technology" title = "What is new in 2022 Tech" description = "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown . " avatarColor = "#FFE4C4" avatar = ""  name ="Jane Doe" lastLoginTime = "20 min ago" />
            <Card backgroundColor = "#AFEEEE" tagColor="#98FB98" tag ="Social interaction" title = "What is new in 2022  Social interaction " description = "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown . "  avatarColor = "#87CEEB" avatar = ""  name ="James Doe" lastLoginTime = "10 hour ago" /> 
            <Card backgroundColor = "#98FB98" tagColor="#B0C4DE" tag ="Life Quality" title = "What is new in 2022 Life Quality" description = "ndustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown . "  avatarColor = "#00CED1" avatar = ""  name ="Kate Doe" lastLoginTime = "1 hour ago" />

    </div>
  );
}

export default App;
