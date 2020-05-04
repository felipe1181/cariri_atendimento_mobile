import { StyleSheet} from 'react-native';
const stylesHeader = StyleSheet.create({
  view:{
    alignItems:"center",
    alignContent:"center",
    marginBottom:50,
  },
  imageBackground:{
    marginTop:-50,
    width: '140%',     
    height:225,
    alignItems:"center",
    alignContent:"center",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,  
    overflow: 'hidden',
  },
  container: {    
    marginTop:80,  
    flexDirection:"row",  
    alignContent:"flex-start",
    alignItems:"flex-end",
  },
});
export default stylesHeader;