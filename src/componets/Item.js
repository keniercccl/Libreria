import React from 'react'
import '../../src/styles/Item.css'

class Item extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            title : '',
            image : '',
            rating : 1,
            stars : []
        }
    } 

    componentDidMount(){
        this.setState({
            id : this.props.id,
            title : this.props.title,
            image : this.props.image,
            rating : parseInt(this.props.rating),
            // stars : Array(parseInt(this.props.rating)).fill(0)
        });
    }

    onChangeRating = e => {
        const rating = parseInt(e.target.value);
        this.setState({

            rating : parseInt(e.target.value),
            stars : Array(parseInt(e.target.value)).fill(0)
        });

        this.props.onUpdateRating({
            id : this.state.id,
            title : this.state.title, 
            image :this.state.image,
            rating : this.state.rating
        });
    } 

    onRemove = e => {
        this.props.onRemove(this.props.id);
    }

    render(){
            return (
                <div className="item">
                    <div className="image">
                        
                        <img scr= "https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg" width="100%" alt={this.image}/>
                    </div>
                    <div className="title">
                        {this.props.title}
                    </div>

                    <div>
                        <p>
                            { 
                                this.state.stars.map( x =>
                                    <img
                                    src = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Black_Star.svg"
                                     width="25" 
                                     alt="star-wiki"
                                     />
                                )
                            }
                        </p>

                        <p>
                        <label>Calificaciòn:</label><br />
                        <select value={this.state.rating}
                        onChange = {this.onChangeRating}>
                            <option  value = "1"> 1 </option>
                            <option  value = "2"> 2 </option>
                            <option  value = "3"> 3 </option>
                            <option  value = "4"> 4 </option>
                            <option  value = "5"> 5 </option>
                        </select>
                        </p>

                    </div>

                    <div className="actions ">
                        <button onClick = {this.onRemove} >Eliminar</button>
                    </div>
                </div>
            )
        }
    }
export default Item;