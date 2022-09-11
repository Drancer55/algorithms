import './result.css'

export const Fibonacci = ({ fib }) => { 
    
    console.log(fib)

    return (
        <div className='operation'>
            <h3>Fibonacci:</h3>
            <p>{fib}</p>
        </div>
    )
}

export const triangular = (tri) => {

}

export const primo = (n) => {
    
}

export const Operation = (n) => {

    console.log(n)

    return (
        <div className='operations'>
            <fieldset>
                
                <h5> - </h5>
                <div className='operation'>
                    <h3>2Triangular</h3>
                </div>
                <h5> + </h5>
                <div className='operation'>
                    <h3>Primo</h3>
                    <h3></h3>
                </div>
            </fieldset>
        </div>
    )
}

export const Result = () => {
    return(
        <fieldset>
            <label>Resultado: </label>
        </fieldset>
    )
}
