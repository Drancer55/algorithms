import React, { useState } from "react";
import { Algorithm } from "../Operations/Algorithm";
import './form.css';

const Form = () => {
        
    const [number, setNumber] = useState({
        n: ''
    });
    
    const handleChange = ({ target: { name, value } }) => {
        setNumber({ ...number, [name]: value });
        // const n = number.n;
        Algorithm(number);
    };


    return(
        <div>
            <form>
                <fieldset>
                    <div className='operation'>
                        <label htmlFor="number">Ingresa un número:</label>
                        <input
                            type="number"
                            min={0}
                            name="n"
                            id="n"
                            onChange={handleChange}
                            className="number"
                        />
                    </div>
                </fieldset>
            </form>
        </div>
    )
}

export default Form;