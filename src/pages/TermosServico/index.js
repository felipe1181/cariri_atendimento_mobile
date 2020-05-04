import React from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import ContainerMessage from '../../components/ContainerMessage';

import {Button} from 'react-native-elements';


import buttonstyles from '../../styles/Form/Button/styles';
import stylesTermosServico from './styles';

const TermosServico = () => {
  const messageSessionTop = "Este aplicativo foi desenvolvido exclusivamente para avaliação de sintomas de gripe pela COVID-19	. Não deve ser usado na suspeita de outras doenças.";
  const messageSessionBot = "*Caso necessário, profissionais de saúde irão te orientar por meio de uma videochamada sobre sua condição de saúde.";
  return(
    <View>
      <Header 
          iconLeftHeader="imageLogo"
          iconRightHeader="iconMedical" />

      <ContainerMessage 
          type="primary"
          response={messageSessionTop}/>
      <ContainerMessage 
          type="error"
          response={messageSessionBot}/>
      <Button
          type="solid"
          buttonStyle={buttonstyles.button}
          title="ACEITO OS TERMOS E CONDIÇÕES"/>
    </View>
  );
}

export default TermosServico;