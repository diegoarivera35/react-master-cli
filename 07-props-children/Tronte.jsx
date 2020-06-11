import React from 'react';

//  Agnes debería renderizar a Tronte
const Operation = (props) => (
    <small>The operation result is {props.operation(props.value)}</small>
);

const Tronte = (props) => (
    <li>
        <figure>
            <img src="/tronte.png" alt="Tronte" />
            {/* Deep debería ser 0 si es undefined */}
            <figcaption>Tronte {props.deep}</figcaption>
        </figure>
        
        <figure>
            <img src="/ulrich.png" alt="ulrich" />
            {/* Deep debería ser 0 si es undefined */}
            <figcaption>Ulrich {props.deep}</figcaption>
        </figure>
        <figure>
            <img src="/mikkel.png" alt="mikkel" />
            {/* Deep debería ser 0 si es undefined */}
            <figcaption>Mikkel {props.deep}</figcaption>
        </figure>
        <figure>
            <img src="/jonas.png" alt="jonas" />
            {/* Deep debería ser 0 si es undefined */}
            <figcaption>Jonas {props.deep}</figcaption>
        </figure>
    </li>
);

export default Tronte;
