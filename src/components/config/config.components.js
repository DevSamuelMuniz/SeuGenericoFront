import React from 'react';
import './config.components.css';
import setaImg from '../../assets/seta.png';

function ConfigComponent({ titulo, link }) {
  return (
    <a className='link-config' href={link}>
      <div className="content">
        <h1>{titulo}</h1>
        <img
          src={setaImg}
          alt="Seta apontando para a direita"
        />
      </div>
    </a>
  );
}

export default ConfigComponent;
