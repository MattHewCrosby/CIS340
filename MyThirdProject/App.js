import  React, {useState}  from 'react';
import {  Text, View, Button } from 'react-native';

 function TV(props) {
  const [isOff,setIsOff] = useState(true);
  return(
  <View>
    {"\n\n\n\n"}
    <Text>
      This is {props.name} TV, and it is {isOff ? "OFF" : "Turn me On"}
    </Text>
    <Button
      onPress={() =>{
        setIsOff(false);
      }}
      disabled={!isOff}
      title={isOff ? "Turn me On, Please!" : "Thank You"}
    />
  </View>
  );

 }

 export default function MultiTVs(){
   return(
     <View>
      <TV name="LG"/>
      <TV name="SONY"/>
     </View>
   );
 }


