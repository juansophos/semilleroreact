import React from "react";
import Card from "../Card/index";
import { Link, Redirect } from "react-router-dom";
import Routes from "../../Routes/index";
class ShowAll extends React.Component{
    constructor(props){
        super(props);
        this.state={
            page:1,
            loading:true,
            error:"",
            results:[]
        };
    }

    componentDidMount(){
        const {match:{params}}=this.props;
        const {page}=params;
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        .then(res => res.json())
        .then(({results,info})=>{
            console.log("info");
            console.log(info);
            this.setState({loading:false,results,nextpage:this.state.page+1});
        },
        (error)=>{
            this.setState({loading:false,error});
        })
    }

    render(){
        const {loading,results}=this.state;
        if (loading) {
            return(
                <div>
                    <p>
                        Cargando...
                    </p>
                </div>
            )
        }else{
            return( 
            <div style={{display:"flex",width:"100%", textAlign:"center" , justifyContent:"center", flexDirection:"column"}}>
                <h1>
                    Personajes
                </h1>
                <div style={{display:"flex", flexDirection:"row"}}>
                    {
                        results.map((character)=>(
                            <Card character={character}></Card>
                       )) 
                    }
                </div>
                
            </div>
        )
        }
       
    }
}

export default ShowAll;