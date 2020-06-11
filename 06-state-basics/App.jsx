/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Component } from 'react';
import './style.css';

const apagado = '';
const show = '/show.png';
const betty = '/betty.png';
const midnight = '/midnight-gospel.png';
const good = '/the-good-place.png';
const twilight = '/twilight-zone.png';

const options = [betty, midnight, good, twilight, show];
const optionsII = [midnight, good, twilight, show, betty];

// Creamos una clase usando como base React.Componente
// para tener todo el uso
class App extends Component {
    constructor(props) {
        // Enviamos info a super, es decir Component
        // para que pueda construir un React Component
        super(props);

        // Inicializamos el estado en el constructor
        this.state = { on: '' };

        // Conectamos los metodos para que apunten
        // siempre a nuestro componente
        this.turnTvOn = this.turnTvOn.bind(this);
        this.turnTvCambio = this.turnTvCambio.bind(this);
    }

    // Creamos un metodo en nuestra clase
    turnTvOn() {
        // El estado no lo debes modificar directamente
        // Usamos el metodo de los componentes "setState"
        // this.setState({ on: show });
        // Le enviamos un objeto, con las propiedades que
        // queremos reemplazar

        if (this.state.on === '') {
            console.log('Prendo la tele');
            this.setState({ on: show });
        } else {
            this.setState({ on: apagado });
            console.log('Apago la tele');
        }
    }

    turnTvCambio() {
        // El estado no lo debes modificar directamente
        // Usamos el metodo de los componentes "setState"
        // this.setState({ on: programas[Math.floor(Math.random() * 5)] });
        // Le enviamos un objeto, con las propiedades que
        // queremos reemplazar
        const indice = Math.floor(Math.random() * options.length);
        const indiceII = Math.floor(Math.random() * optionsII.length);

        const newOption = options[indice];
        const newOptionII = options[indiceII];

        if (newOption !== this.state.on) {
            console.log('Cambio el canal');
            this.setState({
                on: newOption,
            });
        } else {
            console.log('sirvio?');
            this.setState({
                on: newOptionII,
            });
        }
    }

    // Aquí es donde tendremos nuestro JSX
    // este metodo ya esta pre-establecido
    // en lo qué es un componente
    render() {
        // Debemos hacer return del JSX
        return (
            <main>
                <figure>
                    <img className="show" src={this.state.on} alt="" />
<<<<<<< HEAD
                    <img
                        className="tv"
                        src="/tv.png"
                        alt=""
                        onClick={this.turnTvCambio}
                    />
=======

                    <button type="button" className="tv-button">
                        <img className="tv" src="/tv.png" alt="" />
                    </button>
>>>>>>> 83139a45cb89921a097a9ff659ba8a3dd6de676f
                </figure>

                <button type="button" onClick={this.turnTvOn}>
                    Prende la TV
                </button>
            </main>
        );
    }
}

export default App;
