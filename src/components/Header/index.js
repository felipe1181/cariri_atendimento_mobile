import React from 'react';

import { View,ImageBackground} from 'react-native';

import { Avatar } from 'react-native-elements'; 
import stylesHeader from './styles';

import bgHeader from '../../../assets/images/bg_header.png';
import imageLogo from '../../../assets/images/imageLogo.png'; 
import iconDoctor from '../../../assets/icons/iconDoctor.png';  
import iconMedical from '../../../assets/icons/iconMedical.png'; 
import iconHealthcare from '../../../assets/icons/iconHealthcare.png';  

export default function HeaderMain(props){
 
  const propsIcons = {
      "imageLogo": imageLogo,
      "iconDoctor": iconDoctor,
      "iconMedical":iconMedical,
      "iconHealthcare":iconHealthcare,
    }

  return ( 
    <View style={stylesHeader.view}> 
        <ImageBackground
        source={bgHeader}
        style={stylesHeader.imageBackground}>
           <View style={stylesHeader.container}>
           <Avatar
                source={propsIcons[props.iconLeftHeader]}
                size="xlarge"  
                activeOpacity={0.7}                
              />
              <Avatar
                source={propsIcons[props.iconRightHeader]}
                size="xlarge"  
                activeOpacity={0.7}    
              />
            </View>
        </ImageBackground>  
     </View>  
  );
} 
