import React from "react";
import { Redirect } from "react-router-dom";

class Info extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loading:true,
            error:"",
            character:null
        };
    }

    componentDidMount(){
        this.setState.loading=false;
        var character=(this.props.location.character);
        this.setState({character});
        console.log(this.state)
    }

    render(){
        const {location:{character}}=this.props;
        if (character) {
            console.log(character);
            const name= character.name;
            return(
            <div style={card} >
                <h1>
                    Info {character.name}
                </h1>
                <img style={avatar} src={character.image} ></img>
                <p>
                    <b>name:</b>{character.name}
                </p>
                <p>
                    <b>especie:</b>{character.species}
                </p>
                <p>
                    <b>estatus:</b>{character.status}
                </p>
                <p>
                    <b>origen:</b>{character.origin.name}
                </p>
                <p>
                    <b>genero:</b>{character.gender}
                </p>
                <p>
                    <b>se encuentra en:</b>{character.location.name}
                </p>
            </div>
            )
        }else{
            return(
                <Redirect to={{
                    pathname:"/Charaters/1"
                }}>

                </Redirect>
            )
        }
    }

}


const avatar={
    maxHeight:"50%",
    maxWidth:"50%",
    borderRadius:"100px"
}

const card={
    display:"flex",
    flexDirection:"column",
    fontSize:"20px",
    justifyContent:"center",
    alignItems:"center",
    minWidth:"25%",
    margin:"5%"
}

export default Info;