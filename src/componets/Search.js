import React from 'react'
import { render } from '@testing-library/react';


class Search extends React.Component {
 
    constructor(props){
        super(props)
        
    }

    

    onChageEvent = e => {
        let query = e.target.value.toLowerCase();
        this.props.onSearch(query);
        console.log(query)
    }

    render(){
        return (
            <div>
                <input type="text" 
                placeholder="Busca un Libro"
                onChange = {this.onChageEvent}
                />
            </div>
        )
    }   
}


export default Search;