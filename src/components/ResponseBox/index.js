import React from 'react';

import {View,Text} from 'react-native';  
import stylesResponseBox from './styles'; 
import typeColors from '../../styles/colors';

export default function ResponseBox(props){
  stylesResponseBox.container = {    
    alignItems:"center",
    alignContent:"center", 
    backgroundColor: typeColors[props.type],
  };
  
  return ( 
    <View style={{padding:15,height:120}}>
      { props.response !== undefined &&
          props.response !== "" &&
            <View style={stylesResponseBox.container}>
              <Text style={stylesResponseBox.text}>
                  {props.response}
              </Text>
            </View>       
      }       
    </View>  
  );
}

 