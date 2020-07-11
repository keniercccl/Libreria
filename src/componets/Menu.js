import React from 'react'
import Search from './Search'
import PanelAdd from './PanelAdd'
import '../styles/Menu.css'

class Menu extends React.Component{

    constructor(props){
        super(props);

        this.state = { newItemPanel : false}
        this.add = this.add.bind(this);
        this.onCancel = this.onCancel.bind(this)
    }
      
        //Revisar los bind que estan en el this.state porque sin ellos no se usa funciòn flecha
    add = () => {
        this.setState({newItemPanel:true});
        //console.log('un mensajito del boton agregar');
    }

        //Revisar los bind que estan en el this.state porque sin ellos no se usa funciòn flecha
    onCancel = (e) => { 
        this.setState({newItemPanel:false});

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
                    Añadir nuevo libro
                    </button>
                </div>
            </div>
            {
                (this.state.newItemPanel) ?
                <PanelAdd 
                    onCancel = {this.onCancel}
                    onAdd = {this.props.onAdd}
                />
                :
                ''
            }
        </div>
    )
}
}

export default Menu;