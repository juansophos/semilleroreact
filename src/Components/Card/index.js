import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({character})=>{
    return(
            <div style={card}>
        <Link to={{
            pathname:"/Info",
            character
        }}>
                <img alt="image nose" style={avatar} src={character.image}/>
        </Link>
                <p>
                    <b>name:</b>{character.name}
                </p>
                <p>
                    <b>especie:</b>{character.species}
                </p>
                <p>
                    <b>estatus:</b>{character.status}
                </p>
            </div>
    )
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
export default Card;