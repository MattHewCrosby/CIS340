import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

const [count, setCount] = usedState(0);
const onPress = () => setCount(count => count + 1);

  return (
    <View style={styles.container}>
      <View style ={styles.counterText}> 
        <Image source = {{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'}}
          style={styles.logo}/>
          <Text style={styles.instructions}>
            press the button below to select an image on your phone
             </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => alert('You have not selected an image yet')} >
        <Text style={buttontext}> Pick Image:</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
   justifyContent: 'center',
    paddingHorizontal: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#87CEFA",
    padding: 20,
    borderRadius: 5
  },
  instructions:{
   fontSize: 18,
   color: "#778899",
   marginHorizantal: 15,
   marginBottom: 10
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },
  buttontext:{
    fonSize: 20,
    color: "#fff"
  }
});
