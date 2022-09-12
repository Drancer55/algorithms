import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import './algorithm.css'

const Algorithm = (num) => {
    
    const n = num.num;
    // Algorithm to obtain the Fibonacci sequence 0; 1; 1; 2; 3, 5; 8; 13; 21; 34; 55; 89...
    const GetFibonacci = () => {
        let n1 = 1;
        let n2 = 0;
        let fib = 0;
        for (let i = 0; i < n; i++) {
            fib = n1 + n2;
            n1 = n2;
            n2 = fib;
        } return fib
    }
    // Algorithm to obtain the sequence of triangular numbers 1, 3, 6, 10, 15, 21, 28, 36, 45, 55...
    const GetTriangular = () => {
        let tri = 0;
        for (let i = 1; i <= n; i++)
            tri = ((i * (i + 1)) / 2);
        return tri
    }
    // Algorithm to know if it is a prime number 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43...
    const Primo = () => {
        if (n <= 1) return false;
        for (let i = 2; i < n; i++)
            if (n % i === 0) return false;
        return true;
    }
    // Final operation serie(n) = fibonacci(n) - 2triangular + primo(n)
    const Operation = () => {
        const GetPrimo = () => {
            if (Primo() === true) {
                return n
            } else {
                return 0
            }
        }
        const fibo = parseInt(GetFibonacci());
        const triangular = parseInt(GetTriangular() * 2);
        const primo = parseInt(GetPrimo());
        return fibo - triangular + primo;
    }

        return (
        <>
            <fieldset>        
                <div className='operation'>
                    <h5>Fibonacci:</h5>
                    <label>
                        { GetFibonacci() }
                    </label>
                </div>
                <h5><RemoveOutlinedIcon/></h5>    
                <div className='operation'>
                    <h5>2Triangular:</h5>
                    <label>
                        (2){ GetTriangular() }
                    </label>
                </div>
                <h5><AddOutlinedIcon/></h5>    
                <div>
                    <h5>Primo:</h5>
                    {(Primo() === true) ?
                        <label> {num.num} </label> :
                        <DoNotDisturbAltIcon /> }
                </div>
            </fieldset>
            <h5><EastOutlinedIcon/></h5>
            <fieldset>    
                <div>
                    <h5>Total:</h5>
                    <label>
                        {Operation()}
                    </label>    
                </div>
            </fieldset>
        </>
    )    
}

export default Algorithm;