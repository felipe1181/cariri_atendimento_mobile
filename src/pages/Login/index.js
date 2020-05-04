import React,{useState} from 'react';

import { View,StyleSheet } from 'react-native'; 
import { Button } from 'react-native-elements';
import stylesLogin from './styles';

import HeaderMain from '../../components/Header';
import ResponseBox from '../../components/ResponseBox/';

import { TextInputMask } from 'react-native-masked-text';
import inputstyles from '../../styles/Form/Input/styles';
import buttonstyles from '../../styles/Form/Button/styles';

import ContainerMessage from '../../components/ContainerMessage';

export default function Login(){
  const [cpf,setCpf] = useState('');
  const [cep,setCep] = useState('');

  function handleSubmitFormLogin(){
      console.log(cpf,cep);
  }
  
  return(
    <View> 
     <HeaderMain 
          iconLeftHeader='iconDoctor' 
          iconRightHeader='imageLogo' 
      />   
       
      <ResponseBox type="success" response="Mensagem personalizada de sucesso"/>
      
      <View style={stylesLogin.container}>
        <TextInputMask
        type={'cpf'}
        style={inputstyles.input}
        placeholder='INFORME SEU CPF' 
        value={cpf}
        onChangeText={text => {
          setCpf(text)
        }}
      />

      <TextInputMask
        type={'zip-code'}
        style={inputstyles.input}
        placeholder='DIGA SEU CEP' 
        value={cep}
        onChangeText={text => {
          setCep(text)
        }} 
      /> 
        <Button 
            buttonStyle={buttonstyles.button}
            title="INICIAR CONSULTA"
            onPress={handleSubmitFormLogin}
        />  
      </View>
     </View>
    ); 
}

