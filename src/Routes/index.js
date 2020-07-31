import React from "react";
import { Link, Route } from "react-router-dom";
import  ShowAll  from "../Components/ShowAll/index";
import styles from "./index.css";
import Info from "../Components/Info/index";
class Routes extends React.Component{
    
    render(){
        const menu={
            display: "flex",
            flexDirection: "row",
            justifyContent:"space-between",
            maxWidth:"70%",
            marginRigth:"15%",
            marginLeft:"15%",
            fontSize:"50px",
            marginTop:"0px"
        }
        const nostyle={
            textDecoration:"none",
            color:"#0886f9"
        }
        return(
            <div style={{maxWidth:"100%"}}>
                <nav style={{ position:"relative",padding:"0px",          background:"linear-gradient(90deg, rgba(43,161,18,1) 0%, rgba(9,121,35,1) 29%, rgba(26,87,3,1) 68%, rgba(51,130,14,1) 80%, rgba(95,255,0,1) 100%)"
}}>
                    <ul style={menu}>
                        <lo>
                            <Link style={nostyle} to="/">Home</Link>
                        </lo>
                        <lo>
                            <Link style={nostyle} to="/Charaters/1">Charaters</Link>
                        </lo>
                    </ul>
                </nav>
                <Route path="/" exact component={Home}/>
                <Route path={"/Charaters/:page"} exact component={ShowAll}/>
                <Route path="/Info" exact component={Info}/>
            </div>
        )
    }
}
const Home = () =>(
<div style={{display:"flex",width:"100%", textAlign:"center" , justifyContent:"center", flexDirection:"column"}}>
    <h1>
       Bienvenido a la Rick and morti dex 
    </h1>
    <img style={{minHeight:"422px"}}
     src="https://thumbs.gfycat.com/GiantPastBobcat-size_restricted.gif"></img>
</div>
);

export default Routes;