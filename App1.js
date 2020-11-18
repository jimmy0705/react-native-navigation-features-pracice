// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Modl from './Modal'

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
//       <Button
//         onPress={() => navigation.navigate('MyModal')}
//         title="Open Modal"
//       />
//     </View>
//   );
// }





// const RootStack = createStackNavigator();



// function App() {
//   return (
//     <NavigationContainer>
//       <RootStack.Navigator  headerMode="none">
//         <RootStack.Screen name="Main" component={HomeScreen} />
//         <RootStack.Screen name="MyModal" component={Modl} />
//       </RootStack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;



///=======================================================///===================================================///========================//


///=======================================================///===================================================///========================//

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import { Button, StyleSheet, Text, View ,Modal,TextInput,TouchableOpacity} from 'react-native';
import AppPermissions from './AppPermissions'







export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const[emailSubmit,setEmailSubmit]= useState(false)
 
  return (
    
  
    <View style={styles.mainContainer}>
      
     
      <View>
          <TouchableOpacity style={styles.touchableIdArea}  onPress={() => setModalOpen(true)} >
            <Text style={{fontSize:23,color:'black',textAlign:"center"}}>Forgot Password ?</Text>
          </TouchableOpacity>
          
        </View>
        <View>
        <AppPermissions/>
        </View>
      

      <Modal 
      visible={modalOpen} 
      animationType='slide' 
      transparent={true} 
      style={{position:'relative'}} 
      onRequestClose={()=>{setModalOpen(false)}} >
        <View style={styles.modalContent}>
        
        <View>
          <TouchableOpacity style={styles.touchableIdArea}  onPress={() => setModalOpen(false)} >
            <View style={styles.rectangle}></View>
          </TouchableOpacity>
        </View>
    
        {!emailSubmit ? 
       <View>
        <View>
          <Text style={styles.title}>Forgot your password? </Text>
        </View>

        <View style={styles.resetMsgcontainer}>
          <Text style={styles.resetMsg}>Confirm your email and weâ€™ll send the instructions to reset your password.</Text>
        </View>
      <View style={styles.inputContainer}>
      <Text style={styles.textId}>Email</Text>
      <TextInput
        style={styles.input}
       />
      </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.resetBtn} >
        <Text style={styles.btnTitle} onPress={()=> setEmailSubmit(true)}>Reset Password</Text>
      </TouchableOpacity>
    </View>

    </View>

    : <View>
      
      <View>
          <Text style={styles.title}>Email sent to john.smith@gmail.cm </Text>
        </View>

        <View style={styles.resetMsgcontainer}>
          <Text style={styles.resetMsg}>Please check your inbox for a link to reset your password.</Text>
        </View>

    </View>

        }

        </View>
      </Modal>

    </View>


 
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    // flex: 1,
    // flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor:'#8850B8',
    
    
  },
 
  modalContent: {
    position:"absolute",
    // display:'flex',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
   // justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'column',
    
    // alignItems: 'center',
    backgroundColor:'#FFFFFF',
    height:398,
    width:'100%',
    bottom:0,
    borderWidth: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderColor:'#C4C4C4',

  },
  rectangle:{
    alignSelf:"flex-start",
    height:5,
    width:70,
    backgroundColor:'#C4C4C4',
    borderRadius:10,
  },
  touchableIdArea:{
    marginTop:25,
  },
  title: {
    fontSize: 23,
    //marginBottom: 40,
    width: 300,
    textAlign: 'center',
    fontWeight: '600',
    color:'#000000',
    // fontSize: 22,
    // textAlign: 'center',
    // color: '#000000',
    // // width: 300,
      marginVertical: 30,
     //lineHeight: 24,
    // letterSpacing: 0.2,
    // fontWeight:'400'
  },
 
  resetMsgcontainer:{
    justifyContent: 'center',
    marginBottom: 20,
    
   
  },
  resetMsg:{
    fontSize: 16,
    color: 'black',
    //fontWeight: 'normal',
    maxWidth: 300,
    //lineHeight:16,
    //letterSpacing:1,


  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#091321',
    opacity: 0.2,
    fontSize: 16,
    paddingLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textId: {
    color: '#000000',
    fontSize: 14,
    alignSelf: 'flex-start',
    lineHeight: 30,
  },

  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetBtn: {
    width: 300,
    height: 50,
    backgroundColor: '#1F2D3D',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 25,
  },
  btnTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },


  
});