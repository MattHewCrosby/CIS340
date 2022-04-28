import  React from 'react';
import { Text, Image, ScrollView } from 'react-native';


const dog = {
  url: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png',
 width: 64,
 height: 64
 };
 

export default  MyScrollViewApp = () => {
 

  return (
    <ScrollView style = {{padding: 40}}>
      <Text style = {{fonSize: 80}}> Try to scroll down </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style = {{fonSize: 80}}> Try to scroll down </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style = {{fonSize: 80}}> Try to scroll down </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
    </ScrollView>    

  );

  }


