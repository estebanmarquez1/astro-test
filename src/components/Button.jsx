import { useState } from "react";

function Button() {
    const [subscribe, setSubscribe] = useState(false);
    return (
        <button
            onClick={() => setSubscribe(!subscribe)}
        >
            {subscribe ? "Ya estás suscrito" : 'Suscríbete'}
        </button>
    )
}

export default Button;