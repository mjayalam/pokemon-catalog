import React from 'react';
import styles from './pokemonInfo.module.css';

class PokemonInfo extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("mounted");
    }
    render() {
        return(
            <div className={styles.information}>
                <div>{this.props.height}</div>
                <div>{this.props.weight}</div>
            </div>
        );
    }
};

export default PokemonInfo;