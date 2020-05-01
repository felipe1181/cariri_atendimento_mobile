import React from 'react';

import { StyleSheet, Text, View,ScrollView ,Image} from 'react-native';
import { Button,Flex,WingBlank } from '@ant-design/react-native';

export default function Header(props){
  return ( 
      <ScrollView >
        <WingBlank style={{ marginTop:30 }}>
           <Flex justify="start">
              <Button size="large">按钮3</Button>
              <Button size="large">按钮3</Button> 
              <Image
          style={{ width: 50, height: 50 }}
          source={require('../../../assets/icon.png')}
        />
            </Flex>
        </WingBlank> 
      </ScrollView>  
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: 'red', 
  },
});
 