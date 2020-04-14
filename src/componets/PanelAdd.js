import React from 'react'

const PanelAdd = () => {

    return (
        <div className="new-item-panel-container">
            <div className="new-item-panel">
                <form>
                    <p>
                        <label>Titulo del Libro</label> <br/>
                        <input type="text" name="title" className="imput" />
                    </p>

                    <p>
                        <label>Nombre de Imagen</label> <br/>
                        <input type="text" name="title" className="imput" />
                    </p>

                    <p>
                    <label>Calificaciòn</label> <br/>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    </p>
                    <input type="submit" className="button btn-blue" value ="Registrar libro" />
                    <button className="button btn-normal">Cancelar</button>
                </form>
            </div>
        </div>
    )
}

export default PanelAdd;