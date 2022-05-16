import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import Button from '../../components/Button/Button';

const NotFound = ({ handleBackClick }) => {

  return ( 
    <Fragment>
      <h2>Página não encontrada!</h2>
      <p>Você pode retornar a página anterior, visitar a home ou contactar nosso time de suporte.</p>
      <Button onClick={handleBackClick}>Voltar</Button>
    </Fragment>
  );
}
 
export default NotFound;