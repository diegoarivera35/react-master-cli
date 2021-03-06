import React from 'react';

const profundidad = (props) => {
    props.deep + 1;
};

//  Agnes debería renderizar a Tronte
const Agnes = (props) => (
    <li>
        <figure>
            <img src="/agnes.png" alt="Agnes" />
            {/* Deep debería ser 0 si es undefined */}
            <figcaption>Agnes {props.deep}</figcaption>
        </figure>
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

export default Agnes;
