import 'react-native-gesture-handler'
import React from 'react';
import {View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';
import * as Animatable from 'react-native-animatable';


export default function App() {



return (
<KeyboardAvoidingView style={styles.background}>
 <View style={styles.containerLogo}>
   <Image 
    source={require('./src/assets/logo.png')}
   />
  
 </View>
 <Animatable.View 
 style={styles.container}
 
 animation= 'bounceInUp'
 useNativeDriver
 duration={2000}
>
  <TextInput
  style={styles.input}
  placeholder='Email'
  autoCorrect={false}
  onChange={()=>{}}
  />

<TextInput
  style={styles.input}
  placeholder='Senha'
  autoCorrect={false}
  onChange={()=>{}}
  />

  <TouchableOpacity style={styles.btnSubmit}>
    <Text style={styles.submitText}>Acessar</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.btnRegister}>
    <Text style={styles.registerText}>Criar conta gratuita</Text>
  </TouchableOpacity>

 </Animatable.View>
</KeyboardAvoidingView>
);
}


const styles = StyleSheet.create({
  background:{
flex: 1,
backgroundColor: '#191919',
alignItems: 'center',
 justifyContent: 'center'

  },
  containerLogo:{
    flex: 1,
    justifyContent: 'center',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input:{
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnSubmit:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  submitText:{
    color: '#fff',
    fontSize: 18
  },
  btnRegister:{
    marginTop: 10,
  },
  registerText:{
    color: '#FFF'
  }

})

