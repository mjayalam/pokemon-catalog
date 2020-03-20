import React from 'react';
import ReactDOM from 'react-dom';
import PokemonCard from './pokemonCard';
/*
Consuma los servicios del pokemon API
Haga un catalogo del listado de pokemons
Contenga filtros de tipos de pokemon
Que puedas ver los detalles de un pokemon
*/

class App extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            species: [],
            error: null,
            isLoaded: false,
            nextRequest: null,
            previousRequest: null,
        };

    }
    componentDidMount() {
      fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              species: result.results,
              nextRequest: result.next,
              previousRequest: result.previous
            });
            
          },
          (error) => {
            this.setState({
              isLoaded: false,
              error: error
            });
          }
        )      
    }
    getPokemons(e,url) {
      console.log('this is:', this);
       
        fetch(url)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              species: result.results,
              nextRequest: result.next,
              previousRequest: result.previous
            });
            
          },
          (error) => {
            this.setState({
              isLoaded: false,
              error: error
            });
          }
        )   
    }
    render(){
      if(this.state.isLoaded){
        return (
         <div className="container">
            <div className="row">
            {   
              this.state.species.map(item => (
                <PokemonCard key={item.name} name={item.name}></PokemonCard>
                ))
            }</div>
            {
              (this.state.previousRequest != null && 
              <button className="btn btn-primary" onClick={(e) => this.getPokemons(e,this.state.previousRequest)} >Previous pokemons</button>)
            }
            {
             (this.state.nextRequest != null &&
            <button className="btn btn-primary" onClick={(e) => this.getPokemons(e,this.state.nextRequest)} >Next pokemons</button>)
            }
          </div>
        );
        
      }else{
        return <img alt="Cargando" src="./loading.gif"></img>;
      }

  }
};

ReactDOM.render(<App/>,document.querySelector("#root"));