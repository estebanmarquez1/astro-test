import { useState } from "react";
import {ToastContainer, toast} from 'react-toastify' //Uso de componentes externos hechos en React

function Button() {
    const [subscribe, setSubscribe] = useState(false);
    return (
        <>
        <button
            onClick={() => {
                toast.success('Felicidades, ya estás suscrito');
                setSubscribe(!subscribe);
            }}
        >
            {subscribe ? "Ya estás suscrito" : 'Suscríbete'}
        </button>
        <ToastContainer/>
        </>
    )
}

export default Button;