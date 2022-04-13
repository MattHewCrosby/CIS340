import { React } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function MyApp() {
  
  return (
    <View>
      <Text>
        Hello There. I am a student in CIS340! 
        </Text>
      </View>
   
  );
}
export default function MultiComp(){
  return(
  <View>
<Text> {"\n\n\n\n\n\n\n"} Welcome to My Class </Text>
<MyApp />
<MyApp />
<MyApp />
<MyApp />
    </View>
  )
}


