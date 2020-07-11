import React from 'react'
import '../../src/styles/Item.css'

class Item extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            stars : []
        }
    } 

    componentDidMount(){
        this.setState({
            stars : Array(parseInt(this.props.rating)).fill(0)
        })
    }

    

    render(){
            return (
                <div className="item">
                    <div className="image">
                        
                        <img scr= {"../img/" + this.props.image}  width="100%" alt={this.image}/>
                    </div>
                    <div className="title">
                        {this.title}
                    </div>

                    <div>
                        <p>
                            { 
                                this.state.stars.map( x =>
                                    <img id= "img123"
                                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Kvinpinta_flava_stelo_255-255-0.svg/1076px-Kvinpinta_flava_stelo_255-255-0.svg.png"
                                     width="25" 
                                     alt="star-wiki"
                                     />
                                )
                            }
                        </p>

                        <p>
                        <label>Calificaciòn:</label><br />
                        <select value={this.rating}>
                            <option  value = "1"> 1 </option>
                            <option  value = "2"> 2 </option>
                            <option  value = "3"> 3 </option>
                            <option  value = "4"> 4 </option>
                            <option  value = "5"> 5 </option>
                        </select>
                        </p>

                    </div>

                    <div className="actions ">
                        <button>Eliminar</button>
                    </div>
                </div>
            )
        }
    }
export default Item;