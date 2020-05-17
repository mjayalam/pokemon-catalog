import React from 'react';
import styles from '../styles/pokemonInfo.module.css';

class PokemonInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <div className={styles.information}>
                <div>Altura: {this.props.height}</div>
                <div>Peso: {this.props.weight}</div>
            </div>
        );
    }
};

export default PokemonInfo;