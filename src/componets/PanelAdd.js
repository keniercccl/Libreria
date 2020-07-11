import React from 'react'

class PanelAdd extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title : '',
            image : '',
            rating : 1
        };
    }

    onChageTitle = (e) =>{
        this.setState({title : e.target.value});
    }

    onChageImage = (e) =>{
        this.setState({image : e.target.value});
    }

    onChageRating = (e) =>{
        const rating = parseInt (e.target.value);
        this.setState({rating : rating});
    }

    onSubmit = (e) => {
 
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;

        this.props.onAdd({title : title, image : image, rating : rating})
        this.props.onCancel(); 

    }

    render(){ 
        return (
            <div className="new-item-panel-container">
                <div className="new-item-panel">
                    <form onSubmit={this.onSubmit}>
                        <p>
                            <label>Titulo del Libro</label> <br/>
                            <input onChange = {this.onChageTitle} type="text"  className="imput" />
                        </p>

                        <p>
                            <label>Nombre de Imagen</label> <br/>
                            <input onChange = {this.onChageImage} type="text" className="imput" />
                        </p>

                        <p>
                        <label>Calificaciòn</label> <br/>
                        <select onChange = {this.onChageRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </p>
                        <input type="submit" className="button btn-blue" value ="Registrar libro" />
                        <button onClick= {this.onCancel} className="button btn-normal">Cancelar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default PanelAdd;