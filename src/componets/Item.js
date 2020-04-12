import React from 'react'
import Imageness from '../componets/Imageness'

const Item = (props) => {
    return (
        <div className="item">
            <div className="image">
                <img scr={"../../blic/img/" + props.image} width="100%" alt={props.image}/>
                <Imageness />
            </div>

            <div className="tit">
                {props.title}
            </div>

            <div>
                <p>

                </p>
                Calificaciòn:
                <select value={props.rating}>
                    <option  value = "1"> 1 </option>
                    <option  value = "2"> 2 </option>
                    <option  value = "3"> 3 </option>
                    <option  value = "4"> 4 </option>
                    <option  value = "5"> 5 </option>
                </select>
            </div>

            <div className="actions ">
                <button>Eliminar</button>
            </div>
        </div>
    )
}

export default Item;