import React, { useState } from "react";

const Form = () => {
        
    const [number, setNumber] = useState({
        serie: '',
    });

    const handleChange = ({ target: {name, value} }) => {
        setNumber({ ...number, [name]: value })
        numbers();
    };

    const numbers = () => {
        return number
    }

    return(
        <div>
            <form>
                <fieldset>
                    <div className='operation'>
                        <label htmlFor="number">Ingresa un número:</label>
                        <input type="number" min={0} name="n"/>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Form;