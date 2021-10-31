import {Component, useEffect, useState} from "react";

const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial)
    const incrementar = () => {
        setContador(contador + 1)
    }
    return [contador, incrementar]
}

// const Interval = ({contador}) => {
//     useEffect(() => {
//         const i = setInterval(() => {
//             console.log("El contador es :", contador)
//
//         }, 1000)
//         return () => clearInterval(i)
//     }, [contador])
//     return (
//         <p>Intervalo</p>
//     )
// }

class Interval extends Component {
    intervalo = ''

    componentDidMount() {
        this.intervalo = setInterval(() => console.log(this.props.contador), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalo)
    }

    render() {
        return (
            <p>Intervalo</p>
        )
    }
}

const UseEffect = () => {
    const [contador, incrementar] = useContador(0)
    useEffect(() => {
        document.title = contador
        console.log("Soy un efecto", contador)
    }, [contador])

    return (
        <div>
            Contador: {contador}
            <button
                onClick={incrementar}
            >
                Incremantar
            </button>
            <Interval contador={contador}/>
        </div>
    )
}
export default UseEffect