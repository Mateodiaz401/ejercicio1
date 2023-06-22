import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Conectado from './Conectado'

const ListContacto = ({ nombre, apellido, email, conectado }) => {

    const [conectadoLocal, setConectadoLocal] = useState(conectado);


    const cambiodeEstado = () => {
        setConectadoLocal(!conectadoLocal);
    };

    return (
        <>
            <div>
                <h2>Contacto</h2>
                <p>Nombre: {nombre}</p>
                <p>Apellido: {apellido}</p>
                <p>Email: {email}</p>
                <p>Conectado: { conectadoLocal ? 'Contacto En Línea' : 'Contacto No Disponible'}</p>
            </div>
            <Conectado
                conectado={conectadoLocal}
                cambioDeEstado={cambiodeEstado}
            />
        </>
    )
}
ListContacto.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    conectado: PropTypes.bool.isRequired,
};

export default ListContacto;