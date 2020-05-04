import React from 'react';
import { View ,Text} from 'react-native';

import stylesContainerMessage from './styles';
import typeColors from '../../styles/colors';

const ContainerMessage = (props) => {

  stylesContainerMessage.container = {
    marginHorizontal:20,
    marginBottom:30,    
    padding:10,
    height:130,  
    alignContent:"center",
    alignItems:"center", 
    backgroundColor: typeColors[props.type || 'default'],
  };
  
  return (
    <>
        {props.response &&
            <View 
              style={stylesContainerMessage.container}
            >
                <Text 
                  style={stylesContainerMessage.text}
                >
                    {props.response}
                </Text>
            </View>
        } 
    </>    
  );
}

export default ContainerMessage;