import React from 'react';
import '../styles/testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={require(`../img/testimonio-${props.imagen}.png`)} alt='foto de emma' />
      <div className='text-testimonio'>
        <p className='nom-test'><strong>{props.nombre}</strong> en {props.pais} </p>
        <p className='car-test'>{props.cargo} en <strong>{props.empresa}</strong> </p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
