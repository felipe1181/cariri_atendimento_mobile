import React,{useState} from 'react';
import { View } from 'react-native';

import Header from '../../components/Header';
import ContainerMessage from '../../components/ContainerMessage';

import {Button,ButtonGroup,Text} from 'react-native-elements';
import { TextInputMask } from 'react-native-masked-text';

import inputstyles from '../../styles/Form/Input/styles';
import buttonstyles from '../../styles/Form/Button/styles';

import stylesCadastroInfoPessoal from './styles';

const CadastroInfoPessoal = () => {
  
  const [nome,setNome] = useState('');
  const [idade,setIdade] = useState('');
  const [sexo,setSexo] = useState([['MASCULINO','FEMININO'],1]);
  const [telefone,setTelefone] = useState(''); 

  return(
    <View >
     <Header 
          iconLeftHeader="imageLogo"
          iconRightHeader="iconHealthcare" />
      
    <View style={stylesCadastroInfoPessoal.container}> 
      
          <Text style={stylesCadastroInfoPessoal.title} h4>Cadastro</Text>
            <TextInputMask
                value={nome}
                type={'custom'}
                options={{
                  mask: '************************************************************************************************************************'
                }}
                onChangeText={text => {
                  setNome(text)
                }} 
                placeholder="NOME"
                style={inputstyles.inputSecundary}
              />

              <TextInputMask
                type={'only-numbers'}
                value={idade}
                onChangeText={text => {
                  setIdade(text)
                }} 
                placeholder="IDADE"
                style={inputstyles.inputSecundary}
              />
              <TextInputMask
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) '
                }}
                value={telefone}
                onChangeText={text => {
                  setTelefone(text)
                }} 
                placeholder="TELEFONE"
                style={inputstyles.inputSecundary}
              />
            <ButtonGroup
              onPress={text =>{setSexo([sexo[0],text])}} 
              buttons={sexo[0]}
              selectedIndex={sexo[1]}
              containerStyle={stylesCadastroInfoPessoal.buttonGroup}
              selectedButtonStyle={buttonstyles.buttonGroup}
            />
          <Button buttonStyle={buttonstyles.button} title="PRÓXIMO"/>
        </View>
    </View>
  );
}

export default  CadastroInfoPessoal;