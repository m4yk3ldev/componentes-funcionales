// const state = {contador: 0}
// action = {type: string, payload: any}

import {useReducer, useState} from "react";

const inicial = {contador: 0}
const reducer = (state, action) => {
    switch (action.type) {
        case 'incremantar':
            return {contador: state.contador + 1}
        case 'decremantar':
            return {contador: state.contador > 0 ? state.contador - 1 : 0}
        case 'set':
            return {contador: action.payload}
        default:
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, inicial)
    const [valor, setValor] = useState(0)
    return (
        <div>
            Contador: {state.contador}
            <br/>
            <input type="text" value={valor} onChange={(e) => setValor(e.target.value)}/>
            <button onClick={() => dispatch({type: 'incremantar'})}>Más</button>
            <button onClick={() => dispatch({type: 'decremantar'})}>Quitar</button>
            <button onClick={() => dispatch({type: 'set', payload: valor})}>Set</button>
        </div>
    )
}

export default UseReducer;
