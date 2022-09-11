import { Fibonacci, Operation, primo, triangular } from "../Result/Result";

export const Algorithm = ({ n }) => {
    
    const getPrimo = () => {
        if (n <= 1) return false;
        for (let i = 2; i < n; i++)
            if (n % i === 0) return false;
        return true;
    }
    
    if (getPrimo() === true) {
        primo(n)
    } else {
        primo(null)
    }

    const getFibonacci = () => {
        let n1 = 1;
        let n2 = 0;
        let fib = 0;
        for (let i = 0; i < n; i++) {
            fib = n1 + n2;
            n1 = n2;
            n2 = fib;
        }
        Fibonacci({ fib });
    }
    getFibonacci();

    const getTriangular = () => {
        let tri = 0;
        for (let i = 1; i <= n; i++)
            tri = ((i * (i + 1)) / 2);
        triangular(tri);
    }
    getTriangular();
}