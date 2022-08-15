import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from './components/Titulo';
import Formulario from './components/Formulario';

const App = () => {
    return (
        <div>
            <section>
                <Titulo></Titulo>
                <Formulario></Formulario>
            </section>
        </div>
    );
};

export default App;