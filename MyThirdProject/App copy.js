import  React  from 'react';
import {  Text, TextInput, View } from 'react-native';

  function Student(props) {
  return (
    <View>
        <Text>Hey, My name is {props.name}, I am a student in CIS340 </Text>
    </View>

  );
}

export default function MultiComponent(){
  return(
<View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
      }}>
  <Text> Welcome to CIS340 </Text>
  <Student name = "Matt Crosby"/>
  <Student name = "George Abbot"/>
  <Student name = "no name"/>
  <Student name = "Jon Snow"/>
</View>
  );
}
