import React from 'react'
import Search from './Search'
import PanelAdd from './PanelAdd'
import '../Menu.css'

class Menu extends React.Component{

    constructor(props){
        super(props);

        this.state = { newItemPanel : false}
        this.add = this.add.bind(this);
    }

    add(){
        this.setState({newItemPanel:true});
        console.log('un mensajeito');
    }

    render() {
    return(
        <div className="container">
            <div className="subcontainer">
                <div className="logo">
                    {this.props.tittle}
                </div>

                <div className="search">
                    <Search/>
                </div>

                <div className="actions">
                    <button 
                    onClick = {this.add}
                    className="button btn-blue">
                    + Añadir nuevo libro
                    </button>
                </div>
            </div>
            {
                (this.state.newItemPanel) ?
                <PanelAdd />
                :
                ''
            }
            
        </div>
    )
}
}

export default Menu;