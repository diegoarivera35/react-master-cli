import React, { Component } from 'react';
import up from '../img/up.svg';
import down from '../img/down.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';

class Movie extends Component {
    state = {
        gusta: null,
    };
    // aca va la clase para colocarle me gusta

    // votarLike() {
    // El estado no lo debes modificar directamente
    // Usamos el metodo de los componentes "setState"
    // this.setState({ on: show });
    // Le enviamos un objeto, con las propiedades que
    // queremos reemplazar

    // console.log('Voto me gusta');
    // this.setState({ nuevo: false }, { gusta: true });
    // }

    votarLike = (e) => {
        this.setState({ gusta: true });
    };

    votarDislike = (e) => {
        this.setState({ gusta: false });
    };

    // votarDislike() {
    // El estado no lo debes modificar directamente
    // Usamos el metodo de los componentes "setState"
    // this.setState({ on: show });
    // Le enviamos un objeto, con las propiedades que
    // queremos reemplazar

    // console.log('Voto No me gusta');
    // this.setState({ nuevo: false }, { gusta: false });
    // }

    render() {
        return (
            <li>
                <figure>
                    <img
                        src={this.props.cover}
                        alt={`${this.props.name} ${this.props.year}`}
                        className="cover"
                    />
                    <div className="content">
                        <div className="title">
                            <h2>
                                {this.props.name} {this.props.year}
                            </h2>
                            {this.state.gusta === null ? (
                                <>
                                    <button
                                        type="button"
                                        onClick={this.votarLike}
                                    >
                                        <img src={up} alt="Vote up" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={this.votarDislike}
                                    >
                                        <img src={down} alt="Vote down" />
                                    </button>
                                </>
                            ) : (
                                <img
                                    src={this.state.gusta ? like : dislike}
                                    alt="Like status"
                                />
                            )}
                        </div>
                        {this.props.score !== undefined && (
                            <small>
                                IMDB <span>{this.props.score}</span>
                            </small>
                        )}

                        <figcaption>{this.props.description}</figcaption>
                    </div>
                </figure>
            </li>
        );
    }
}

export default Movie;
