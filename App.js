import { SafeAreaView, Text, View } from 'react-native';
import IntroScreen from './src/components/IntroScreen';
import { useState } from 'react';
import MainScreen from './src/components/MainScreen';

export default function App() {

  const [isLoaded , setIsLoaded] = useState(false)

  setTimeout(() => {
   setIsLoaded(true)
  }, 2000)
  
  return (
    <SafeAreaView>
      <View>
       {
        isLoaded ? <MainScreen/> : <IntroScreen/>
       }
       
      </View>
    </SafeAreaView>
  );
}


