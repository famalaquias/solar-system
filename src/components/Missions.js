// 7. Crie um componente chamado Missions:
// Crie um componente chamado Missions dentro da pasta src/components.
// Este componente deve ter uma div que envolva todo seu conteúdo e que tenha o atributo data-testid="missions".
// Renderize o componente Missions abaixo do SolarSystem, dentro do componente principal App.

import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions" />
        <Title headline="Missões" />
      </>
    ); // Requisito 08: renderize o componente Title dentro do componente Missions. O componente Title deve ser renderizado recebendo a prop headline com o valor "Missões".
  }
}

export default Missions;