import React from 'react';

import { StyleSheet, View } from 'react-native';

import Login from './src/pages/Login';
import TermosServico from './src/pages/TermosServico';
import CadastroInfoPessoal from './src/pages/CadastroInfoPessoal';

export default function App() {
  return (
    <View>
        <CadastroInfoPessoal/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
