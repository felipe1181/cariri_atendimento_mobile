import { StyleSheet} from 'react-native';
import Colors from '../../styles/colors/';

const stylesCadastroInfoPessoal = StyleSheet.create({ 
  container: {     
    backgroundColor:Colors.solid,
    marginHorizontal:20,
    padding:10,
  },
  title:{
    color:Colors.primary,
    textAlign:"center",
    padding:5,
    margin:10,
  },
  buttonGroup:{
    width:'100%',
    height: 50,
    marginTop:0,
    marginLeft:0,
    marginBottom:30,
    paddingLeft:0,
  }
});

export default stylesCadastroInfoPessoal;