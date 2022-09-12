import React, { useState } from "react";
import Algorithm from "../Operations/Algorithm";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './form.css';

const Form = () => {
        
    const [n, setN] = useState(0);
    
    const handleChange = ({ target: { name, value } }) => {
        setN(value);
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
                <h5> <EastOutlinedIcon/> </h5>
                <Algorithm num={n}/>
            </form>
        </div>
    )
}

export default Form;