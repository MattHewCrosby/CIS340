import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component  {
  onPressButton(){
    alert('You tapped a button')
  }
  render(){
  return (
    <View style={styles.container}>
     
     <View style={styles.containerButton}>
      <Button
        onPress={this._onPressButton}
        title="You pressed button one "
        /> 

     </View>
     <View style={styles.containerLayoutButton}>
     <Button
        onPress={this._onPressButton}
        title="You pressed button two "
        /> 

        <Button
        onPress={this._onPressButton}
        title="You pressed button Three "
        /> 
     </View>

     <View style={styles.containerButton}>
     <Button
    onPress={this._onPressButton}
    title="You pressed button Great! "
       />
     </View>
     
    </View>
  );
}
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
},

containerButton: {
  margin: 25,
},
containerLayoutButton: {
  margin: 20,
  flexDirection: 'row',
  justifyContent: 'space-between',
}
});


