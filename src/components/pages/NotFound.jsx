import React from 'react';
import Button from '../Button';

const NotFound = ({ handleBackClick }) => {

  return ( 
    <>
      <h2>Página não encontrada!</h2>
      <p>Você pode retornar a página anterior, visitar a home ou contactar nosso time de suporte.</p>
      <Button onClick={handleBackClick}>Voltar</Button>
    </>
  );
}
 
export default NotFound;