import PropTypes from 'prop-types';

const Contact  = ({ conectado, cambioDeEstado }) => {
    return (
      <div>
        <button onClick={cambioDeEstado}>{conectado ? 'Desconectar' : 'Conectar'}</button>
      </div>
    );
  };

Contact.propTypes = {
    conectado: PropTypes.bool.isRequired,
    cambioDeEstado: PropTypes.func.isRequired,
};

export default Contact;