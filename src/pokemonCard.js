import React from 'react';
import styles from './pokemonCard.module.css';
import PokemonInfo from './pokemonInfo';

class PokemonCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          isLoaded:false,
          name:'',
          height:'',
          weight:'',
          imageFront:'',
          imageBack: '',
          isHovered: false,
          error: null
        };
    }
    componentDidMount(){
        fetch("https://pokeapi.co/api/v2/pokemon/"+this.props.name)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              imageFront: result.sprites.front_default,
              imageBack: result.sprites.back_default,
              height: result.height,
              weight: result.weight
            });
            
          },
          (error) => {
            this.setState({
              error: error
            });
          }
        )      
    }
    setImage (e,visible){
      this.setState({isHovered: visible });
    }
    render() {
        let url = (!this.state.isHovered ? this.state.imageFront : this.state.imageBack);
        if(this.state.imageFront){
            return (
              <div className="col-sm-3" >
                <div className={styles.pokemonContainer} onMouseEnter={(e) => this.setImage(e,true)} onMouseLeave={(e) => this.setImage(e,false)}>
                  <img alt={this.props.name} src={url}></img>
                  <p styles={styles.p}>{this.props.name}</p>
                </div>
                { 
                this.state.isHovered && 
                <PokemonInfo height={this.state.height} weight={this.state.weight}/>
                }
              </div>
            );
        }else{
            return <img alt="Cargando" src="./loading.gif"></img>;
        }

    }
};

export default PokemonCard;