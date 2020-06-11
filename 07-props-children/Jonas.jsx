import React from 'react';

const Jonas = (props) => (
    <li>
        <figure>
            <img src="/jonas.png" alt="jonas" />
            {/* Deep debería ser 0 si es undefined */}
            <figcaption>Jonas {props.deep}</figcaption>
        </figure>
    </li>
);

export default Jonas;
