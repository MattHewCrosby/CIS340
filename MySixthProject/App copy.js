import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
const csuLogo = {
  uri: "https://brand.colostate.edu/logo/",
  width: 60,
  height: 60
};

  return (
    <View style={styles.container}>
     
<Image
style={styles.localCSUlogo}
source={require('./assets/logo.png')}
/>
<Image
style={styles.urlCSUlogo}
source={{uri: "https://brand.colostate.edu/logo/"  }}
/>
<Image
style={styles.stretchLogo}
source ={csuLogo}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  localCSUlogo: {
    width: 55,
    height: 65
  },
  urlCSUlogo: {
    width: 50,
    height: 50
  },
  stretchLogo: {
    width: 50,
    height: 200,
    resizeMode: 'contain'
  }
});
